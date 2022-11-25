const router = require('express').Router();
let {create , read , readOnlyOne, update, destroy} = require ('../controllers/city');

const validator = require ("../middlewares/validator")
const schema = require ("../schema/city")

router.post('/',validator (schema), create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.put('/:id', update)
router.delete('/:id', destroy)

module.exports = router;
