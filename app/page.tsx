import LatestPost from "@/components/PageComponents/Blog/LatestPost";
import FeaturedPost from "@/components/PageComponents/Blog/FeaturedPost";
import TrendingPost from "@/components/PageComponents/Blog/TrendingPost";
import PreNxtButton from "@/components/PreNxtButton";
import { getAllData, getSortedData } from "@/lib/getData";

export default async function Home() {
  const data = await getAllData(0, 10);
  const sortedData = await getSortedData();
  // console.log("Most liked data in Home page:", sortedData.mostLikedPosts);
  const postData = data.posts;
  const totalPage = data.totalPage;
  const mostViewedPosts = sortedData.mostViewedPosts;
  const mostLikedPosts = sortedData.mostLikedPosts;
  // console.log("Data in Home page:", data);

  return (
    <div className="blog-container">
      <div>
        <div className="hidden md:block">
          <TrendingPost
            type="boxed"
            blogCardNumber={3}
            data={mostViewedPosts}
          />
        </div>
        <div className="block md:hidden">
          <FeaturedPost data={mostLikedPosts} className="" blogCardNumber={1} />
        </div>
      </div>

      <div className="lg:flex">
        <LatestPost className="flex-1" data={postData} />
        <FeaturedPost
          data={mostLikedPosts}
          className="hidden lg:block lg:max-w-[320px] lg:pl-6"
          blogCardNumber={3}
        />
      </div>

      <div className="block md:hidden">
        <TrendingPost type="flat" data={mostViewedPosts} />
      </div>

      <div>
        <PreNxtButton totalPage={totalPage} current_page={1} />
      </div>
    </div>
  );
}
