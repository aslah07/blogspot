import Link from "next/link";

export default function PaginationButton({
  totalPage,
}: {
  totalPage?: number;
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
    for (let i = 1; i <= page; i++) {
      buttons.push(
        <Link key={i} href={`/page/${i}`}>
          <button
            className={`px-3 py-1 border rounded-md m-1 ${
              i === page ? "bg-blue-500 text-white" : ""
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
    <div className="">
      <div className="my-8 border-y-2 py-4">
        <h1 className="my-4">Old system</h1>
        {sample_page_number.map((page, index) => (
          <Link
            key={index}
            href={`/page/${page}`}
            className="px-3 py-1 border rounded-md m-1"
          >
            <button>{page}</button>
          </Link>
        ))}
      </div>

      <div>
        <h1 className="my-4">New system</h1>
        {pageButtons(totalPage ?? 0)}
      </div>
    </div>
  );
}
