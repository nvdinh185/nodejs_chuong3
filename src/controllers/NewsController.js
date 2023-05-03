class NewsController {
    // [GET] /news
    index(req, res) {
        res.send('news...');
    }
}

module.exports = new NewsController();
