import React from "react";
import FlatBlogCard from "./FlatBlogCard";
// import BlogCard from "./BlogCard";

export default function LatestPost({ className }: { className?: string }) {
  return (
    <div className={`latest_post ${className}`}>
      <h1 className="section_heading">Latest Posts</h1>
      <div className="grid grid-cols-1 gap-5">
        {/* how to loop blogcard 10 times */}
        {[...Array(10)].map((_, index) => (
          <FlatBlogCard key={index} />
        ))}
      </div>
    </div>
  );
}
