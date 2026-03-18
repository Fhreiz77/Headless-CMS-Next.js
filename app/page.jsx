"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.alert("Hello Next.js");
  }, []);
  return (
    <>
      <h1>My Next.js App</h1>
      <p>Hello world, this is next.js app</p>
    </>
  );
}
