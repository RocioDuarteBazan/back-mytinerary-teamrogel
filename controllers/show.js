const Show = require('../models/Show');

const controller = {

    create: async (req, res) => {
        try {
            let new_show = await Show.create(req.body);
            res.status(201).json(
                {
                    id: new_show._id,
                    success: true,
                    message: 'Show created successfully.'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readShows: async (req, res) => {
        let query = {}

        if (req.query.hotelId) {
            query = { hotelId: req.query.hotelId };
        }
        if (req.query.userId) {
            query = {
                userId: req.query.userId
            };
        }
        try {
            let shows = await Show.find(query);
            if (shows) {
                res.status(200).json({
                    success: true,
                    message: "Show was found",
                    data: shows,
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "Show not found"
                })
            }
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
            let show = await Show.findOneAndUpdate({ _id: id }, req.body, { new: true })
            if (show) {
                res.status(200).json({
                    data: show,
                    success: true,
                    message: "The show was successfully modified"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There is no show that matches"
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
            let show = await Show.findOneAndDelete({ _id: id })
            if (show) {
                res.status(200).json({
                    success: true,
                    message: "The show is removed"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "There are no matching shows"
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