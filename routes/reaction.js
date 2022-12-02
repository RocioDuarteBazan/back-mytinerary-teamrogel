const router = require('express').Router();
const {createReactions, updateReaction, read } = require('../controllers/reaction')
const validator = require ("../middlewares/validator")
const schema = require ("../schema/reaction")
const passport =  require('../config/passport');

router.get('/', read);
router.post('/', validator (schema) , createReactions);
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction);


module.exports = router;