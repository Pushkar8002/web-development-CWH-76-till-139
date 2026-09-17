"use client";

import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<string>("");

  const handleClick = async () => {
    const data = {
      name: "Shubham",
      role: "Coder",
    };

    const result = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await result.json();
    setResponse(JSON.stringify(res, null, 2));
    console.log(res);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-100 p-6 text-slate-800">
      <h1 className="text-2xl font-bold">Next.js API route demo</h1>
      <button
        onClick={handleClick}
        className="rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
      >
        Send request
      </button>

      {response && (
        <pre className="w-full max-w-md overflow-x-auto rounded bg-slate-900 p-4 text-sm text-slate-100">
          {response}
        </pre>
      )}
    </div>
  );
}
