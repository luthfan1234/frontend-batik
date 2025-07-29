'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/klasifikasi', label: 'Klasifikasi' },
  { href: '/katalog', label: 'Katalog Batik' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <span>Batik<span className="text-emerald-400">AI</span></span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-all duration-200 relative ${
                  isActive
                    ? 'text-emerald-400'
                    : 'text-slate-300 hover:text-emerald-400'
                } ${isActive ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-emerald-400 after:rounded-full' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/klasifikasi"
            className="bg-emerald-600 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Scan Sekarang
          </Link>
        </nav>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-slate-900 px-4 pb-6 border-t border-slate-800">
          <ul className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                    pathname === link.href 
                      ? 'bg-slate-800 text-emerald-400' 
                      : 'text-slate-300 hover:text-emerald-400 hover:bg-slate-800'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/klasifikasi"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-emerald-700 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Scan Sekarang
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}