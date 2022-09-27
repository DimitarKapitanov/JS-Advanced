function getArticleGenerator(articles) {
    let content = document.getElementById('content');

    return function showNext() {
        if (articles.length > 0) {
            let article = document.createElement('article');
            content.appendChild(article);
            article.textContent = articles.shift();
        }
    }
}
