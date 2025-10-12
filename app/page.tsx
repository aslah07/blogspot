"use client";
import { useEffect } from "react";
import { GetAllData, GetsortData } from "@/lib/getData";
import LatestPost from "./components/PageComponents/Blog/LatestPost";
import PinnedPost from "./components/PageComponents/Blog/PinnedPost";
import TrendingPost from "./components/PageComponents/Blog/TrendingPost";

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

      <div className="block md:flex gap-3 md:gap-6">
        <LatestPost className="md:mr-6" />
        <PinnedPost className="" />
      </div>

      <div className="block md:hidden">
        <TrendingPost />
      </div>

      <div>
        {/* <PageChangeButton /> */}
      </div>
    </div>
  );
}
