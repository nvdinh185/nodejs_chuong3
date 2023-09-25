var headingElement = $("#heading");

headingElement.text('Trang tin VinaEnter Edu');

const ulElement = $("#list");

async function displayData() {
    var listNews = await axios.get('http://localhost:3000/list-news');
    listNews = listNews.data;

    var htmls = listNews.map(function (news) {
        return `
            <li>
                <a href="http://google.com/"><img src=images/${news.img} alt=${news.img} /></a>
                <div class="khoiphai">
                    <h2><a href="http://google.com/">${news.title}</a></h2>
                    <p>${news.content}</p>
                </div>
                <div class="clr"></div>
            </li>
        `;
    })

    ulElement.html(htmls.join(''));
}

displayData();