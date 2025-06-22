import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 300; // ISR every 5 minutes

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ArtPage({ params }: Props) {
  const { id } = await params; // ✅ Await now needed

  const supabase = createClient();
  const { data: ImageView, error } = await supabase
    .from("ImageView")
    .select("*")
    .eq("id", id);

  const art = ImageView?.[0];
  if (error || !art) {
    notFound(); // proper 404 via Next.js
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
       {/* Image section */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-50 p-6">
          <img
            src={art.art_url}
            alt={art.description || "Art"}
            className="h-64 w-64 object-cover rounded-xl"
          />
        </div>

        {/* Info section */}
        <div className="md:w-1/2 p-6 space-y-4 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{art.title}</h1>
          <p className="text-gray-600 text-sm">
            Source: <b>{art.source}</b>
          </p>
          <p className="text-gray-600 text-sm">
            Artist: <b>{art.artist}</b>
          </p>
          <p className="text-gray-500 text-sm mt-4">{art.description}</p>
        </div>
      </div>
    </div>
  );
}
