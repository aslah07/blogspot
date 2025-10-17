// this a page for pagination
import { getAllData, getSortedData } from "@/lib/getData";
import LatestPost from "@/components/PageComponents/Blog/LatestPost";
import Breadcrumb from "@/components/features/BreadCrumbs";
import FeaturedPost from "@/components/PageComponents/Blog/FeaturedPost";
import PreNxtButton from "@/components/PreNxtButton";
import "./page.css";

export default async function Page({
  params,
}: {
  params: { page_number: string };
}) {
  const { page_number } = await params;
  const data = await getAllData(parseInt(page_number), 10);
  const sortedData = await getSortedData();
  const postData = data.posts;
  const totalPage = data.totalPage;
  const mostLikedPosts = sortedData.mostLikedPosts;

  return (
    <div className="">
      <div>
        <Breadcrumb className="m-4" />
      </div>

      <div className="lg:flex blog-container">
        <LatestPost className="flex-1" data={postData} />
        <FeaturedPost
          data={mostLikedPosts}
          className="hidden lg:block lg:max-w-[320px] lg:pl-6"
          blogCardNumber={3}
        />
      </div>

      <div>
        <PreNxtButton
          totalPage={totalPage}
          current_page={parseInt(page_number)}
        />
      </div>
    </div>
  );
}
