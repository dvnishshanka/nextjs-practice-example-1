// our-domain.com/news
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/item-1">News Item 1</Link>
        </li>
        <li>
          <Link href="/news/item-2">News Item 2</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
