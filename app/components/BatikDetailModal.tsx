'use client';

import { X, MapPin, Calendar, Palette, Info } from 'lucide-react';

interface BatikDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  batikType: string;
}

const batikDetails: Record<string, {
  name: string;
  origin: string;
  history: string;
  characteristics: string[];
  meaning: string;
  image: string;
}> = {
  'batik-bali': {
    name: 'Batik Bali',
    origin: 'Bali, Indonesia',
    history: 'Batik Bali adalah hasil perpaduan budaya Jawa dan Hindu-Bali yang berkembang sejak abad ke-20. Motif-motifnya banyak terinspirasi dari flora, fauna, dan unsur-unsur kebudayaan Hindu-Bali.',
    characteristics: [
      'Motif flora dan fauna khas Bali',
      'Warna-warna cerah dan kontras',
      'Pengaruh seni ukir Bali',
      'Simbol-simbol Hindu-Bali'
    ],
    meaning: 'Melambangkan keharmonisan antara manusia, alam, dan Tuhan dalam filosofi Tri Hita Karana.',
    image: '/images/batik-bali.jpg'
  },
  'batik-betawi': {
    name: 'Batik Betawi',
    origin: 'Jakarta, Indonesia',
    history: 'Batik Betawi mencerminkan kebudayaan masyarakat Jakarta yang multikultural. Berkembang sebagai ekspresi identitas lokal dengan motif yang menggambarkan kehidupan urban.',
    characteristics: [
      'Motif ondel-ondel',
      'Warna-warna cerah',
      'Motif naga dan burung hong',
      'Pengaruh budaya Tionghoa'
    ],
    meaning: 'Melambangkan keberagaman dan toleransi masyarakat Betawi yang multikultural.',
    image: '/images/batik-betawi.jpg'
  },
  'batik-celup': {
    name: 'Batik Celup',
    origin: 'Jawa Tengah, Indonesia',
    history: 'Batik celup adalah teknik pewarnaan kain dengan cara mencelupkan kain ke dalam larutan pewarna. Teknik ini telah dikenal sejak zaman kerajaan Majapahit.',
    characteristics: [
      'Teknik celup ikat',
      'Gradasi warna alami',
      'Motif abstrak',
      'Efek tie-dye'
    ],
    meaning: 'Melambangkan proses transformasi dan perubahan dalam kehidupan.',
    image: '/images/batik-celup.jpg'
  },
  'batik-cendrawasih': {
    name: 'Batik Cendrawasih',
    origin: 'Papua, Indonesia',
    history: 'Batik Cendrawasih terinspirasi dari burung cendrawasih yang merupakan burung khas Papua. Motif ini menggambarkan keindahan alam Papua dan kekayaan budayanya.',
    characteristics: [
      'Motif burung cendrawasih',
      'Warna-warna alami Papua',
      'Motif flora Papua',
      'Garis-garis dinamis'
    ],
    meaning: 'Melambangkan keindahan, kebebasan, dan surga yang ada di bumi Papua.',
    image: '/images/batik-cendrawasih.jpg'
  },
  'batik-ceplok': {
    name: 'Batik Ceplok',
    origin: 'Jawa Tengah, Indonesia',
    history: 'Batik Ceplok adalah salah satu motif batik klasik Jawa yang memiliki pola geometris berulang. Motif ini sering digunakan dalam upacara adat dan ritual keagamaan.',
    characteristics: [
      'Pola geometris berulang',
      'Bentuk lingkaran atau belah ketupat',
      'Susunan simetris',
      'Warna-warna tradisional'
    ],
    meaning: 'Melambangkan kesempurnaan, keseimbangan, dan keharmonisan hidup.',
    image: '/images/batik-ceplok.jpg'
  },
  'batik-ciamis': {
    name: 'Batik Ciamis',
    origin: 'Ciamis, Jawa Barat',
    history: 'Batik Ciamis berkembang di daerah Ciamis, Jawa Barat dengan ciri khas motif yang terinspirasi dari alam sekitar dan budaya Sunda.',
    characteristics: [
      'Motif alam Sunda',
      'Warna-warna natural',
      'Pengaruh budaya Sunda',
      'Motif flora lokal'
    ],
    meaning: 'Melambangkan kedamaian dan keharmonisan dengan alam.',
    image: '/images/batik-ciamis.jpg'
  },
  'batik-garutan': {
    name: 'Batik Garutan',
    origin: 'Garut, Jawa Barat',
    history: 'Batik Garutan adalah batik khas Garut yang memiliki ciri khas motif dan warna yang mencerminkan kebudayaan Sunda dan alam Garut.',
    characteristics: [
      'Motif khas Garut',
      'Warna-warna cerah',
      'Pengaruh alam Garut',
      'Teknik tradisional Sunda'
    ],
    meaning: 'Melambangkan kekuatan dan ketahanan masyarakat Garut.',
    image: '/images/batik-garutan.jpg'
  },
  'batik-gentongan': {
    name: 'Batik Gentongan',
    origin: 'Madura, Jawa Timur',
    history: 'Batik Gentongan berasal dari Madura dengan teknik pembuatan yang menggunakan gentong sebagai alat bantu dalam proses pewarnaan.',
    characteristics: [
      'Teknik pewarnaan dengan gentong',
      'Motif khas Madura',
      'Warna-warna bold',
      'Pola geometris'
    ],
    meaning: 'Melambangkan tradisi dan kearifan lokal masyarakat Madura.',
    image: '/images/batik-gentongan.jpg'
  },
  'batik-kawung': {
    name: 'Batik Kawung',
    origin: 'Yogyakarta, Indonesia',
    history: 'Batik Kawung adalah salah satu motif batik tertua di Indonesia. Motif ini terinspirasi dari buah kawung (kolang-kaling) dan memiliki makna filosofis yang mendalam.',
    characteristics: [
      'Motif lingkaran bersinggungan',
      'Pola geometris klasik',
      'Susunan rapi dan teratur',
      'Warna-warna tradisional'
    ],
    meaning: 'Melambangkan kesempurnaan hidup, kebijaksanaan, dan keadilan.',
    image: '/images/batik-kawung.jpg'
  },
  'batik-keraton': {
    name: 'Batik Keraton',
    origin: 'Yogyakarta & Surakarta',
    history: 'Batik Keraton adalah batik yang berkembang di lingkungan keraton dengan motif-motif yang memiliki makna filosofis tinggi dan hanya boleh dikenakan oleh kalangan tertentu.',
    characteristics: [
      'Motif-motif sakral',
      'Warna-warna klasik',
      'Makna filosofis mendalam',
      'Kualitas tinggi'
    ],
    meaning: 'Melambangkan keagungan, kebijaksanaan, dan spiritualitas tinggi.',
    image: '/images/batik-keraton.jpg'
  },
  'batik-lasem': {
    name: 'Batik Lasem',
    origin: 'Lasem, Jawa Tengah',
    history: 'Batik Lasem dikenal dengan warna merah khasnya yang berasal dari pewarna alami. Batik ini memiliki pengaruh budaya Tionghoa yang kuat.',
    characteristics: [
      'Warna merah khas',
      'Motif naga dan phoenix',
      'Pengaruh Tionghoa',
      'Pewarna alami'
    ],
    meaning: 'Melambangkan keberanian, kemakmuran, dan perpaduan budaya.',
    image: '/images/batik-lasem.jpg'
  },
  'batik-megamendung': {
    name: 'Batik Megamendung',
    origin: 'Cirebon, Jawa Barat',
    history: 'Batik Megamendung adalah motif batik khas Cirebon yang menggambarkan awan atau mega mendung. Motif ini memiliki pengaruh budaya Tionghoa yang kuat.',
    characteristics: [
      'Motif awan berlapis',
      'Gradasi warna biru',
      'Pengaruh Tionghoa',
      'Bentuk melengkung'
    ],
    meaning: 'Melambangkan kesabaran, ketenangan, dan kebijaksanaan.',
    image: '/images/batik-megamendung.jpg'
  },
  'batik-parang': {
    name: 'Batik Parang',
    origin: 'Yogyakarta, Indonesia',
    history: 'Batik Parang adalah motif batik klasik yang melambangkan keberanian dan kekuatan. Motif ini dulunya hanya boleh dikenakan oleh keluarga kerajaan.',
    characteristics: [
      'Motif garis diagonal',
      'Pola seperti gelombang',
      'Bentuk letter S',
      'Makna filosofis tinggi'
    ],
    meaning: 'Melambangkan keberanian, kekuatan, dan semangat pantang menyerah.',
    image: '/images/batik-parang.jpg'
  },
  'batik-pekalongan': {
    name: 'Batik Pekalongan',
    origin: 'Pekalongan, Jawa Tengah',
    history: 'Pekalongan dikenal sebagai Kota Batik dengan berbagai motif yang kaya dan beragam. Batik Pekalongan memiliki ciri khas warna-warna cerah dan motif yang variatif.',
    characteristics: [
      'Warna-warna cerah',
      'Motif beragam',
      'Pengaruh multikultural',
      'Teknik cap dan tulis'
    ],
    meaning: 'Melambangkan kreativitas, inovasi, dan keberagaman budaya.',
    image: '/images/batik-pekalongan.jpg'
  },
  'batik-priangan': {
    name: 'Batik Priangan',
    origin: 'Jawa Barat, Indonesia',
    history: 'Batik Priangan berkembang di wilayah Priangan, Jawa Barat dengan ciri khas motif yang terinspirasi dari alam dan budaya Sunda.',
    characteristics: [
      'Motif alam Priangan',
      'Warna-warna natural',
      'Pengaruh budaya Sunda',
      'Teknik tradisional'
    ],
    meaning: 'Melambangkan keharmonisan dengan alam dan kebijaksanaan hidup.',
    image: '/images/batik-priangan.jpg'
  },
  'batik-sekar': {
    name: 'Batik Sekar',
    origin: 'Jawa Tengah, Indonesia',
    history: 'Batik Sekar memiliki motif yang terinspirasi dari bunga-bunga (sekar dalam bahasa Jawa berarti bunga). Motif ini melambangkan keindahan dan kesucian.',
    characteristics: [
      'Motif bunga-bunga',
      'Warna-warna lembut',
      'Bentuk organik',
      'Makna kesucian'
    ],
    meaning: 'Melambangkan keindahan, kesucian, dan kemurnian hati.',
    image: '/images/batik-sekar.jpg'
  },
  'batik-sidoluhur': {
    name: 'Batik Sidoluhur',
    origin: 'Jawa Tengah, Indonesia',
    history: 'Batik Sidoluhur adalah motif batik klasik yang melambangkan keluhuran budi dan kemuliaan. Motif ini sering digunakan dalam acara-acara penting.',
    characteristics: [
      'Motif klasik Jawa',
      'Pola geometris',
      'Warna-warna tradisional',
      'Makna spiritual'
    ],
    meaning: 'Melambangkan keluhuran budi, kemuliaan, dan martabat tinggi.',
    image: '/images/batik-sidoluhur.jpg'
  },
  'batik-sidomukti': {
    name: 'Batik Sidomukti',
    origin: 'Jawa Tengah, Indonesia',
    history: 'Batik Sidomukti adalah motif batik yang melambangkan kebahagiaan dan kemakmuran. Motif ini sering digunakan dalam upacara pernikahan.',
    characteristics: [
      'Motif penuh makna',
      'Warna-warna auspicious',
      'Pola harmonis',
      'Simbolisme kemakmuran'
    ],
    meaning: 'Melambangkan kebahagiaan, kemakmuran, dan kehidupan yang sejahtera.',
    image: '/images/batik-sidomukti.jpg'
  },
  'batik-sogan': {
    name: 'Batik Sogan',
    origin: 'Yogyakarta & Surakarta',
    history: 'Batik Sogan adalah batik dengan warna coklat khas yang berasal dari pewarna alami kulit pohon soga. Batik ini memiliki nilai filosofis tinggi.',
    characteristics: [
      'Warna coklat soga',
      'Pewarna alami',
      'Motif klasik',
      'Nilai filosofis tinggi'
    ],
    meaning: 'Melambangkan kebijaksanaan, kedewasaan, dan kestabilan hidup.',
    image: '/images/batik-sogan.jpg'
  },
  'batik-tambal': {
    name: 'Batik Tambal',
    origin: 'Jawa Tengah, Indonesia',
    history: 'Batik Tambal memiliki motif yang menyerupai tambalan atau patchwork. Motif ini melambangkan ketekunan dan kesabaran dalam menghadapi kehidupan.',
    characteristics: [
      'Motif seperti tambalan',
      'Pola geometris',
      'Kombinasi berbagai motif',
      'Makna filosofis'
    ],
    meaning: 'Melambangkan ketekunan, kesabaran, dan kemampuan memperbaiki diri.',
    image: '/images/batik-tambal.jpg'
  }
};

export default function BatikDetailModal({ isOpen, onClose, batikType }: BatikDetailModalProps) {
  if (!isOpen) return null;

  const detail = batikDetails[batikType];
  
  if (!detail) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Detail Batik</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>
          <p>Detail untuk jenis batik ini belum tersedia.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">{detail.name}</h2>
            <button 
              onClick={onClose} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Origin */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <MapPin className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Asal Daerah</h3>
              <p className="text-gray-600">{detail.origin}</p>
            </div>
          </div>

          {/* History */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sejarah</h3>
              <p className="text-gray-600 leading-relaxed">{detail.history}</p>
            </div>
          </div>

          {/* Characteristics */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Palette className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Ciri Khas</h3>
              <ul className="space-y-1">
                {detail.characteristics.map((char, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Meaning */}
          <div className="flex items-start gap-3">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Info className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Makna Filosofis</h3>
              <p className="text-gray-600 leading-relaxed">{detail.meaning}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 rounded-b-2xl border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
