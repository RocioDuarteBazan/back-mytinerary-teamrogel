const router = require('express').Router();
let {create, readShows,  update, destroy} = require ('../controllers/show');
const validator = require ("../middlewares/validator")
const passport = require("../config/passport")
const schema = require ("../schema/show.js")

router.get("/", readShows);
router.post("/", validator(schema),create);
router.patch("/:id",passport.authenticate('jwt', { session:false }), update);
router.delete("/:id",passport.authenticate('jwt', { session:false }), destroy);
module.exports = router;

module.exports = router;