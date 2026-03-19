import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2 bg-slate-800">
        <li>
          <Link
            href="/"
            className="text-mist-200 hover:text-cyan-600 hover:underline "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-mist-200 hover:text-cyan-600 hover:underline "
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-mist-200 hover:text-cyan-600 hover:underline "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-mist-200 hover:text-cyan-600 hover:underline "
            prefetch={false}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
