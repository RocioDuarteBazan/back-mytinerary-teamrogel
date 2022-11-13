const router = require('express').Router();
let {create ,read, readOnlyOne} = require ('../controllers/hotel');

router.post('/', create)
router.get('/', read)
router.get('/:id', readOnlyOne)

module.exports = router;
