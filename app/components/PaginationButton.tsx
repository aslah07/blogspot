import Link from "next/link";

export default function PaginationButton({
  totalPage,
  current_page,
}: {
  totalPage: number;
  current_page: number;
}) {
  const sample_page_number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

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

  return (
    <div>
      {pageButtons(totalPage ?? 0)}
    </div>
  );
}
