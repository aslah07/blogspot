import React from "react";
import BlogCard from "./BlogCard";

export default function LatestPost({ className }: { className?: string }) {
  return (
    <div className={`latest_post ${className}`}>
      <h1 className="section_heading">Latest Posts</h1>
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {/* how to loop blogcard 10 times */}
        {[...Array(10)].map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
}
