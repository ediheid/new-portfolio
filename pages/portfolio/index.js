import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <h1>This will be the Portfolio page</h1>

      <ul>
        <li>
          <Link href="/portfolio/myLola">My Lola</Link>
        </li>
      </ul>
    </>
  );
};

export default Portfolio;
