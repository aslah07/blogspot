import { getSortedData } from "@/lib/getData";
import CharsLimit from "../../features/CharsLimit";
import Link from "next/link";

export default async function BlogCardWithoutImage({
  type,
  classname,
  limit = 3,
}: {
  type: string;
  classname?: string;
  limit?: number;
}) {
  const data = await getSortedData();
  const mostViewedPosts = data.mostViewedPosts;
  {
    return (
      <div className={classname}>
        <h1 className="text-4xl font-semibold">{type}</h1>
        {mostViewedPosts.slice(0, limit).map((post, index) => (
          <Link
            key={index}
            className="flex items-center gap-4 my-4"
            href={post.id.toString()}
          >
            <div className="text-5xl text-gray-400">{index + 1}</div>
            <div>
              <h3 className="text-2xl font-medium ">{post.title}</h3>
              <CharsLimit text={post.body} limit={60} classname="text-sm" />
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
