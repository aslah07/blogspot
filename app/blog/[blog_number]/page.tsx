"use client";
import Image from "next/image";
import Link from "next/link";
// this page is blog post content page
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id, page } = useParams();
  return (
    <div className="">
      {/* Image Section */}
      <div className="">
       <div className="relative max-w-[859px] h-[483px] mx-auto my-10">
         <Image
          src="https://picsum.photos/1920/1080"
          alt="Blog Post Image"
          width={1920}
          height={1080}
        />
       </div>
        <div className="flex justify-between items-center mt-6">
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
          <div className="flex gap-2">
            {["Tag-2", "Tag-3", "Tag-4"].map((tag, index) => (
              <Link
                key={index}
                className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 "
                href={`/tags/${tag.toLowerCase()}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[859px] mx-auto my-10">
        {/* Blog Content Section */}
        <div>
          <p>
            This is the blog post content for post number {id} on page {page}.
          </p>
          {/* Create warning box */}
          <div className="my-6">
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
              <p className="font-bold">Warning!</p>
              <p>This is a warning message for the blog post.</p>
            </div>
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              <p className="font-bold">Danger!</p>
              <p>This is a danger message for the blog post.</p>
            </div>
          </div>

          <div>
            {/* Create list box with design */}
            <ul className="list-disc list-inside w-full md:w-1/2 lg:w-1/3">
              <li className="my-2 p-2 border border-gray-300 rounded">
                First item in the list
              </li>
              <li className="my-2 p-2 border border-gray-300 rounded">
                Second item in the list
              </li>
              <li className="my-2 p-2 border border-gray-300 rounded">
                Third item in the list
              </li>
            </ul>
          </div>
        </div>

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