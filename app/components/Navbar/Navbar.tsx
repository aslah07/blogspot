import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-6">
      <div className="py-6 flex justify-between items-center">
        <div>
          <Link href="/" className="text-5xl font-bold">
            BLOGSPOT
          </Link>
        </div>
        <div>
          <ul className="flex gap-6 mt-4">
            <li className="text-[20px]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[20px]">
              <Link href="/about">About</Link>
            </li>
            <li className="text-[20px]">
              <Link href="/contact">Hire me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
