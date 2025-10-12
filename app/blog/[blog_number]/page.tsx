"use client";
import Image from "next/image";
import Link from "next/link";
// this page is blog post content page
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id, page } = useParams();
  return (
    <div>
      <div>
        {/* Image Section */}
        <div className="relative h-[483px] w-[859px] mx-auto my-10">
          <Image
            src="https://picsum.photos/1920/1080"
            alt="Blog Post Image"
            fill
          />
        </div>
        {/* Author Section and tags */}
        <div className="flex justify-between items-center">
          {/* Author */}
          <div className="flex gap-4">
            <Image
              src="https://picsum.photos/100/100"
              alt="Author Image"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Author Name</h2>
              <p className="text-sm text-gray-500">Published Date</p>
            </div>
          </div>
          {/* Tags */}
          <div>
            {["Tag-2", "Tag-3", "Tag-4"].map((tag, index) => (
              <Link
                key={index}
                className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2"
                href={`/tags/${tag.toLowerCase()}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        {/* Blog Content Section */}
        <div></div>

        {/* Feature Section */}
        <div></div>
      </div>

      {/*  */}
      <div>
        {/* Trending Section */}
        <div></div>
      </div>
    </div>
  );
}
