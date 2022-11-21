const router = require('express').Router();
let {create ,read, readOnlyOne, update, destroy} = require ('../controllers/hotel');

const validator = require ("../middlewares/validator")
const schema = require ("../schema/hotel")

router.post('/', validator (schema), create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;
