"use client";
// this a page for pagination
import { useParams } from "next/navigation";
import { Post } from "@/lib/types";
import { GetAllData } from "@/lib/getData";
import { useEffect, useState } from "react";
import PaginationButton from "@/app/components/PaginationButton";

export default function Page() {
  const [totalPage, setTotalPage] = useState(0);
  const [content, setContent] = useState<Post[]>([]);
  const { page_number } = useParams();
  const current_page_params =
    page_number !== undefined ? parseFloat(page_number as string) : 0;

  useEffect(() => {
    async function fetchData() {
      const current_page = (current_page_params - 1) * 10;
      const data = await GetAllData(current_page, 10);
      const post = data.posts;
      console.log(data.totalPage);
      setContent(post);
      setTotalPage(data.totalPage);

    }
    fetchData();
  }, [current_page_params]);

  return (
    <div>
      <div>Page number: {current_page_params}</div>
      <div>
        {content.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
      <PaginationButton totalPage={totalPage} />
    </div>
  );
}
