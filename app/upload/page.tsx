import UploadForm from '@/components/ui/upload_form';
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
export default async function Home() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full px-6 py-12 bg-white rounded-xl shadow">
        <UploadForm />
      </div>
    </main>
  );
}
