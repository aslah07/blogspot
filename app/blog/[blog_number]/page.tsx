// this page is blog post content page
"use client";
import AlertBox from "@/app/components/features/AlertBox";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import "./blogpage.css";

export default function page() {
  const { id, page } = useParams();
  return (
    <div className="flex px-4 lg:px-0">
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
            <h1 className="text-5xl font-bold my-4">Blog Post Title</h1>
            <div className="content-space space-y-8">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
              </p>
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            {/* Info box */}
            <div className="space-y-4 content-space w-full md:w-3/4 mx-auto">
              <h1 className="text-4xl font-bold">Alert Boxes</h1>
              <AlertBox
                type="warning"
                text="Warning ‼️"
                subtext="This is a warning message for the blog post."
              />
              <AlertBox
                type="danger"
                text="Danger 💀"
                subtext="This is a danger message for the blog post."
              />
              <AlertBox
                type="info"
                text="Info ℹ️"
                subtext="This is an info message for the blog post."
              />
              <AlertBox
                type="success"
                text="Success ✅"
                subtext="This is a success message for the blog post."
              />
            </div>
            {/* ordered/unordered list */}
            <div className="content-space w-full md:w-3/4 mx-auto space-y-8">
              {/* Create list box with design */}
              {/* Unordered List */}
              <div>
                <h2 className="text-4xl font-bold mb-4">Unordered List</h2>
                <ul className="list-disc list-inside w-full md:w-1/2 lg:w-1/3">
                  <li className="my-3">First item in the list</li>
                  <li className="my-3">Second item in the list</li>
                  <li className="my-3">Third item in the list</li>
                </ul>
              </div>
              {/* Ordered List */}
              <div>
                <h2 className="text-4xl font-bold mb-4">Ordered List</h2>
                <ol className="list-decimal list-inside w-full md:w-2/3 lg:w-1/3">
                  <li className="my-3">First item in the list</li>
                  <li className="my-3">Second item in the list</li>
                  <li className="my-3">Third item in the list</li>
                </ol>
              </div>
            </div>

            <div className="content-space">
              <div className="relative max-w-5/6 w-full mx-auto my-8">
                <Image
                  src="https://picsum.photos/1920/1080"
                  alt="Blog Post Image"
                  width={1280}
                  height={720}
                  className="max-h-5/6 w-full"
                />
                <figcaption className="text-center text-sm text-gray-500">
                  Image Caption goes here
                </figcaption>
              </div>
            </div>

            {/* Quote Box */}
            <div className="w-2/3 mx-auto content-space">
              <h2 className="text-4xl font-bold mb-4">Quote Box</h2>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600">
                "You can talk with someone for years, everyday, and still, it
                won't mean as much as what you can have when you sit in front of
                someone, not saying a word, yet you feel that person with your
                heart, you feel like you have known the person for forever....
                connections are made with the heart, not the tongue."
                <span className="block text-right mt-2">- C. JoyBell C.</span>
              </blockquote>
            </div>

            {/* Code Box */}
            
            {/*  */}
          </div>
        </div>
        {/* Blog Content Section end */}
        {/*  */}
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
