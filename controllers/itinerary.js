const Itinerary = require('../models/Itinerary');

const controller = {
    readItineraries: async (req, res) => {
        let query = {}

        if (req.query.citiId) {
            query = { citiId: req.query.citiId };
        }
        if (req.query.userId) {
            query = {
                userId: req.query.userId
            };
        }
        try {
            let itineraries = await Itinerary.find(query).populate({path: 'userId', select:'role -_id'});
            if (itineraries) {
                res.status(200).json({
                    success: true,
                    message: "Event was found",
                    data: itineraries,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Event not found"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    create: async (req, res) => {
        try {
            let new_itinerary = await Itinerary.create(req.body);
            res.status(201).json(
                {
                    id: new_itinerary._id,
                    success: true,
                    message: 'Itinerary created successfully'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    update: async (req, res) => {
        let { id } = req.params
        try {
            let itineraries = await Itinerary.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (itineraries) {
                res.status(200).json({
                    success: true,
                    message: "The itinerary was successfully modified"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There is no itinerary that matches"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req, res) => {
        let { id } = req.params
        try {
            let itinerary = await Itinerary.findOneAndDelete({ _id: id })
            if (itinerary) {
                res.status(200).json({
                    success: true,
                    message: "The itinerary is removed"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There are no matching itinenary"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = controller;