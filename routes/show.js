const router = require('express').Router();
let {create, readShows,  update} = require ('../controllers/show');

router.post('/', create)
router.get('/', readShows)
router.patch('/:id', update)

module.exports = router;