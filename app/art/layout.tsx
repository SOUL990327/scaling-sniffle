import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="w-full border-b border-gray-200 shadow-sm bg-white">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6 sm:px-10">
          <Link href="/" className="text-lg font-bold tracking-tight hover:text-blue-600 transition">
            🎨 Art Gallery
          </Link>
          <Link href="/" className="text-lg tracking-tight hover:text-blue-600 transition">
            Nothing
          </Link>
          
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex-1 w-full max-w-6xl mx-auto px-6 py-12">
        {children}
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6 text-xs text-gray-500">
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
          <ThemeSwitcher />
        </div>
      </footer>
    </main>
  );
}
