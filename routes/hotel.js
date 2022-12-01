const router = require('express').Router();
let {create ,read, readOnlyOne, update, destroy} = require ('../controllers/hotel');
const passport =  require('../config/passport');

const validator = require ("../middlewares/validator")
const schema = require ("../schema/hotel")

router.post('/', validator (schema), create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.patch('/:id', passport.authenticate('jwt', { session:false }), update)
router.delete('/:id', passport.authenticate('jwt', { session:false }), destroy)

module.exports = router;
