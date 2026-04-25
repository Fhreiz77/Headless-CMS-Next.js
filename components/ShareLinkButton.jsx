"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  console.log("ShareLinkButton " + copied);
  return (
      <button
        onClick={handleClick}
        className="border flex gap-1 items-center rounded-md px-2 py-1 text-gray-500 text-sm bg-gray-100 hover:bg-gray-200 hover:text-gray-700"
      >
        <LinkIcon className="h-4 w-4" />
        {copied ? "Link Copied" : "Share Link"}
      </button>
  );
}
