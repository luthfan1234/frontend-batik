import BatikClassifier from "@/app/components/BatikClassifier";

export default function KlasifikasiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            AI <span className="text-emerald-600">Scanner Batik</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unggah gambar batik Anda dan biarkan kecerdasan buatan canggih kami mengidentifikasi pola, 
            menganalisis makna budaya, dan memberikan informasi warisan detail dalam hitungan detik.
          </p>
        </div>
        
        <BatikClassifier />
      </div>
    </div>
  );
}