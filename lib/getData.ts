import { Post } from "./types";

interface SortedPostsResult {
    mostLikedPosts: Post[];
    mostViewedPosts: Post[];
}

// import { error } from "console"
export async function GetAllData(pageNumber: number, limit: number) {
    const response = await fetch(`https://dummyjson.com/posts?skip=${pageNumber}&limit=${limit}`)
    if (!response.ok) throw new Error("Failed to fetch from endpoint")
    const data: { posts: Post[]; total: number } = await response.json();
    return { posts: data.posts, totalPage: Math.round(data.total / limit) }
}

export async function GetDataById(id: string) {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) throw new Error("Failed to fetch post by ID");
    const data: Post = await response.json();
    return data;
}

export async function GetsortData(): Promise<SortedPostsResult> {
    try {
        const url = "https://dummyjson.com/posts?limit=260";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data: { posts: Post[] } = await response.json();
        const posts = data.posts;

        // Create copies to avoid mutating original array
        const dataWithMostViews = [...posts].sort((a, b) => b.views - a.views);
        const dataWithMostLikes = [...posts].sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0));

        const mostLikedPosts = dataWithMostLikes.slice(0, 10);
        const mostViewedPosts = dataWithMostViews.slice(0, 10);

        return { mostLikedPosts, mostViewedPosts };
    } catch (error) {
        console.error("Error sorting data:", error);
        throw error;
    }
}
