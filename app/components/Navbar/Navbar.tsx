import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-3 md:px-6">
      <div className="py-6 flex justify-between items-center">
        <div>
          <Link href="/" className="text-3xl md:text-5xl font-bold">
            BLOGSPOT
          </Link>
        </div>
        <div>
          <ul className="flex gap-3 md:gap-6">
            <li className="text-lg md:text-[20px]">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg md:text-[20px]">
              <Link href="/about">About</Link>
            </li>
            <li className="text-lg md:text-[20px]">
              <Link href="/contact">Hire me</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
