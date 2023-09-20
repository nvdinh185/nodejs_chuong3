class NewsController {

    // [GET] /news
    index(req, res) {
        res.send({ name: 'Đây là 1 tin tức!' });
    }
}

module.exports = new NewsController();
