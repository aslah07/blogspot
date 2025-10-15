import "./Blog.css";
import FlatBlogCard from "./FlatBlogCard";
import BoxBlogCard from "./BoxBlogCard";

export default function TrendingPost({
  className,
  blogCardNumber = 3,
  type,
  data,
}: {
  className?: string;
  blogCardNumber?: number | 1;
  type: string;
  data?: any[];
}) {
  function typeAction(typeAction: string, amount: number) {
    // const dataSlice = data?.slice(0, amount);
    // console.log("Data Slice:", dataSlice);
    if (typeAction === "boxed") {
      return data
        ?.slice(0, amount)
        .map((item, index) => <BoxBlogCard key={index} data={item} />);
    }
    if (typeAction === "flat") {
      return data
        ?.slice(0, amount)
        .map((item, index) => <FlatBlogCard key={index} data={item} />);
    }
  }

  return (
    <div className={`blog_section ${className}`}>
      <h1 className="section_heading">Trending</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        {typeAction(type, blogCardNumber)}
      </div>
    </div>
  );
}
