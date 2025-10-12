import React from "react";
import BlogCard from "./BlogCard";
import "./Blog.css";

export default function TrendingPost({ className }: { className?: string }) {
  return (
    <div className={`blog_section ${className}`}>
      <h1 className="section_heading">Trending Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
