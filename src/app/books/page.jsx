"use client"
import fetchAllBooks from '@/_apis/fetchAllBooks';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaSearch, FaBookOpen } from "react-icons/fa";

const Books = () => {
  const [books, setBooks] = useState([]);



//----------------------------------------------
//              FETCH ALL BOOKS                
//----------------------------------------------

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchAllBooks(); 
        setBooks(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadBooks();
  }, []);


  return (
    <div className="min-h-screen bg-[#F5EFE6] px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#3E2F24] mb-2">
            Browse Books
          </h1>
          <p className="text-[#6B4F3F]">
            Wander through stories, ideas, and quiet pages
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B4F3F]" />
          <input
            type="text"
            placeholder="Search books or authors"
            className="w-full pl-11 pr-4 py-2 rounded-xl border border-[#D8CFC4] bg-white focus:outline-none focus:ring-2 focus:ring-[#556B2F]"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-10">
          {['All', 'Classics', 'Fiction', 'Philosophy', 'Poetry'].map((cat) => (
            <button
              key={cat}
              className="px-4 py-1.5 rounded-full border border-[#D8CFC4] text-sm text-[#3E2F24] hover:bg-[#556B2F] hover:text-white transition"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Book grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {books.map((book) => (
  <Link href={`/bookdetails/${book.id}`} key={book.id}>
    <div className="bg-[#FAF7F2] rounded-2xl shadow-md p-4 hover:shadow-lg hover:-translate-y-1 transition cursor-pointer">
      <img
        src={book.cover}
        alt={book.title}
        className="rounded-xl mb-3 h-48 w-full object-cover"
      />

      <h3 className="text-[#3E2F24] font-semibold text-sm">
        {book.title}
      </h3>
      <p className="text-xs text-[#6B4F3F] mb-2">
        {book.author}
      </p>

      <span className="text-xs text-[#6B4F3F]">
        {book.genre}
      </span>
    </div>
  </Link>
))}
        </div>

      </div>
    </div>
  )
}

export default Books;
