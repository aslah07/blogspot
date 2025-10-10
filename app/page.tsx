"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

interface Post {
  body: string;
  id: number;
  reactions: { likes: number; dislikes: number };
  tags: string[];
  title: string;
  userId: number;
  views: number;
}

export default function Home() {
  const [content, setContent] = useState<Post[]>([]);

  function truncateWords(
    text: string | null | undefined,
    maxWords = 10,
    ellipsis = "…"
  ) {
    if (!text) return "";
    const words = text.trim().split(/\s+/); // splits on any whitespace
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + ellipsis;
  }

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
    words = 10,
    chars,
    className,
  }: {
    text: string | null | undefined;
    words?: number;
    chars?: number; // if provided, use character-based truncation
    className?: string;
  }) {
    if (chars != null) {
      return <p className={className}>{truncateChars(text, chars)}</p>;
    }
    return <p className={className}>{truncateWords(text, words)}</p>;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get<{ posts: Post[] }>(
        "https://dummyjson.com/posts"
      );
      const blogData = response.data.posts.slice(0, 10)
      console.log(response.data.posts)
      console.log(blogData)
      // setContent(response.data.posts);
      setContent(blogData);
    }

    fetchData();
  }, []);
  return (
    <div className="grid gap-5 grid-cols-3">
      {content &&
        content.map((item, index) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <div className="bg-gray-300 border-2 overflow-hidden rounded-md">
              <div className="h-[250px]">
                <Image
                  className="w-full h-full object-cover"
                  alt={item.title}
                  src={`https://picsum.photos/500/500?random=${index + 1}`}
                  height={300}
                  width={400}
                />
              </div>
              <h1>{item.title}</h1>
              <CardParaLimit text={item.body} chars={35} />
            </div>
          </Link>
        ))}
    </div>
  );
}

