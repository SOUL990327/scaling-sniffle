import { createClient } from "@/lib/supabase/server";
import Image from "@/components/ui/Image";
import { InfoIcon } from "lucide-react";

export const revalidate = 300; // Cache this page for 5 minutes

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data: ImageView, error } = await supabase
    .from("ImageView")
    .select("id, art_url");

  if (error) {
    console.error("Failed to fetch ImageView:", error.message);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <InfoIcon className="h-8 w-8 text-red-500 mb-2" />
        <p className="text-lg text-red-600 font-semibold">Failed to load images.</p>
      </div>
    );
  }

  if (!ImageView || ImageView.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <InfoIcon className="h-8 w-8 text-gray-400 mb-2" />
        <p className="text-lg text-gray-500 font-medium">No artwork available yet.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Art Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ImageView.map((img) => (
            <Image key={img.id} idt={img.id} source_id={img.art_url} />
          ))}
        </div>
      </section>
    </main>
  );
}
