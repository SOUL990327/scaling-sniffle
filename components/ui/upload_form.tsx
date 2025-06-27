"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function UploadForm() {
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [description, setDescription] = useState("");
  const [artist, setArtist] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleUpload = async () => {
    if (!file || !title.trim() || !artist.trim() || !source.trim()) {
      setStatus("Please fill out title, artist, source, and select an image.");
      return;
    }

    setLoading(true);
    setStatus("Uploading...");

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;

    const { error: storageError } = await supabase.storage
      .from("art-gallery")
      .upload(fileName, file);

    if (storageError) {
      setStatus(`Upload failed: ${storageError.message}`);
      setLoading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("art-gallery")
      .getPublicUrl(fileName);

    const imageUrl = urlData?.publicUrl;

    const { error: dbError } = await supabase.from("ImageView").insert([
      {
        title: title.trim(),
        source: source.trim(),
        description: description.trim(),
        artist: artist.trim(),
        art_url: imageUrl,
      },
    ]);

    if (dbError) {
      setStatus(`Database error: ${dbError.message}`);
    } else {
      setStatus("🎉 Artwork uploaded successfully!");
      setTitle("");
      setSource("");
      setDescription("");
      setArtist("");
      setFile(null);
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Upload Artwork</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Moonlit Vrindavan"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Source</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g., Vanipedia"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="e.g., Devotee Name"
            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the scene, characters, or feeling."
            className="mt-1 w-full border border-gray-300 rounded-md p-2 h-24 resize-none focus:ring focus:ring-blue-100 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image File</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-1 w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border file:rounded-md file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>

        <button
          onClick={handleUpload}
          disabled={loading}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            loading
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>

        {status && <p className="text-sm text-gray-600">{status}</p>}
      </div>
    </div>
  );
}
