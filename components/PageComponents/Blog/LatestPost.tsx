import React from "react";
import FlatBlogCard from "./FlatBlogCard";

export default function LatestPost({ className, data }: { className?: string, data?: any[] }) {
  return (
    <div className={`latest_post ${className}`}>
      <h1 className="section_heading">Latest</h1>
      <div className="grid grid-cols-1 gap-5">
        {data && data.map((item, index) => (
          <FlatBlogCard key={index} className="" data={item} />
        ))}
      </div>
    </div>
  );
}
