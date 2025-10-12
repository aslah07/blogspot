"use client";
// this page is blog post content page
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id, page } = useParams();
  return (
    <div>
      <h1>Page Number: {page}</h1>
      <h1>Content Id: {id}</h1>
    </div>
  );
}
