//http://localhost:3000/news

function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <a href="/news/news-item">News Item</a>
        </li>
        <li>
          <a href="/news/news-today">News Today</a>
        </li>
      </ul>
    </div>
  );
}

export default NewsPage;
