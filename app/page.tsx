import Link from 'next/link';
import { Bot, Zap, Target, Globe, ArrowRight, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-slate-900 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-slate-700 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-slate-800 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-slate-600 rounded-full blur-2xl"></div>
      </div>
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-6 h-6 border-2 border-slate-300 rounded-full opacity-30"></div>
          <div className="absolute top-20 right-16 w-4 h-4 bg-slate-300 rounded-full opacity-20"></div>
          <div className="absolute bottom-16 left-1/4 w-3 h-3 bg-slate-400 rounded-full opacity-25"></div>
          
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              <span className="block">Batik<span className="text-emerald-600">AI</span></span>
              <span className="block text-3xl md:text-4xl font-medium text-slate-600 mt-2">
                Pengenalan Motif Batik Cerdas
              </span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
            Revolusi teknologi AI untuk mengidentifikasi, menganalisis, dan melestarikan motif batik nusantara dengan presisi tinggi
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/klasifikasi" 
              className="bg-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Scan Batik Sekarang
            </Link>
            <Link 
              href="/tentang" 
              className="border-2 border-emerald-600 text-emerald-700 font-semibold py-4 px-8 rounded-2xl text-lg hover:border-emerald-700 hover:bg-emerald-50 transition-all duration-300 flex items-center gap-2"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section decorative background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tl from-slate-100 to-slate-200 rounded-full blur-2xl"></div>
          </div>
          
          <div className="text-center mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Mengapa Memilih BatikAI?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Teknologi AI canggih bertemu warisan tradisional Indonesia untuk akurasi yang belum pernah ada
            </p>
            {/* Small decorative dots */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full opacity-40"></div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-emerald-300 rounded-full opacity-40"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting lines between cards (subtle) */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-30"></div>
            
            
            <div className="group relative">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-emerald-200/50 hover:bg-white hover:shadow-lg hover:border-emerald-300/50 transition-all duration-300 relative overflow-hidden">
                {/* Card decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors relative z-10">
                  <Bot className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bertenaga AI</h3>
                <p className="text-slate-600 leading-relaxed">Algoritma deep learning dilatih pada ribuan pola batik untuk akurasi maksimal</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-emerald-200/50 hover:bg-white hover:shadow-lg hover:border-emerald-300/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors relative z-10">
                  <Zap className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Hasil Instan</h3>
                <p className="text-slate-600 leading-relaxed">Dapatkan identifikasi dan analisis pola batik dalam waktu kurang dari 3 detik</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-emerald-200/50 hover:bg-white hover:shadow-lg hover:border-emerald-300/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors relative z-10">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Akurasi 95%</h3>
                <p className="text-slate-600 leading-relaxed">Presisi terdepan industri dalam klasifikasi pola batik dan pemetaan warisan</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-emerald-200/50 hover:bg-white hover:shadow-lg hover:border-emerald-300/50 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors relative z-10">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Akses Global</h3>
                <p className="text-slate-600 leading-relaxed">Membawa warisan batik Indonesia ke dunia melalui teknologi canggih</p>
              </div>
              </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-200 rounded-full opacity-10 blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-slate-300 rounded-full opacity-15 blur-xl"></div>
          
          <div className="bg-slate-900 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            {/* Inner decorative elements */}
            <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-600/10 rounded-full -translate-x-12 -translate-y-12"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full translate-x-16 translate-y-16"></div>
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-emerald-500/30 rounded-full"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-emerald-400/40 rounded-full"></div>
            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-emerald-500/35 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Siap Menjelajahi Penemuan Batik Bertenaga AI?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Unggah gambar batik Anda dan biarkan AI canggih kami mengungkap cerita, asal usul, dan makna budaya di balik setiap pola
              </p>
              <Link 
                href="/klasifikasi" 
                className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg"
              >
                <Sparkles className="w-5 h-5" />
                Mulai Scan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}