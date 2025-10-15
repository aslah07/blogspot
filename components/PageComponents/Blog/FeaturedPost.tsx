import BoxBlogCard from "./BoxBlogCard";

export default function FeaturedPost({
  className,
  blogCardNumber,
  data,
}: {
  className?: string;
  blogCardNumber: number | 3;
  data: any[];
}) {
  return (
    <div className={`${className}`}>
      <div>
        <h1 className="section_heading">Featured</h1>
        <div className="grid lg:grid-cols-1 gap-6">
          {data &&
            data
              .slice(0, blogCardNumber)
              .map((item, index) => <BoxBlogCard key={index} data={item} />)}
        </div>
      </div>
    </div>
  );
}
