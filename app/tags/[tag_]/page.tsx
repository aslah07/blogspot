import Breadcrumb from "@/components/features/BreadCrumbs";
import FeaturedPost from "@/components/PageComponents/Blog/FeaturedPost";
import FlatBlogCard from "@/components/PageComponents/Blog/FlatBlogCard";
import LatestPost from "@/components/PageComponents/Blog/LatestPost";
import { getDatabyTagId } from "@/lib/getData";
import React from "react";

export default async function page({ params }: { params: { tag_: string } }) {
  const { tag_ } = await params;
  const filteredPosts = await getDatabyTagId(tag_);
  return (
    <div className="blog-container">
      <Breadcrumb />

      <div className="space-y-6">
        {/* <LatestPost className="flex-1" data={filteredPosts} /> */}
        {filteredPosts.length === 0 ? (
          <p className="text-center">No posts found for this tag.</p>
        ) : (
          <>
            {filteredPosts.map((post) => (
              <FlatBlogCard key={post.id} data={post} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
