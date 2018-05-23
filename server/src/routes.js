module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Pozdrav ${req.body.email}! Your user was registered!`
    })
  })
}
