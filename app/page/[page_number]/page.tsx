// this a page for pagination
import { GetAllData } from "@/lib/getData";
import LatestPost from "@/components/PageComponents/Blog/LatestPost";
import Breadcrumb from "@/components/features/BreadCrumbs";
import FeaturedPost from "@/components/PageComponents/Blog/FeaturedPost";
import PreNxtButton from "@/components/PreNxtButton";

export default async function Page({
  params,
}: {
  params: { page_number: string };
}) {
  const { page_number } = await params;
  const data = await GetAllData(parseInt(page_number), 10);
  const postData = data.posts;
  const totalPage = data.totalPage;
  console.log("Data in Pagination:", data);

  return (
    <div className="blog-container">
      <Breadcrumb />

      <div className="lg:flex">
        <LatestPost className="flex-1" data={postData} />
        <FeaturedPost
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
