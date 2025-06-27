// import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '🎨 Art Gallery',
  description: 'Explore hand-picked artworks from emerging and established artists.',
}
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="w-full border-b border-gray-200 shadow-sm bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6 sm:px-10">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-blue-600 transition">
            🎨 Art Gallery
          </Link>
          <Link href="/art/view" className="text-lg tracking-tight hover:text-blue-600 transition">
            View
          </Link>

        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-1 w-full max-w-8xl mx-auto px-6 py-12">
        {children}
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500">
          <p>
            Powered by{" "}
            <a
              href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-blue-600 hover:underline"
            >
              Supabase
            </a>
          </p>
          {/* <ThemeSwitcher />  */}
          <div className="w-5 h-5 bg-slate-200"></div>
        </div>
      </footer>
    </main>
  );
}
