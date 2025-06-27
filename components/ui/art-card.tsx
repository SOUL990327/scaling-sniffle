import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import DownloadButton from "./download-button";

interface ArtCardProps {
  title: string;
  description: string;
  artist: string;
  source: string;
  imageUrl: string;
  tags?: string[];
}

export default function ArtCard({
  title,
  description,
  artist,
  source,
  imageUrl,
  tags = [],
}: ArtCardProps) {
  return (
    <div className="max-w-8xl mx-auto px-4 py-10">
      <Card className="flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-xl bg-white">
        {/* Image Section */}
        <div className="md:w-4/5 flex items-center justify-center bg-gray-100">
          <img
            src={imageUrl}
            alt={description || title}
            className="w-full h-auto aspect-square object-cover object-center"
          />
        </div>

        {/* Metadata Section */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col space-y-6">
          {/* Title and Description */}
          <CardHeader className="p-0">
            <CardTitle className="text-3xl font-bold text-gray-900">
              {title}
            </CardTitle>
            <CardDescription className="mt-2 text-base text-gray-700">
              {description}
            </CardDescription>
          </CardHeader>

          {/* Metadata Details */}
          <CardContent className="p-0 space-y-6 text-sm text-gray-600">
            <div className="space-y-1"><p>
              <strong>Artist:</strong> {artist}
            </p>
              <p>
                <strong>Date:</strong> March 2024
              </p>
              <p>
                <strong>Source:</strong> {source}
              </p>
            </div>
            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4">
            <DownloadButton imageUrl={imageUrl} title={title} />
              <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm hover:border-gray-500">
                Share
              </button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
