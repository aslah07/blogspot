import BoxBlogCard from "./BoxBlogCard";

export default function FeaturedPost({
  className,
  blogCardNumber,
}: {
  className?: string;
  blogCardNumber: number | 3;
}) {
  return (
    <div className={`${className}`}>
      <div>
        <h1 className="section_heading">Featured</h1>
        <div className="grid lg:grid-cols-1 gap-6">
          {[...Array(blogCardNumber)].map((_, index) => (
            <BoxBlogCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
