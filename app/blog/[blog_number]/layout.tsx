import type { Metadata } from "next";
import "./blogpage.css";

export const metadata: Metadata = {
  title: "Blog | Blog Spot",
  description: "Learn, Read, Sleep",
  icons: {
    icon: "/favicon.svg",
  },
};

interface BlogLayoutProps {
  children: React.ReactNode;
  params?: {
    title?: string;
  };
}

export default function BlogLayout({
  children,
  params,
}: Readonly<BlogLayoutProps>) {
  return (
    <html lang="en">
      <head>
        <title>{params?.title ? `${params.title} | Blog Spot` : "Blog | Blog Spot"}</title>
      </head>
      <body className="antialiased">
        <main className="main-container">
          {children}
        </main>
      </body>
    </html>
  );
}