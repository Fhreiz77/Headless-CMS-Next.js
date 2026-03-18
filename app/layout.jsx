import Link from "next/link";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="eng">
      <head>
        <title>Learn Next.Js Fundamental</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact" prefetch={false}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children} </main>
        <footer>
          <hr />
          <span>I'm here to stay [footer]</span>
        </footer>
      </body>
    </html>
  );
}
