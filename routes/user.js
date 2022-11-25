const router = require('express').Router();
const schema = require ("../schema/user");
const validator = require ("../middlewares/validator");
const {accountExists} = require ('../middlewares/accountExistsSignUp')
let {create, userVerification} = require ('../controllers/user');

router.post('/signup', validator(schema), accountExists, create);
router.get('/verify/:code', userVerification)

module.exports = router;
