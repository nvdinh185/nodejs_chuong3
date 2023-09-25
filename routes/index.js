const newsRouter = require('./news');

function route(app) {
    app.use('/listNews', newsRouter);
}

module.exports = route;
