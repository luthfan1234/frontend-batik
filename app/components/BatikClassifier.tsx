'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Camera, Upload, AlertCircle, CheckCircle, Search, Target, Zap, Lightbulb, TrendingUp, Info } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import BatikDetailModal from './BatikDetailModal';

export default function BatikClassifier() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      setResult(null);
      setError(null);
      
      if (selectedFile) {
        const reader = new FileReader();
        reader.onloadend = () => setPreview(reader.result as string);
        reader.readAsDataURL(selectedFile);
      }
    },
    accept: { 'image/*': [] },
    multiple: false,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<{ class: string; confidence: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setIsLoading(true);
    setResult(null);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
      method: 'POST',
      body: formData,
      });

      if (!res.ok) throw new Error('Gagal terhubung ke server AI.');
      
      const data = await res.json();
      setResult({
        class: data.class,
        confidence: parseFloat(data.confidence.toFixed(2)),
      });

    } catch (err: unknown) {
      setError('Terjadi kesalahan. Pastikan server AI berjalan dan coba lagi.');
      console.error("Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Kolom Kiri: Upload dan Hasil */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Scanner AI Batik</h2>
        
        {/* Enhanced Drag & Drop Zone */}
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer relative overflow-hidden ${
            isDragActive 
              ? 'border-emerald-500 bg-emerald-50/80 scale-[1.02] shadow-lg' 
              : 'border-slate-300 hover:border-emerald-400 hover:bg-emerald-50/30'
          }`}
        >
          <input {...getInputProps()} />
          
          {/* Background Animation for Drag Active */}
          {isDragActive && (
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-500/30 to-emerald-400/20 animate-pulse"></div>
          )}
          
          <div className="flex flex-col items-center relative z-10">
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
              isDragActive ? 'bg-emerald-200 scale-110' : 'bg-emerald-100'
            }`}>
              <Camera className={`w-10 h-10 transition-all duration-300 ${
                isDragActive ? 'text-emerald-700' : 'text-emerald-600'
              }`} />
            </div>
            
            {isDragActive ? (
              <div className="space-y-3">
                <p className="text-xl font-bold text-emerald-700">Lepaskan gambar di sini</p>
                <p className="text-emerald-600">File akan diupload secara otomatis</p>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce mx-1"></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce mx-1" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce mx-1" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-bold text-slate-900 mb-2">Pilih gambar batik</p>
                  <p className="text-slate-600">Drag &amp; drop atau klik untuk memilih</p>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 rounded-full text-sm text-slate-600">
                    <Upload className="w-3 h-3" />
                    PNG, JPG, JPEG
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 rounded-full text-sm text-slate-600">
                    📏 Maksimal 10MB
                  </span>
                </div>
                
                <div className="mt-4 text-xs text-slate-500">
                  Tips: Gunakan gambar dengan pencahayaan yang baik untuk hasil terbaik
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Pratinjau Gambar</h3>
              <button 
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                  setResult(null);
                  setError(null);
                }}
                className="text-slate-500 hover:text-red-600 transition-colors"
              >
                <span className="text-sm">✕ Hapus</span>
              </button>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <Image 
                src={preview} 
                alt="Preview Batik" 
                width={500}
                height={400}
                className="max-h-80 w-full object-contain rounded-xl" 
              />
              {file && (
                <div className="mt-3 text-sm text-slate-600 text-center">
                  <span className="font-medium">{file.name}</span> • {(file.size / 1024 / 1024).toFixed(2)} MB
                </div>
              )}
            </div>
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!file || isLoading}
          className="mt-8 w-full px-6 py-4 bg-emerald-600 text-white font-semibold rounded-2xl hover:bg-emerald-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-all duration-200 text-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Menganalisis gambar...
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              Analisis Pola Batik
            </>
          )}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-6 bg-red-50 border border-red-200 text-red-800 rounded-2xl">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <div>
                <p className="font-semibold">Terjadi Kesalahan</p>
                <p className="text-sm">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {result && (
          <div className="mt-6 p-6 bg-emerald-50 border border-emerald-200 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
              <h3 className="text-lg font-semibold text-emerald-800">Hasil Klasifikasi</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Pola Terdeteksi</p>
                <p className="text-2xl font-bold text-emerald-900">{result.class}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-600 uppercase tracking-wide mb-2">Tingkat Kepercayaan</p>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <div className="flex-1 bg-emerald-200 rounded-full h-3">
                    <div 
                      className="bg-emerald-600 h-3 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${result.confidence}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-emerald-900">{result.confidence}%</span>
                </div>
              </div>
              
              {/* Detail Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-4 bg-emerald-600 text-white font-semibold py-3 px-6 rounded-xl hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Info className="w-5 h-5" />
                Lihat Detail & Sejarah Batik
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Kolom Kanan: Penjelasan */}
      <div className="bg-white/70 backdrop-blur-sm p-8 rounded-3xl border border-emerald-200/50">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Bagaimana AI Kami Bekerja?</h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          BatikAI menggunakan teknologi deep learning canggih dengan arsitektur Convolutional Neural Network (CNN) 
          yang dilatih khusus untuk mengenali pola unik dalam warisan batik Indonesia.
        </p>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Upload className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">1. Upload Gambar</h3>
              <p className="text-slate-600">Unggah foto batik Anda melalui antarmuka yang sederhana dan intuitif.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Search className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">2. Analisis Pola</h3>
              <p className="text-slate-600">AI menganalisis fitur visual termasuk isen-isen, motif utama, dan komposisi warna.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">3. Pencocokan Database</h3>
              <p className="text-slate-600">Sistem mencocokkan fitur dengan ribuan pola batik dalam database kami.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Zap className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">4. Hasil Instan</h3>
              <p className="text-slate-600">AI memberikan nama pola dan tingkat kepercayaan dari analisis komprehensif.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-emerald-50/50 rounded-2xl">
          <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-emerald-600" />
            Tips untuk Hasil Terbaik
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>• Gunakan gambar resolusi tinggi dengan pencahayaan yang baik</li>
            <li>• Pastikan pola batik terlihat jelas dalam frame</li>
            <li>• Hindari gambar buram atau terpotong</li>
            <li>• Gunakan format JPG atau PNG untuk hasil optimal</li>
          </ul>
        </div>
      </div>
      
      {/* Modal Detail Batik */}
      {result && (
        <BatikDetailModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          batikType={result.class} 
        />
      )}
    </div>
  );
}
