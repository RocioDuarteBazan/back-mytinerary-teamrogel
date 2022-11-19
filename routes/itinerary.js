const router = require('express').Router();
let {readItineraries, create, update, destroy} = require ('../controllers/itinerary');

router.get('/', readItineraries)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router;