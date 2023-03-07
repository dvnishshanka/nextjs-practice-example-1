// our-domain.com/news/newsId
import { useRouter } from "next/router";

function NewsDetailPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  return <h1>The News Detail Page - {newsId}</h1>;
}

export default NewsDetailPage;
