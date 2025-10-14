"use client";
import Link from "next/link";
import Image from "next/image";

export default function TestBlogCard({ className }: { className?: string }) {
  function truncateChars(
    text: string | null | undefined,
    maxChars = 100,
    ellipsis = "…"
  ) {
    if (!text) return "";
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars) + ellipsis;
  }

  function CardParaLimit({
    text,
    chars,
    className,
  }: {
    text: string | null | undefined;
    chars: number;
    className?: string;
  }) {
    return <p className={className}>{truncateChars(text, chars)}</p>;
  }
  return (
    <div className="border-2 border-[#00000012] hover:shadow-lg transition-shadow duration-300">
      <Link href={"/blog/1"} className="block overflow-hidden">
        <div className="flex items-center h-full flex-row">
          {/* Image Section */}
          <div className="h-48 w-full md:max-w-[320px] relative">
            <Image
              src="https://picsum.photos/500/300"
              alt="Blog Post Image"
              // width={400}
              // height={300}
              // className=""
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="my-auto p-4 space-y-2">
            <h2 className="text-2xl font-bold">Blog Post Title</h2>
            <CardParaLimit
              chars={80}
              className="text-sm"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
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
