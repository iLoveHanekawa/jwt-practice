const jwt = require('jsonwebtoken')
const { StatusCodes } = require('http-status-codes')

const authMidWare = async (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw createCustomError('No token provided', StatusCodes.UNAUTHORIZED)
    }
    const token = authHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
        
    } catch (error) {
        throw createCustomError('Not authorized to access this route', StatusCodes.BAD_REQUEST)
    }
}

module.exports = authMidWare