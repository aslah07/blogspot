import React from "react";
import BlogCard from "./BlogCard";

export default function PinnedPost({ className }: { className?: string }) {
  return <div className={`md:max-w-[300px] ${className}`}>
    <div>
      <h1 className="section_heading">Pinned Post</h1>
      <div className="grid grid-cols-1 gap-6">
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
    </div>
  </div>;
}
