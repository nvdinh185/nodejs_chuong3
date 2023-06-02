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
            const listNews = await new Promise((resolve, reject) => {
                conn.query(`SELECT * FROM news`, (err, row) => {
                    if (err) reject(err);
                    resolve(row);
                })
            })
            res.status(200).send(listNews);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        } finally {
            conn.end();
        }
    }
}

module.exports = new NewsController();
