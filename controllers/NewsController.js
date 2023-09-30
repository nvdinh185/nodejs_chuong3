const mysql = require('mysql');

const configDB = {
    host: "localhost",
    user: "root",
    password: "123456",
    database: "news"
};

class NewsController {

    // [GET] /news/list-news
    async index(req, res) {
        try {
            var conn = mysql.createConnection(configDB);

            var sqlSelect = "SELECT * FROM news";
            const listNews = await new Promise((resolve, reject) => {
                conn.query(sqlSelect, function (err, results) {
                    if (err) reject(err);
                    resolve(results);
                });
            });
            res.status(200).send(listNews);
        } catch (err) {
            console.log("Lỗi: " + err);
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new NewsController();
