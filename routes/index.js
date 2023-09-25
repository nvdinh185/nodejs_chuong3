const newsRouter = require('./news');

function route(app) {
    app.use('/list-news', newsRouter);
}

module.exports = route;
