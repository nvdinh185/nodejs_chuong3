class NewsController {

    // [GET] /news
    index(req, res) {
        res.send({ a: 123 });
    }
}

module.exports = new NewsController();
