"use client";
import { useEffect } from "react";
import { GetAllData, GetsortData } from "@/lib/getData";
import LatestPost from "./components/PageComponents/Blog/LatestPost";
import PinnedPost from "./components/PageComponents/Blog/PinnedPost";
import TrendingPost from "./components/PageComponents/Blog/TrendingPost";
import PreNxtButton from "./components/PreNxtButton";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const getAllPostData = await GetAllData(0, 10);
        const getSortedPostedData = await GetsortData();
        // console.log("Fetched Post Data:", getAllPostData);
        // console.log("Fetched Sorted Post Data:", getSortedPostedData);
        // later mention to set state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="hidden md:block">
        <TrendingPost />
      </div>

      <div className="lg:flex px-4">
        <LatestPost className="flex-1" />
        <PinnedPost className="lg:max-w-[320px] px-4 lg:pl-6 pr-0" />
      </div>

      <div className="block md:hidden">
        <TrendingPost />
      </div>

      <PreNxtButton totalPage={21} current_page={1} />
    </div>
  );
}
