const { CustomError } = require('../errors/CustomError')

const errorHandler = (err, req, res, next) => {
    if(err instanceof CustomError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    res.status(500).json({ msg: err })
}

module.exports = errorHandler