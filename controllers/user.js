const User = require('../models/User');
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')
const accountVerificationEmail = require('../middlewares/accountVerificationEmail')
const { userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse } = require('../config/responses')
const jwt = require('jsonwebtoken')


const controller = {

    create: async (req, res, next) => {
        let { name, lastName, photo, age, email, password } = req.body
        let role = 'user'
        let verified = false
        let logged = false
        let code = crypto.randomBytes(10).toString('hex')
        password = bcryptjs.hashSync(password, 10)
        console.log(password)
        try {
            await User.create({ name, lastName, photo, age, email, password, role, verified, logged, code })
            await accountVerificationEmail(email, code)
            return userSignedUpResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    userVerification: async (req, res, next) => {
        let { code } = req.params

        try {
            let user = await User.findOneAndUpdate({ code: code }, { verified: true }, { new: true })
            if (user) {
                return res.redirect('https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif')
            } else {
                return userNotFoundResponse(req, res)
            }
        } catch (error) {
            next(error)
        }
    },
    logIn: async (req, res, next) => {
        let { password } = req.body;
        let { user } = req;
        try {
            const verifyPassword = bcryptjs.compareSync(password, user.password)
            if (verifyPassword) {
                await User.findOneAndUpdate({ mail: user.email }, { online: true }, { new: true })
                let token = jwt.sign(
                    { id: user.id },
                    process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 24 }

                )
                user = {
                    name: user.name,
                    email: user.email,
                    photo: user.photo,
                }
                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: 'Hi ' + user.name + ', we are happy to see you again'
                })
            }
            return invalidCredentialsResponse(req, res)
        } catch (error) {
            next(error)
        }
    },
    loginWithToken: async (req, res, next) => {
        let { user } = req;
        try {
            return res.json({
                response: {
                    user
                },
                success: true,
                message: `Welcome ${user.name}`
            })

        } catch (error) {
            next(error)
        }
    }
}


module.exports = controller;