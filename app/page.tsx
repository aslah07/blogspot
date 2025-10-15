import LatestPost from "@/components/PageComponents/Blog/LatestPost";
import FeaturedPost from "@/components/PageComponents/Blog/FeaturedPost";
import TrendingPost from "@/components/PageComponents/Blog/TrendingPost";
import PreNxtButton from "@/components/PreNxtButton";
import { GetAllData } from "@/lib/getData";

export default async function Home() {
  const data = await GetAllData(0, 10);
  
  const postData = data.posts;
  console.log("Fetched Data:", typeof data.posts);
  const totalPage = data.totalPage;
  console.log("Data in Home page:", data);

  return (
    <div className="blog-container">
      <div>
        <div className="hidden md:block">
          <TrendingPost type="boxed" blogCardNumber={3}/>
        </div>
        <div className="block md:hidden">
          <FeaturedPost data={postData} className="" blogCardNumber={1} />
        </div>
      </div>

      <div className="lg:flex">
        <LatestPost className="flex-1" data={postData} />
        <FeaturedPost
        data={postData}
          className="hidden lg:block lg:max-w-[320px] lg:pl-6"
          blogCardNumber={3}
        />
      </div>

      <div className="block md:hidden">
        <TrendingPost type="flat" />
      </div>

      <div>
        <PreNxtButton totalPage={totalPage} current_page={1} />
      </div>
    </div>
  );
}
