"use client";
interface DownloadButtonProps {
    imageUrl: string;
    title?: string;
}

export default function DownloadButton({ imageUrl, title = 'artwork' }: DownloadButtonProps) {

      const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;

      // Try to get a filename from the URL, fallback to "artwork.jpg"
      const filename = imageUrl.split('/').pop()?.split('?')[0] || 'artwork.jpg';
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Clean up
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

    return (
        <button
            onClick={handleDownload}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition"
        >
            Download
        </button>
    );
}