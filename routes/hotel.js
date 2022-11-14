const router = require('express').Router();
let {create ,read, readOnlyOne, update, destroy} = require ('../controllers/hotel');

router.post('/', create)
router.get('/', read)
router.get('/:id', readOnlyOne)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;
