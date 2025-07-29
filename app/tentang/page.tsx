import { Bot, Target, Globe, Users, Zap, Brain, Camera, Database } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Tentang <span className="text-emerald-600">BatikAI</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Platform revolusioner bertenaga AI yang didedikasikan untuk melestarikan dan menganalisis warisan batik Indonesia melalui teknologi computer vision canggih
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Target className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Visi Kami</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Menjadi platform terdepan di dunia untuk pelestarian warisan budaya bertenaga AI, 
              membuat pola batik Indonesia dapat diakses dan dipahami oleh audiens global melalui teknologi canggih.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Misi Kami</h2>
            </div>
            <ul className="space-y-4 text-slate-600 text-lg">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>Memberikan pengenalan pola batik yang instan dan akurat dengan presisi 95%+</span>
              </li>
              <li className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>Mengedukasi masyarakat tentang makna budaya di balik setiap motif</span>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>Menjembatani warisan tradisional Indonesia dengan teknologi AI modern</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 md:p-16 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Mengapa BatikAI Penting?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Melestarikan warisan budaya sambil merangkul kemajuan teknologi untuk generasi mendatang
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Warisan UNESCO</h3>
              <p className="text-slate-300">
                Diakui sebagai Karya Agung Warisan Lisan dan Takbenda Kemanusiaan sejak 2009
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Identitas Budaya</h3>
              <p className="text-slate-300">
                Setiap pola merepresentasikan generasi kebijaksanaan, filosofi, dan identitas Indonesia
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pengakuan Global</h3>
              <p className="text-slate-300">
                Membawa warisan batik Indonesia ke apresiasi dunia melalui teknologi
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm p-12 rounded-3xl border border-slate-200/50">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Teknologi AI di Balik BatikAI</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Kami memanfaatkan deep learning dan computer vision tercanggih untuk mencapai akurasi 
              yang belum pernah ada dalam pengenalan pola batik dan analisis budaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Camera className="w-6 h-6 text-emerald-600" />
                Bagaimana AI Kami Bekerja
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Upload gambar batik melalui antarmuka intuitif kami
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  AI menganalisis pola, warna, dan struktur geometris
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Neural network memproses terhadap 10.000+ sampel batik
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Memberikan identifikasi dengan skor kepercayaan dan konteks budaya
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Brain className="w-6 h-6 text-emerald-600" />
                Keunggulan Platform
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Akurasi 95%+ dengan dataset yang terus berkembang
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Waktu pemrosesan kurang dari 3 detik untuk hasil instan
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Informasi budaya dan sejarah yang komprehensif
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Desain responsif mobile untuk aksesibilitas global
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}