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
    // <div>
    //   <div>
    //     <h1 className="section_heading">
    //       will add path for bread crumbs later
    //     </h1>
    //   </div>
    //   <div>
    //     <div className="block md:flex gap-3 md:gap-6">
    //       <div className="md:mr-6">
    //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    //           {[...Array(12)].map((_, index) => (
    //             <BlogCard key={index} />
    //           ))}
    //         </div>
    //       </div>
    //       <div className="md:max-w-[300px] ">
    //         <h1 className="section_heading">Trending Posts</h1>
    //         <div className="grid grid-cols-1 gap-6">
    //           {[...Array(3)].map((_, index) => (
    //             <BlogCard key={index} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="">
    //     <PreNxtButton
    //       totalPage={totalPage}
    //       current_page={current_page_params}
    //     />
    //   </div>
    // </div>
    <div>
          <div className="lg:flex px-4">
            <LatestPost className="flex-1" />
            <PinnedPost className="lg:max-w-[320px] px-4 lg:pl-6 pr-0" />
          </div>
    
          <div className="block md:hidden">
            <TrendingPost />
          </div>

          <PreNxtButton totalPage={totalPage} current_page={current_page_params} />
        </div>
  );
}
