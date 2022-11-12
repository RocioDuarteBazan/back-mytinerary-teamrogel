const router = require('express').Router();
let {create, readItineraries} = require ('../controllers/itinerary');

router.post('/', create)
router.get('/', readItineraries)

module.exports = router;