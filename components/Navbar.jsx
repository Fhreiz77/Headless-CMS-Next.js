import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link
            href="/"
            className="text-mist-800 hover:text-kuze-orange transition-all font-montserrat "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="text-mist-800 hover:text-kuze-orange transition-all font-montserrat "
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-mist-800 hover:text-kuze-orange transition-all font-montserrat "
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-mist-800 hover:text-kuze-orange transition-all font-montserrat "
            prefetch={false}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
