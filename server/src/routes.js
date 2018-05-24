const AuthController = require('./controllers/AuthController')
const AuthPolicy = require('./policies/AuthPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthPolicy.register,
    AuthController.register)
}
