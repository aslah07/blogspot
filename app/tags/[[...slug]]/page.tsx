import Breadcrumb from "@/components/features/BreadCrumbs";
import FlatBlogCard from "@/components/PageComponents/Blog/FlatBlogCard";
import { getDatabyTagId } from "@/lib/getData";
import Link from "next/link";
import React from "react";

export default async function page({ params }: { params: { slug?: string[] } }) {
  // `params` may be a Promise in Next; await it before using
  const awaitedParams = await params;
  const slugArray = awaitedParams.slug;

  const slugLength = slugArray?.length ?? 0;
  const tag = slugLength > 0 ? slugArray![slugArray!.length - 1] : "";

  const data = await getDatabyTagId(tag || "");
  const filteredPosts = data.FilteredTagsPost;
  const alltags = data.allTags;

  if (slugLength === 0) {
    return (
      <div>
        {alltags &&
          alltags.map((item, index) => (
            <Link
              key={index}
              className="inline-block bg-gray-200 text-gray-800 text-xs px-2 m-2 py-1 rounded-full hover:bg-gray-300 transition"
              href={`/tags/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
      </div>
    );
  }

  if (slugLength === 1) {
    return (
      <div className="blog-container">
        <Breadcrumb />

        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <p className="text-center">No posts found on {tag}</p>
          ) : (
            <>
              {filteredPosts.map((post) => (
                <FlatBlogCard key={post.id} data={post} />
              ))}
            </>
          )}
        </div>

        <div>
          <p>
            Found <span className="font-bold">{filteredPosts.length}</span> posts for tag: {tag}.
          </p>
        </div>
      </div>
    );
  }
}
