const router = require('express').Router();
let {readItineraries, create, update, destroy} = require ('../controllers/itinerary');
const passport =  require('../config/passport');
const Itinerary = require ('../models/Itinerary')

const validator = require ("../middlewares/validator")
const schema = require ("../schema/itinerary")

router.get('/', readItineraries)
router.post('/',passport.authenticate('jwt', { session:false }), validator (schema) , create)
router.put('/:id',passport.authenticate('jwt', { session:false }), update)
router.delete('/:id',passport.authenticate('jwt', { session:false }), destroy)

module.exports = router;