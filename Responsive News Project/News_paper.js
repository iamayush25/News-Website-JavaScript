async function getTopHeadlines() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0d4d93237b364b27aed4c48768350fdd')
    const data = await response.json();
    const articles = await data.articles;
    console.log(articles);
    displayArticles(articles);
}
function displayArticles(articles) {
    const newsContainer = document.getElementById("newsContainer");
    newsContainer.innerHTML = "";

    articles.map((article) => {
        newsContainer.innerHTML += `
        <div class="newsArticle">
            <img src="${article.urlToImage}" alt="${article.source.name}" />
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <h3> Read full artical <a target = "_blank" href = "${article.url}">&#8594;</a></h3>
    </div>`
    })
}
async function searchNews() {     
    const searchInput =
        document.getElementById("searchInput").value;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${searchInput}&apiKey=0d4d93237b364b27aed4c48768350fdd`);
        const data = await response.json();
        const articles = await data.articles;
        displayArticles(articles);
}
getTopHeadlines();