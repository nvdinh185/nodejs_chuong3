const News = require("../model/news.js");

class NewsController {

    // [GET] /news
    async getListNews(req, res) {
        try {
            const listNews = await News.find();
            res.status(200).send(listNews);
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

module.exports = new NewsController();
