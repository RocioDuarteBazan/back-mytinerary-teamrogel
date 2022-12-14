const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    citiId: {type: mongoose.Types.ObjectId, ref: 'cities', required: true},
    name: { type: String, required: true },
    photo: [{ type: String, required: true }],
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true},
});

const Itinerary = mongoose.model("itineraries", schema);
module.exports = Itinerary;