import Navbar from "@/components/Navbar";
import "./globals.css";
import { montserrat } from "@/app/fonts";

export const metadata = {
  title: {
    default: "Situs Next.js",
    template: "%s | Situs Next.js",
  },
  description: "Kumpulan tutorial belajar next js dari dasar",
};

export default function Layout({ children }) {
  return (
    <html lang="eng">
      <body
        className={`bg-mist-100 p-4 flex flex-col min-h-screen ${montserrat.variable}`}
      >
        <header>
          <Navbar />
        </header>
        <main className="py-3 grow">{children} </main>
        <footer className="border-t py-3 text-center text-s">
          <span className="text-kuze-cyan">I'm here to stay [footer]</span>
        </footer>
      </body>
    </html>
  );
}
