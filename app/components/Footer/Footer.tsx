import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-6 bg-gray-300 text-black mt-12">
      <div className="hidden md:block">
        <h3>Thank for coming</h3>
      </div>

      {/* email */}
      <div>
        <Link href="mailto:aslahaboobacker2@gmail.com" className="text-red-400">
          aslahaboobacker2@gmail.com
        </Link>
      </div>

      {/* Social Media Handler */}
      <div>
        <div className="h-[30px] flex items-center gap-2.5">
          <Link href="https://www.fiverr.com/aslahforwork/develop-a-responsive-and-professional-website-for-your-business?context_referrer=tailored_homepage_perseus&source=recently_viewed_gigs&ref_ctx_id=4034e4ba92c641d6aad129bfe7b886ea&context=recommendation&pckg_id=1&pos=1&context_alg=recently_viewed&seller_online=true&imp_id=37a4857a-2a04-4f7c-b0b5-df77dd41719d">
            <Image
              src="./fiverr.svg"
              alt="fiverr"
              height={30}
              width={30}
              className="w-full h-[50px]"
            />
          </Link>

          <Image
            src="./insta.svg"
            alt="instagram"
            height={30}
            width={30}
            className="w-full h-[30px]"
          />
        </div>
      </div>
    </footer>
  );
}
