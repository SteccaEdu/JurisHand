const bodyParser = require('body-parser')
const articles = require('./articlesRoute')

module.exports = app => {
  app.use(bodyParser.json())
  app.use(articles)
}