import Image from "next/image";

export default function WhyBookLeaf() {
  return (
    <main className="max-w-[108rem] mx-auto px-16 py-16 bg-white  ">

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2F4F4F] mb-6 leading-tight">
            Why bookleaf?
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            bookleaf is more than a bookstore.  
            It’s a place where stories continue their journey —
            from one reader’s shelf to another’s heart.
          </p>
        </div>

        <div className="relative w-full min-h-[350px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/home/book1.jpg"
            alt="Old books"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="grid md:grid-cols-3 gap-10 text-center mb-24">
        {[
          {
            icon: "📚",
            title: "Books with History",
            desc: "Every book has lived a life. Notes, creases, memories — they all matter."
          },
          {
            icon: "🌱",
            title: "Sustainable Reading",
            desc: "Buying old books saves trees and keeps knowledge in circulation."
          },
          {
            icon: "🤝",
            title: "Community Driven",
            desc: "Readers and sellers connected by a love for stories."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-[#2F4F4F] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* STORY SECTION */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/home/book2.jpg"
            alt="Reading corner"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#2F4F4F] mb-4">
            Stories Should Never Be Forgotten
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Many great books end up forgotten on dusty shelves.
            bookleaf gives them a second life by connecting them
            with readers who will cherish them again.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white rounded-3xl p-12 grid md:grid-cols-3 text-center shadow-sm mb-24 ">
        {[
          { number: "10k+", label: "Books Rehomed" },
          { number: "5k+", label: "Happy Readers" },
          { number: "1k+", label: "Independent Sellers" }
        ].map((stat, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-[#8B5E3C]">
              {stat.number}
            </h3>
            <p className="text-gray-600 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-[#2F4F4F] mb-4">
          Join the bookleaf Story
        </h2>
        <p className="text-gray-600 mb-6">
          Buy, sell, or simply explore stories waiting to be rediscovered.
        </p>
        <button className="px-8 py-3 rounded-full bg-[#2F4F4F] text-white hover:bg-[#3f6f6f] transition">
          Explore Books
        </button>
      </section>

    </main>
  );
}
