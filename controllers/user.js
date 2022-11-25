const User = require('../models/User');
const bcryptjs = require ('bcryptjs')
const crypto = require ('crypto')
const accountVerificationEmail = require ('../middlewares/accountVerificationEmail')
const {userSignedUpResponse, userNotFoundResponse} = require ('../config/responses')


const controller = {

    create: async(req,res,next) => {
            let { name, lastName, photo, age, email, password } = req.body
            let role = 'user'
            let verified = false
            let logged = false
            let code = crypto.randomBytes(10).toString('hex')
            password = bcryptjs.hashSync(password,10)
            console.log(password)     
        try {
            await User.create({ name, lastName, photo, age, email, password, role, verified, logged, code })
            await accountVerificationEmail(email,code)
            return userSignedUpResponse(req,res)
        } catch(error) {
            next(error)
        }
    },

    userVerification: async(req,res,next) => {
        let { code } = req.params

        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if(user){
                return res.redirect('https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif')
            }else{
                return userNotFoundResponse(req,res)
            }
        } catch(error) {
            next(error)
        }
    },
}


module.exports = controller;