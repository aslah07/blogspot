"use client";
import Image from "next/image";
import Link from "next/link";
// this page is blog post content page
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id, page } = useParams();
  return (
    <div className="lg:flex px-4 lg:px-0">
      <div className="flex-1">
        {/* Image, Author, tag Section */}
        <div>
          <div className="relative h-3/6 mx-auto my-8">
            <Image
              src="https://picsum.photos/1920/1080"
              alt="Blog Post Image"
              width={1920}
              height={1080}
            />
          </div>
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
        {/* Blog Content Section */}
        <div className="">
          <div>
            <p>
              This is the blog post content for post number {id} on page {page}.
            </p>
            {/* Create warning box */}
            <div className="space-y-4 my-4 w-full md:w-3/4 mx-auto">
              <h1 className="text-4xl font-bold">Alert Boxes</h1>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
                <p className="font-bold">Warning ‼️</p>
                <p>This is a warning message for the blog post.</p>
              </div>
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p className="font-bold">Danger 💀</p>
                <p>This is a danger message for the blog post.</p>
              </div>
              <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4">
                <p className="font-bold">Info ℹ️</p>
                <p>This is an info message for the blog post.</p>
              </div>
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
                <p className="font-bold">Success ✅</p>
                <p>This is a success message for the blog post.</p>
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
        </div>
      </div>

      {/* Post Section */}
      <div className="min-w-[360px] px-4 lg:pl-6 pr-0 py-10">
        {/*  */}
        <div className="mb-10">
          {/* h1 need 52 font size */}
          <h1 className="text-4xl font-semibold">Latest Post</h1>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-4 my-4">
              <div className="text-5xl text-gray-400">{item}</div>
              <div>
                <h3 className="text-2xl font-medium ">Latest Post Title</h3>
                <p className="text-sm">
                  Latest post description goes here.....
                </p>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
        <div className="mb-10">
          {/* h1 need 52 font size */}
          <h1 className="text-4xl font-semibold">Related Post</h1>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex items-center gap-4 my-4">
              <div className="text-5xl text-gray-400">{item}</div>
              <div>
                <h3 className="text-2xl font-medium ">Related Post Title</h3>
                <p className="text-sm">
                  Related post description goes here.....
                </p>
              </div>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
}
