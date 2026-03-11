'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para fechar o menu mobile ao clicar num link
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-blue-600 font-black text-xl z-50">
          EXPLORE<span className="text-yellow-500">CV</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 items-center">
          <Link href="/" className="hover:text-blue-600 transition">História</Link>
          <Link href="/ilhas" className="hover:text-blue-600 transition">As 10 Ilhas</Link>
          {/* NOVO LINK AQUI */}
          <Link href="/artistas" className="hover:text-blue-600 transition font-semibold text-blue-500">Artistas</Link>
          <Link href="/cultura" className="hover:text-blue-500 transition">Cultura</Link>
          <Link href="/contato" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Contacto
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`
          fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden
          ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        `}>
          <Link onClick={closeMenu} href="/" className="text-2xl font-bold text-gray-800">História</Link>
          <Link onClick={closeMenu} href="/ilhas" className="text-2xl font-bold text-gray-800">As 10 Ilhas</Link>
          
          {/* NOVO LINK MOBILE AQUI */}
          <Link onClick={closeMenu} href="/artistas" className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600">Artistas</Link>
          
          <Link onClick={closeMenu} href="/cultura" className="text-2xl font-bold text-gray-800">Cultura</Link>
          <Link onClick={closeMenu} href="/contato" className="px-8 py-3 bg-blue-600 text-white rounded-full text-xl font-bold">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
}