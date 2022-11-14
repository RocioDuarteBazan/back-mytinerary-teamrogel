const router = require('express').Router();
let {readItineraries, create, update} = require ('../controllers/itinerary');

router.get('/', readItineraries)
router.post('/', create)
router.put('/:id', update)

module.exports = router;