"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter((segment) => segment)
    .map((segment, index, arr) => {
      const href = "/" + arr.slice(0, index + 1).join("/");
      const label = decodeURIComponent(segment)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      return { href, label };
    });

  return (
    <nav className="flex items-center gap-2 text-sm mb-2">
      <Link href="/" className="text-blue-500 hover:underline">
        Home
      </Link>

      {segments.map((segment, index) => (
        <div key={segment.href} className="flex items-center gap-2">
          <span className="text-gray-400">/</span>
          {index === segments.length - 1 ? (
            <span className="text-gray-700 font-medium">{segment.label}</span>
          ) : (
            <Link href={segment.href} className="text-blue-500 hover:underline">
              {segment.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}