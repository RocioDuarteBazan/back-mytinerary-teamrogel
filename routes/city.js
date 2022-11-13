const router = require('express').Router();
let {create , read , readOnlyOne, update} = require ('../controllers/city');

router.post('/', create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.put('/:id', update)

module.exports = router;
