import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 md:flex-row justify-between items-center p-6 bg-gray-200 text-black mt-12">
      <div className="">
        <h3>Thank for coming</h3>
      </div>

      {/* email */}
      <div>
        <Link href="mailto:aslahaboobacker2@gmail.com">
          Mail me on: aslahaboobacker2@gmail.com
        </Link>
      </div>

      {/* Social Media Handler */}
      {/* <div>
        <span>insta</span>          
        <span>FB</span>          
      </div> */}
    </footer>
  );
}
