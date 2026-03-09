'use client';
import Link from 'next/link'; // Importante para navegação rápida

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-blue-600 font-black text-xl">
          EXPLORE<span className="text-yellow-500">CV</span>
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 items-center">
          <Link href="/" className="hover:text-blue-600 transition">História e Cultura</Link>
          <Link href="/ilhas" className="hover:text-blue-600 transition">As 10 Ilhas</Link>
          <Link href="/contato" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}