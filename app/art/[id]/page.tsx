import ArtCard from "@/components/ui/art-card";
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
     <ArtCard
      title={art.title}
      description={art.description}
      artist={art.artist}
      source={art.source}
      imageUrl={art.art_url}
    />
  );
}
