//http://localhost:3000/news

import { useRouter } from "next/router";

function NewsDetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  // Send a request to the backend API
  //TO FETCH THE NEWS ITEM WITH NEWSid

  return (
    <div>
      <h1>{newsId} Page</h1>
    </div>
  );
}

export default NewsDetailsPage;
