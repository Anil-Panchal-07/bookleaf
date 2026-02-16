"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import fetchBookById from "@/_apis/fetchBookById";

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);



//----------------------------------------------
//              FETCH BOOK BY ID                 
//----------------------------------------------

  useEffect(() => {
    const loadBook = async () => {
      const data = await fetchBookById(id);
      setBook(data);
    };

    loadBook();
  }, [id]);




  if (!book) {
    return (
      <div className="min-h-screen bg-[#F5EFE6] flex items-center justify-center">
        <p className="text-[#6B4F3F]">Loading book details...</p>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-[#F5EFE6] px-6 py-14">
    <div className="max-w-6xl mx-auto">

      {/* Back hint */}
      <p className="text-sm text-[#6B4F3F] mb-6">
        ← Back to Browse
      </p>

      <div className="bg-[#FAF7F2] rounded-3xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-12">

        {/* Cover */}
        <div className="flex flex-col items-center">
          <img
            src={book.cover}
            alt={book.title}
            className="rounded-2xl shadow-lg max-h-[420px] mb-4"
          />
          <span className="text-xs text-[#6B4F3F] italic">
            First edition cover
          </span>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">

          <span className="text-xs uppercase tracking-widest text-[#6B4F3F] mb-2">
            Book #{book.id}
          </span>

          <h1 className="text-4xl font-semibold text-[#3E2F24] mb-3 leading-snug">
            {book.title}
          </h1>

          <p className="text-lg text-[#6B4F3F] mb-4">
            by <span className="font-medium">{book.author}</span>
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1 rounded-full bg-[#556B2F] text-white text-sm">
              {book.genre}
            </span>
            <span className="px-3 py-1 rounded-full border border-[#D8CFC4] text-xs text-[#6B4F3F]">
              Classic Literature
            </span>
          </div>

          <div className="border-l-4 border-[#556B2F] pl-4 mb-8">
            <p className="text-[#4B3621] leading-relaxed italic">
              “A timeless work that invites readers into a thoughtful,
              reflective journey — perfect for slow evenings and quiet minds.”
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl bg-[#3E2F24] text-white hover:bg-[#2C1F16] transition">
              Add to Reading List
            </button>

            <button className="px-6 py-3 rounded-xl border border-[#3E2F24] text-[#3E2F24] hover:bg-[#3E2F24] hover:text-white transition">
              Preview Book
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
);

};

export default BookDetail;
