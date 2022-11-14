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
}

module.exports = controller;