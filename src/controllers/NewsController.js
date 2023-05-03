class NewsController {
    // [GET] /news
    index(req, res) {
        res.json({ a: 123 });
    }
}

module.exports = new NewsController();
