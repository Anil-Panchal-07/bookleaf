export default function HeroSection() {
  return (
    <section className="relative max-w-[108rem] mx-auto min-h-screen flex items-center justify-center px-6 bg-cover bg-center">
      <div className="absolute inset-0  z-10 opacity-40">
        <img src="/home/bookbg.jpg" className="h-full w-full object-cover" alt="" />
      </div>
      <div className="absolute inset-0 bg-[#FAF7F2]/25" />

      <div className="max-w-4xl text-center z-50">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFF8EE] mb-4">
          Give Old Books a New Life
        </h1>

        <p className="text-lg text-[#EDE6DB] mb-8">
          Buy & sell pre-loved books at affordable prices.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-[#3F6F6B] text-white px-6 py-3 rounded-md hover:bg-[#2F5F5B] transition">
            Browse Books
          </button>

          <button className="border border-[#FFF8EE] text-[#FFF8EE] px-6 py-3 rounded-md hover:bg-[#FFF8EE] hover:text-[#2F4F4F] transition">
            Sell a Book
          </button>
        </div>
      </div>
    </section>
  );
}
