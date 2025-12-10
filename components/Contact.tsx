
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [trackingId, setTrackingId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState<string | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Simulates an API call to check order status.
   * Generates a deterministic mock response based on the input length.
   */
  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setIsTracking(true);
    setTrackingStatus(null);

    // Simulate network delay
    setTimeout(() => {
      const statuses = [
        "Siparişiniz Hazırlanıyor 📦",
        "Kargoya Verildi 🚚",
        "Dağıtıma Çıktı 🛵",
        "Teslim Edildi ✅"
      ];
      // Simple logic to give different results based on input
      const statusIndex = trackingId.length % statuses.length;
      
      setTrackingStatus(`Sipariş #${trackingId}: ${statuses[statusIndex]}`);
      setIsTracking(false);
    }, 1500);
  };

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Grid: 1 col (mobile) -> 2 cols (md) -> 4 cols (lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand & Intro */}
          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  B
                </div>
                <span className="font-bold text-xl text-white">
                  Berkay<span className="text-brand-500">Petshop</span>
                </span>
             </div>
             <p className="text-sm text-gray-400">
               Evcil dostlarınız için aradığınız her şey tek bir çatı altında. Sevgiyle büyüyen dostluklar için varız.
             </p>
             <div className="flex space-x-4">
               {/* Social Media Links */}
               <a href="https://www.instagram.com/berkay_petshop_45/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
               <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
             </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => handleScroll(e, '#home')} className="hover:text-brand-500 transition-colors">Ana Sayfa</a></li>
              <li><a href="#products" onClick={(e) => handleScroll(e, '#products')} className="hover:text-brand-500 transition-colors">Ürünler</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="hover:text-brand-500 transition-colors">Hizmetler</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-brand-500 transition-colors">İletişim</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">İletişim</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <svg className="w-6 h-6 mr-2 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Yedi Eylül Mh., Tunca Sk., No: 76/A<br/>Turgutlu / Manisa</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Paket Servis: 0553 432 9376</span>
              </li>
              <li className="flex items-center">
                <svg className="w-6 h-6 mr-2 text-brand-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@berkaypetshop.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Order Tracking Form */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Sipariş Takibi</h3>
            <p className="text-xs text-gray-400 mb-3">Sipariş numaranızı girerek kargo durumunu sorgulayabilirsiniz.</p>
            <form onSubmit={handleTrackOrder} className="flex flex-col gap-2">
              <input 
                type="text" 
                placeholder="Örn: BP-123456" 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-md focus:ring-brand-500 focus:border-brand-500 block w-full p-2.5 placeholder-gray-500"
              />
              <button 
                type="submit" 
                disabled={isTracking || !trackingId}
                className="text-white bg-brand-600 hover:bg-brand-700 focus:ring-4 focus:ring-brand-800 font-medium rounded-md text-sm px-5 py-2.5 text-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isTracking ? 'Sorgulanıyor...' : 'Sorgula'}
              </button>
            </form>
            {trackingStatus && (
               <div className="mt-3 p-2 bg-gray-800 border border-gray-700 rounded-md">
                 <p className="text-sm font-medium text-brand-400">{trackingStatus}</p>
               </div>
            )}
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Berkay Petshop. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;