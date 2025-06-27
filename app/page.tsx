import Image from "next/image";
import Link from "next/link";
export const dynamic = 'force-static'; // App Router
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center bg-cover bg-center px-4 py-20 md:py-32"
        style={{ backgroundImage: "url('/hero-image.avif')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="relative z-10 text-center text-white max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Discover Inspiring Art
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 px-2">
            A curated collection of creativity and imagination.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link href="/art/view" className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200">
              View Gallery
            </Link>
            <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black">
              See Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Paintings", "Photography", "Mixed Media"].map((category) => (
            <div key={category} className="group rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
              <Image src={`/${category.toLowerCase().replace(/\s/g, '-')}.avif`} width={"160"} height={160} alt={category} className="w-full h-64 object-contain" />
              <div className="p-4">
                <h3 className="text-xl font-medium">{category}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creator Spotlight */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Spotlight</h2>
          <Image src="/profile.avif" alt="Featured Creator" width={160} height={160} className="w-40 h-40 mx-auto rounded-full mb-4 object-cover" />
          <h3 className="text-xl font-semibold">Alex Morgan</h3>
          <p className="mt-2 text-gray-600">Blending emotion and form, Alex's creations reflect a journey through color and space.</p>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">View Profile</button>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-black pl-4">
            <h3 className="text-xl font-bold">Online Art Showcase</h3>
            <p className="text-gray-600">July 15 - August 10 · Virtual Event</p>
          </div>
          <div className="border-l-4 border-black pl-4">
            <h3 className="text-xl font-bold">Gallery Night Experience</h3>
            <p className="text-gray-600">August 25 · Downtown Studio</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">What People Say</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            "A beautiful and immersive experience.",
            "Every piece had a story to tell.",
            "Absolutely stunning visuals!",
          ].map((feedback, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic">“{feedback}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Mailing List</h2>
        <p className="text-gray-600 mb-6">Be the first to know about new releases and events.</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-full border w-full" />
          <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">Subscribe</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-sm">&copy; 2025 Art Collective. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </main>
  );
}
