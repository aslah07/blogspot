"use client";
import Link from "next/link";
import Image from "next/image";

export default function FlatBlogCard() {
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
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="">
            <Image
              src="https://picsum.photos/500/300"
              alt="Blog Post Image"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Blog Post Title</h2>
            <CardParaLimit
              chars={80}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
