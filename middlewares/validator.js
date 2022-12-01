const validator = (schema) => [
    (req, res, next) => {
        const validation = schema.validate(req.body, {abortEarly:false})
        if (validation.error) {
            return res.status(200).json({
                success: false,
                message: validation.error.details.map(error=>error.message)
            })
        }
        next()
    }
]

module.exports = validator;