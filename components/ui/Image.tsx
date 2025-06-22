export default async function ImageC({ source_id, idt }: { source_id: string; idt: string }) {
  return (
    <a
      href={`/art/${idt}`}
      className="block overflow-hidden rounded-xl shadow hover:shadow-md transition-all duration-300"
    >
      <img
        src={source_id}
        alt={`Artwork ${idt}`}
        className="w-full h-64 object-cover rounded-xl"
      />
    </a>
  );
}
