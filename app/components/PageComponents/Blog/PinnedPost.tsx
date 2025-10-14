import React from "react";
import BlogCard from "./BlogCard";

export default function PinnedPost({
  className,
  amount,
}: {
  className?: string;
  amount: number | 3;
}) {
  return (
    <div className={`${className}`}>
      <div>
        <h1 className="section_heading">Featured</h1>
        <div className="grid lg:grid-cols-1 gap-6">
          {[...Array(amount)].map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
