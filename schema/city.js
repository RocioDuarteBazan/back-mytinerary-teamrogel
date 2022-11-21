const joi = require('joi')

const schema = joi.object({
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
    continent: joi.string()
        .required()
        .min(3)
        .max(30)
        .messages({
            'any.required': 'Continent is require',
            'string.empty': 'Continent is require',
            'string.min': 'A minimum of 3 characters is requested',
            'string.max': 'A maximum of 30 characters is requested',
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
            'any.required': 'Image is require',
            'string.empty': 'Image is require',
            'string.uri': 'A valid url is requested'
        }),
    population: joi.number()
        .messages({
            'any.required': 'Population is required',
            'number.empty': 'Population is required',  
        }),
    userId: joi.string()
        .required()
        .messages({
            'any.required': 'User is required',
        }),
})

module.exports = schema