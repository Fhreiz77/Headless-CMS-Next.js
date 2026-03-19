import Navbar from "../components/Navbar";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="eng">
      <head>
        <title>Learn Next.Js Fundamental</title>
      </head>
      <body className="bg-mist-100 p-4 flex flex-col min-h-screen">
        <header>
          <Navbar/>
        </header>
        <main className="py-3 grow">{children} </main>
        <footer className="border-t py-3 text-center text-s">
          <span>I'm here to stay [footer]</span>
        </footer>
      </body>
    </html>
  );
}
