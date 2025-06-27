export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center space-y-4">
        <div className="w-40 h-40 bg-gray-300 rounded-xl mx-auto animate-pulse" />
        <div className="h-6 bg-gray-700 rounded w-48 mx-auto animate-pulse" />
        <div className="h-4 bg-gray-500 rounded w-32 mx-auto animate-pulse" />
        <div className="h-4 bg-gray-400 rounded w-64 mx-auto animate-pulse" />
      </div>
    </div>
  );
}
