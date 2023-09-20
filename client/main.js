async function getData() {
    var listNews = await axios.get('http://localhost:3000/news');
    listNews = listNews.data;
    console.log(listNews);
}

getData();