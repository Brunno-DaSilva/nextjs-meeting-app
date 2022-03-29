//http://localhost:3000/news

import Link from "next/link";

function NewsPage() {
  return (
    <div>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/news-item">News Item</Link>
        </li>
        <li>
          <Link href="/news/news-today">News Today</Link>
        </li>
      </ul>
    </div>
  );
}

export default NewsPage;
