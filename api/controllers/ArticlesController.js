const database = require('../models')
const { Op } = require('sequelize')

class ArticlesController {

  static async getAllArticles(req, res){
    try {
      const allArticles = await database.Articles.findAll({
        order: [['date', 'DESC']]
      })
      return res.status(200).json(allArticles)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getArticleByCategory(req, res) {
    const { category } = req.params
    try {
      const articles = await database.Articles.findAll({
        where: {
          category: category
        }
      })
      return res.status(200).json(articles)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getArticlesByKeyword(req, res) {
    const { keyword } = req.params;
    try {
      const articles = await database.Articles.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${keyword}%` } },
            { content: { [Op.like]: `%${keyword}%` } },
          ],
        },
      });
      return res.status(200).json(articles);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  

}

module.exports = ArticlesController