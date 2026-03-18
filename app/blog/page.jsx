import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blog</h1>
      <p>List of Posts</p>
      <ul>
        <li>
          <Link href="/belajar-nextjs">Belajar-nextjs</Link>
        </li>
        <li>
          <Link href="/latihan-route-nextjs">latihan-route-nextjs</Link>
        </li>
      </ul>
    </>
  );
}
