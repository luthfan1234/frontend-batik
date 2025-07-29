import Link from 'next/link';
import { Instagram, Youtube, Facebook, Bot, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Branding & Social Media */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold mb-6">
              <Bot className="w-8 h-8 text-emerald-400" />
              <span>Batik<span className="text-emerald-400">AI</span></span>
            </Link>
            <p className="text-slate-300 max-w-xs leading-relaxed mb-6">
              Merevolusi pelestarian warisan batik melalui kecerdasan buatan dan teknologi computer vision yang canggih.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all duration-200">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Navigasi</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-300 hover:text-emerald-400 transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="text-slate-300 hover:text-emerald-400 transition-colors">Tentang</Link></li>
              <li><Link href="/klasifikasi" className="text-slate-300 hover:text-emerald-400 transition-colors">AI Scanner</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Technology */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Teknologi</h3>
            <ul className="space-y-4">
              <li><span className="text-slate-300">Deep Learning</span></li>
              <li><span className="text-slate-300">Computer Vision</span></li>
              <li><span className="text-slate-300">Pattern Recognition</span></li>
              <li><span className="text-slate-300">Neural Networks</span></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Kontak</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Siap mendigitalkan warisan batik? Mari bangun masa depan bersama!
            </p>
            <a 
              href="mailto:hello@batikai.id" 
              className="inline-block bg-slate-800 text-emerald-400 px-4 py-2 rounded-xl hover:bg-slate-700 hover:text-emerald-300 transition-colors font-medium"
            >
              hello@batikai.id
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2">
            &copy; {currentYear} BatikAI. Bertenaga AI • Dibuat untuk Warisan • Dibuat dengan <Heart className="w-4 h-4 text-emerald-400 fill-current" /> di Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}