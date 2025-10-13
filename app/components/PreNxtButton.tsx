import Link from "next/link";

export default function PreNxtButton({
  totalPage,
  current_page,
}: {
  totalPage: number;
  current_page: number;
}) {
  const hasPrevious = current_page > 1;
  const hasNext = current_page < totalPage;

  return (
    <div className="flex gap-2 items-center justify-between my-10">
      {hasPrevious ? (
        <Link href={`/page/${current_page - 1}`}>
          <button className="px-8 py-3 border-r-2 border-blue-500 bg-blue-300 text-black font-semibold">
            Previous
          </button>
        </Link>
      ) : (
        <button disabled className="px-8 py-3 border-r-2 bg-gray-300 text-gray-500 cursor-not-allowed">
          Previous
        </button>
      )}

      <span className="px-3 py-2 text-sm font-medium">
        Page {current_page} of {totalPage}
      </span>

      {hasNext ? (
        <Link href={`/page/${current_page + 1}`}>
          <button className="px-8 py-3 border-l-2 border-green-500 bg-green-300 text-black font-semibold">
            Next
          </button>
        </Link>
      ) : (
        <button disabled className="px-8 py-3 border-l-2 bg-gray-300 text-gray-500 cursor-not-allowed">
          Next
        </button>
      )}
    </div>
  );
}