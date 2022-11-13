const router = require('express').Router();
let {create ,read, readOnlyOne, update} = require ('../controllers/hotel');

router.post('/', create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.patch('/:id', update)

module.exports = router;
