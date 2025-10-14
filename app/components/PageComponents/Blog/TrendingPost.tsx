import "./Blog.css";
import FlatBlogCard from "./FlatBlogCard";
import BoxBlogCard from "./BoxBlogCard";

export default function TrendingPost({
  className,
  blogCardNumber = 3,
  type,
}: {
  className?: string;
  blogCardNumber?: number;
  type: string;
}) {
  function typeAction(typeAction: string, amount: number) {
    if (typeAction === "boxed") {
      return [...Array(amount)].map((_, index) => <BoxBlogCard key={index} />);
    }
    if (typeAction === "flat") {
      return [...Array(amount)].map((_, index) => <FlatBlogCard key={index} />);
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
