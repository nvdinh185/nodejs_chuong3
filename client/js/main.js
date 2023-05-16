var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Trang tin VinaEnter Edu';

const ulElement = document.querySelector("#list");


async function getData() {
    var listNews = await axios.get('http://localhost:3000/news/list-news');
    listNews = listNews.data;

    listNews.forEach(function (news) {
        const liElement = document.createElement('li');
        liElement.innerHTML = `
            <a href="http://google.com/"><img src=${news.img} alt=${news.img} /></a>
            <div class="khoiphai">
                <h2><a href="http://google.com/">${news.title}</a></h2>
                <p>${news.content}</p>
            </div>
            <div class="clr"></div>
        `;

        ulElement.appendChild(liElement);

    })

}

getData();