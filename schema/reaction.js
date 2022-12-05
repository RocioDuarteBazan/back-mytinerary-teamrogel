const joi = require('joi')

const schema = joi.object({
    itineraryId: joi.string()
        .messages({
            "string.empty": "The itineraryId' is empty",
        }),
    showId: joi.string()
        .messages({
            "string.empty": "The showId' is empty",
        }),
    name: joi.string()
        .required()
        .min(3)
        .max(30)
        .messages({
            'any.required': 'Name is require',
            'string.empty': 'Name is require',
            'string.min': 'A minimum of 3 characters is requested',
            'string.max': 'A maximum of 30 characters is requested',
        }),
    icon: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'Icon is require',
            'string.empty': 'Icon is require',
            'string.uri': 'A valid url is requested'
        }),
    iconBack: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'Icon is require',
            'string.empty': 'Icon is require',
            'string.uri': 'A valid url is requested'
        }),
    userId: joi.array()
        .required()
        .messages({
            'any.required': 'User is required',
        }),
})

module.exports = schema