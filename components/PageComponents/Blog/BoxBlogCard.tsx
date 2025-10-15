"use client";
import Link from "next/link";
import Image from "next/image";
import CharsLimit from "../../features/CharsLimit";

export default function BoxBlogCard({ data }: { data?: any }) {
  return (
    <div className="border-2 border-[#00000012] hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${data.id}`} className="block overflow-hidden">
        <div className="">
          {/* Image Section */}
          {/* <div className="">
            <Image
              src="https://picsum.photos/500/300/?random=3"
              alt="Blog Post Image"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div> */}

          {/* Content Section */}
          <div className="my-auto p-4 space-y-2">
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <CharsLimit limit={80} classname="text-sm" text={data.body} />
            <div className="space-y-1">
              <p className="text-sm text-gray-700">
                <span className="text-red-600">//</span> Written by:{" "}
                <span className="text-black font-semibold">Ash</span>
              </p>

              <p className="text-sm text-gray-700">
                Reading Time:{" "}
                <span className="text-black font-semibold">2 min</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
