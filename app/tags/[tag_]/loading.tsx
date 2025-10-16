export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75" />
      <p className="ml-4 text-gray-600">Loading posts...</p>
    </div>
  );
}
