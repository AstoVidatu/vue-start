module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB || 'vue-start',
    user: process.env.DB_USER || 'vue-start',
    password: process.env.DB_PASS || 'vue-start',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './vue-start.sqlite'
    }
  }
}
