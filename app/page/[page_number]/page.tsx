"use client";
// this a page for pagination
import { useParams } from "next/navigation";
import { Post } from "@/lib/types";
import { GetAllData } from "@/lib/getData";
import { useEffect, useState } from "react";
import PaginationButton from "@/app/components/PaginationButton";
import BlogCard from "@/app/components/PageComponents/Blog/BlogCard";
import "@/app/components/PageComponents/Blog/Blog.css";
import PreNxtButton from "@/app/components/PreNxtButton";
import TrendingPost from "@/app/components/PageComponents/Blog/TrendingPost";
import LatestPost from "@/app/components/PageComponents/Blog/LatestPost";
import PinnedPost from "@/app/components/PageComponents/Blog/PinnedPost";

export default function Page() {
  const [totalPage, setTotalPage] = useState(0);
  const [content, setContent] = useState<Post[]>([]);
  const { page_number } = useParams();
  const current_page_params =
    page_number !== undefined ? parseFloat(page_number as string) : 0;

  useEffect(() => {
    async function fetchData() {
      const current_page = (current_page_params - 1) * 12;
      const data = await GetAllData(current_page, 12);
      const post = data.posts;
      console.log("Fetched Post Data:", post);
      setContent(post);
      setTotalPage(data.totalPage);
    }
    fetchData();
  }, [current_page_params]);

  return (
    <div className="blog-container">
      <div className="hidden md:block">
        <TrendingPost />
      </div>

      <div className="lg:flex">
        <LatestPost className="flex-1" />
        <PinnedPost className="lg:max-w-[320px] lg:pl-6" />
      </div>

      <div className="block md:hidden">
        <TrendingPost />
      </div>

      <div>
        <PreNxtButton
          totalPage={totalPage}
          current_page={current_page_params}
        />
      </div>
    </div>
  );
}
