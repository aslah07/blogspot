import Link from "next/link";

export default function PaginationButton({
  totalPage,
  current_page,
}: {
  totalPage: number;
  current_page: number;
}) {
  const pageButtons = (page: number) => {
    const buttons = [];
    const range = 5;
    const start = Math.max(1, current_page - range);
    const end = Math.min(page, current_page + range);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <Link key={i} href={`/page/${i}`}>
          <button
            className={`px-3 py-1 border rounded-md m-1 ${
              current_page === i ? "bg-blue-500 text-white" : ""
            }`}
          >
            {i}
          </button>
        </Link>
      );
    }
    return buttons;
  };

  return <div>{pageButtons(totalPage ?? 0)}</div>;
}
