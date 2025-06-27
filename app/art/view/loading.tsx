export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full animate-pulse">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-64 bg-blue-300 border border-slate-300 rounded-xl shadow-sm"
          />
        ))}
      </div>
    </div>
  );
}
