const { Router } = require('express')
const { getallUser, getaUser, updatedUser } = require('../controllers/auth.controller')
const { authMiddleware } = require('../middleware/auth.middleware')
const { loginUserCtrl } = require('../controllers/auth/login.controller')
const { registerUser } = require('../controllers/auth/register.controller')
const { logout } = require("../controllers/auth/logout.controller");
// import { authMiddleware, isAdmin } from '../middleware/auth.middleware'
// import { emptyCart, getUserCart, userCart } from '../controllers/cart.controller'
const AuthRouter = Router()

AuthRouter.post('/register', registerUser)
AuthRouter.get('/all-user', getallUser)
AuthRouter.get('/:id', getaUser)
AuthRouter.post('/login', loginUserCtrl)
// AuthRouter.post('/admin-login', loginAdmin)
AuthRouter.post('/logout', logout)
// // cart
// AuthRouter.post('/cart', authMiddleware, userCart)
// AuthRouter.get('/cart', authMiddleware, getUserCart)
// AuthRouter.delete('/empty-cart', authMiddleware, emptyCart)
// // user
AuthRouter.put('/edit-user', authMiddleware, updatedUser)
// AuthRouter.put('/password', authMiddleware, updatePassword)
// AuthRouter.delete('/:id', deleteaUser)

module.exports = { AuthRouter }