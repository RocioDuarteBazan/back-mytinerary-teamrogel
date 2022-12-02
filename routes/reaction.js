const router = require('express').Router();
const {createReactions, updateReaction, read, destroy } = require('../controllers/reaction')
const validator = require ("../middlewares/validator")
const schema = require ("../schema/reaction")
const passport =  require('../config/passport');
const Reaction = require('../models/Reaction');
const verifyUser = require('../middlewares/verifyUser');

router.get('/', read);
router.post('/', validator (schema) , createReactions);
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction);
router.put('/:id', passport.authenticate("jwt", { session: false }), verifyUser(Reaction), destroy);


module.exports = router;