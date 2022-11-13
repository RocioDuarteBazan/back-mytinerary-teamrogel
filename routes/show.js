const router = require('express').Router();
let {create, readShows} = require ('../controllers/show');

router.post('/', create)
router.get('/', readShows)

module.exports = router;