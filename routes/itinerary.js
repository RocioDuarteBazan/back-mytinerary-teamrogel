const router = require('express').Router();
let {readItineraries, create} = require ('../controllers/itinerary');

router.get('/', readItineraries)
router.post('/', create)

module.exports = router;