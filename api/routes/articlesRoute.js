const { Router } = require('express')
const ArticlesController = require('../controllers/ArticlesController')

const router = Router()

router.get('/articles', ArticlesController.getAllArticles)
router.get('/articles/cat/:category', ArticlesController.getArticleByCategory)
router.get('/articles/key/:keyword', ArticlesController.getArticlesByKeyword)

module.exports = router