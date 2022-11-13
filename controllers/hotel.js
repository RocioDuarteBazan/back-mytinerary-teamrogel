const Hotel = require('../models/Hotel');

const controller = {

    create: async (req, res) => {
        try {
            let new_hotel = await Hotel.create(req.body);
            res.status(201).json(
                {
                    id: new_hotel._id,
                    success: true,
                    message: 'Hotel created successfully'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    read: async (req, res) => {
        let query = {};
        let order = {};
        if (req.query.name) {
            query = { name: { $regex: req.query.name, $options: 'i' } }
        }
        if (req.query.order) {
            order = { capacity: req.query.order }
        }
        try {
            let get_hotel = await Hotel.find(query).sort(order)
            res.status(200).json(
                {
                    id: get_hotel._id,
                    data: get_hotel,
                    success: true,
                    message: 'Hotel read successfully'
                }
            )
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    readOnlyOne: async (req, res) => {
        let id = req.params.id;
        try {
            let hotel = await Hotel.findOne({ _id: id }).populate({ path: 'userId', select: 'name photo -_id' });
            if (hotel) {
                res.status(200).json({
                    response: hotel,
                    success: true,
                    message: "Found hotel"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "No hotel obtained"
                })
            }
        } catch (error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = controller;