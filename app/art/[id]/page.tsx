import { createClient } from "@/lib/supabase/client";

export const revalidate = 300; // Cache this page for 5 minutes

export default async function ArtPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = createClient();

  const { data: ImageView, error } = await supabase
    .from("ImageView")
    .select("*")
    .eq("id", params.id);

  if (error || !ImageView || ImageView.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Artwork not found.</p>
      </div>
    );
  }

  const art = ImageView[0];

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
            Source: <span className="font-medium">{art.source}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Artist: <span className="font-medium">{art.artist}</span>
          </p>
          <p className="text-gray-500 text-sm mt-4">{art.description}</p>
        </div>

      </div>
    </div>
  );
}
