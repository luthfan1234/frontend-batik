'use client';

import { useState } from 'react';
import { Search, MapPin, Info, Grid, List } from 'lucide-react';
import BatikDetailModal from '../components/BatikDetailModal';

const batikTypes = [
  {
    id: 'batik-bali',
    name: 'Batik Bali',
    origin: 'Bali, Indonesia',
    description: 'Perpaduan budaya Jawa dan Hindu-Bali dengan motif flora, fauna, dan unsur kebudayaan Hindu.',
    image: '/images/batik-bali.jpg'
  },
  {
    id: 'batik-betawi',
    name: 'Batik Betawi',
    origin: 'Jakarta, Indonesia',
    description: 'Mencerminkan kebudayaan multikultural Jakarta dengan motif ondel-ondel dan pengaruh Tionghoa.',
    image: '/images/batik-betawi.jpg'
  },
  {
    id: 'batik-celup',
    name: 'Batik Celup',
    origin: 'Jawa Tengah, Indonesia',
    description: 'Teknik pewarnaan dengan celup ikat menghasilkan gradasi warna alami dan motif abstrak.',
    image: '/images/batik-celup.jpg'
  },
  {
    id: 'batik-cendrawasih',
    name: 'Batik Cendrawasih',
    origin: 'Papua, Indonesia',
    description: 'Terinspirasi burung cendrawasih dengan warna-warna alami Papua dan motif flora khas.',
    image: '/images/batik-cendrawasih.jpg'
  },
  {
    id: 'batik-ceplok',
    name: 'Batik Ceplok',
    origin: 'Jawa Tengah, Indonesia',
    description: 'Motif geometris berulang dengan pola lingkaran atau belah ketupat yang simetris.',
    image: '/images/batik-ceplok.jpg'
  },
  {
    id: 'batik-ciamis',
    name: 'Batik Ciamis',
    origin: 'Ciamis, Jawa Barat',
    description: 'Motif alam Sunda dengan warna-warna natural dan pengaruh budaya Sunda.',
    image: '/images/batik-ciamis.jpg'
  },
  {
    id: 'batik-garutan',
    name: 'Batik Garutan',
    origin: 'Garut, Jawa Barat',
    description: 'Batik khas Garut dengan motif dan warna yang mencerminkan alam dan budaya setempat.',
    image: '/images/batik-garutan.jpg'
  },
  {
    id: 'batik-gentongan',
    name: 'Batik Gentongan',
    origin: 'Madura, Jawa Timur',
    description: 'Teknik pewarnaan menggunakan gentong dengan motif khas Madura dan warna bold.',
    image: '/images/batik-gentongan.jpg'
  },
  {
    id: 'batik-kawung',
    name: 'Batik Kawung',
    origin: 'Yogyakarta, Indonesia',
    description: 'Motif klasik tertua dengan pola lingkaran bersinggungan yang melambangkan kesempurnaan.',
    image: '/images/batik-kawung.jpg'
  },
  {
    id: 'batik-keraton',
    name: 'Batik Keraton',
    origin: 'Yogyakarta & Surakarta',
    description: 'Batik sakral dengan motif filosofis tinggi yang dulunya hanya untuk kalangan keraton.',
    image: '/images/batik-keraton.jpg'
  },
  {
    id: 'batik-lasem',
    name: 'Batik Lasem',
    origin: 'Lasem, Jawa Tengah',
    description: 'Dikenal dengan warna merah khas dari pewarna alami dan motif naga phoenix berpengaruh Tionghoa.',
    image: '/images/batik-lasem.jpg'
  },
  {
    id: 'batik-megamendung',
    name: 'Batik Megamendung',
    origin: 'Cirebon, Jawa Barat',
    description: 'Motif awan berlapis dengan gradasi biru yang melambangkan kesabaran dan kebijaksanaan.',
    image: '/images/batik-megamendung.jpg'
  },
  {
    id: 'batik-parang',
    name: 'Batik Parang',
    origin: 'Yogyakarta, Indonesia',
    description: 'Motif diagonal klasik yang melambangkan keberanian dan kekuatan, dulunya eksklusif keraton.',
    image: '/images/batik-parang.jpg'
  },
  {
    id: 'batik-pekalongan',
    name: 'Batik Pekalongan',
    origin: 'Pekalongan, Jawa Tengah',
    description: 'Kota Batik dengan motif beragam, warna cerah, dan pengaruh multikultural.',
    image: '/images/batik-pekalongan.jpg'
  },
  {
    id: 'batik-priangan',
    name: 'Batik Priangan',
    origin: 'Jawa Barat, Indonesia',
    description: 'Motif alam Priangan dengan warna natural dan pengaruh budaya Sunda.',
    image: '/images/batik-priangan.jpg'
  },
  {
    id: 'batik-sekar',
    name: 'Batik Sekar',
    origin: 'Jawa Tengah, Indonesia',
    description: 'Motif bunga-bunga dengan warna lembut yang melambangkan keindahan dan kesucian.',
    image: '/images/batik-sekar.jpg'
  },
  {
    id: 'batik-sidoluhur',
    name: 'Batik Sidoluhur',
    origin: 'Jawa Tengah, Indonesia',
    description: 'Motif klasik yang melambangkan keluhuran budi dan kemuliaan dengan makna spiritual.',
    image: '/images/batik-sidoluhur.jpg'
  },
  {
    id: 'batik-sidomukti',
    name: 'Batik Sidomukti',
    origin: 'Jawa Tengah, Indonesia',
    description: 'Melambangkan kebahagiaan dan kemakmuran, sering digunakan dalam upacara pernikahan.',
    image: '/images/batik-sidomukti.jpg'
  },
  {
    id: 'batik-sogan',
    name: 'Batik Sogan',
    origin: 'Yogyakarta & Surakarta',
    description: 'Warna coklat khas dari pewarna alami kulit pohon soga dengan nilai filosofis tinggi.',
    image: '/images/batik-sogan.jpg'
  },
  {
    id: 'batik-tambal',
    name: 'Batik Tambal',
    origin: 'Jawa Tengah, Indonesia',
    description: 'Motif seperti tambalan yang melambangkan ketekunan dan kemampuan memperbaiki diri.',
    image: '/images/batik-tambal.jpg'
  }
];

export default function KatalogBatikPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatik, setSelectedBatik] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredBatiks = batikTypes.filter(batik =>
    batik.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    batik.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    batik.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-slate-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Katalog <span className="text-emerald-600">Batik Indonesia</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Jelajahi kekayaan warisan budaya Indonesia melalui berbagai jenis batik tradisional 
            dari seluruh nusantara beserta sejarah dan maknanya.
          </p>
        </div>

        {/* Search and View Controls */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-slate-200/50">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari batik berdasarkan nama, daerah, atau deskripsi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
              />
            </div>
            
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-emerald-600 shadow-sm' 
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-emerald-600 shadow-sm' 
                    : 'text-slate-600 hover:text-emerald-600'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-slate-600">
            Menampilkan {filteredBatiks.length} dari {batikTypes.length} jenis batik
          </div>
        </div>

        {/* Batik Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBatiks.map((batik) => (
              <div
                key={batik.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedBatik(batik.id)}
              >
                <div className="aspect-square bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 flex items-center justify-center">
                    <div className="text-6xl opacity-20">🎨</div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {batik.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    {batik.origin}
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-3">
                    {batik.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredBatiks.map((batik) => (
              <div
                key={batik.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedBatik(batik.id)}
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-slate-200 rounded-xl flex-shrink-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-emerald-600/30 flex items-center justify-center">
                      <div className="text-3xl opacity-20">🎨</div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                      {batik.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      {batik.origin}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {batik.description}
                    </p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="bg-emerald-100 group-hover:bg-emerald-200 p-3 rounded-xl transition-colors">
                      <Info className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredBatiks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Tidak ditemukan</h3>
            <p className="text-slate-600">
              Coba gunakan kata kunci yang berbeda untuk mencari batik yang Anda inginkan.
            </p>
          </div>
        )}
      </div>

      {/* Modal Detail */}
      {selectedBatik && (
        <BatikDetailModal
          isOpen={!!selectedBatik}
          onClose={() => setSelectedBatik(null)}
          batikType={selectedBatik}
        />
      )}
    </div>
  );
}
