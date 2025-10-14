import React from "react";
import FlatBlogCard from "./FlatBlogCard";
import TestBlogCard from "./TestBlogCard";
// import BlogCard from "./BlogCard";

export default function LatestPost({ className }: { className?: string }) {
  return (
    <div className={`latest_post ${className}`}>
      <h1 className="section_heading">Latest</h1>
      <div className="grid grid-cols-1 gap-5">
        {/* how to loop blogcard 10 times */}
        {[...Array(10)].map((_, index) => (
          <TestBlogCard key={index} className="" />
        ))}
        {/* {[...Array(10)].map((_, index) => (
          <TestBlogCard key={index} className="block md:hidden" />
        ))}
        {[...Array(10)].map((_, index) => (
          <FlatBlogCard key={index} className="hidden md:block" />
        ))} */}
      </div>
    </div>
  );
}
