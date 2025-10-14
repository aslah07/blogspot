"use client";
import { useEffect, useState } from "react";
import { GetAllData, GetsortData } from "@/lib/getData";
import LatestPost from "./components/PageComponents/Blog/LatestPost";
import PinnedPost from "./components/PageComponents/Blog/PinnedPost";
import TrendingPost from "./components/PageComponents/Blog/TrendingPost";
import PreNxtButton from "./components/PreNxtButton";
import { useParams } from "next/navigation";
import { Post } from "@/lib/types";
import TestPost from "./components/PageComponents/Blog/Test";

export default function Home() {
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
      <PinnedPost className="lg:max-w-[320px] lg:pl-6" amount={1}/>
      <div className="hidden md:block">
        <TrendingPost />
      </div>

      <div className="lg:flex">
        <LatestPost className="flex-1" />
        <PinnedPost className="lg:max-w-[320px] lg:pl-6" amount={3}/>
      </div>

      <div className="">
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
