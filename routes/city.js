const router = require('express').Router();
let {create , read , readOnlyOne, update, destroy} = require ('../controllers/city');
const passport =  require('../config/passport');

const validator = require ("../middlewares/validator")
const schema = require ("../schema/city")

router.post('/',validator (schema), create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.put('/:id', passport.authenticate('jwt', { session:false }), update)
router.delete('/:id',  passport.authenticate('jwt', { session:false }), destroy)

module.exports = router;
