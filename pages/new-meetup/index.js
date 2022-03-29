import Link from "next/link";

function NewsDetails() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/"> Home</Link>
            </li>
            <li>
              <Link href="/new-meetup/details"> News Details</Link>
            </li>
          </ul>
        </nav>
      </header>
      <p>News Details</p>
    </>
  );
}
export default NewsDetails;
