
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onProductSelect: (product: Product) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose, onAddToCart, onProductSelect }) => {
  // Local state to show temporary feedback on the "Add to Cart" button
  const [isAdded, setIsAdded] = useState(false);
  // State for the currently selected image in the gallery
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Swipe logic states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Reset active image index whenever the product changes or modal opens
  useEffect(() => {
    setActiveImageIndex(0);
  }, [product, isOpen]);

  // Scroll to top of modal when product changes
  useEffect(() => {
    if (product) {
       const modalContent = document.getElementById('modal-scroll-container');
       if (modalContent) modalContent.scrollTop = 0;
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
    // Reset the "Added" text after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Refined Logic for Related Products
  // Strategy: Prioritize same category items. If fewer than 3 exist, fill the remaining spots 
  // with items from other categories to ensure the section is always populated and diverse.
  const getRelatedProducts = () => {
    const sameCategory = products.filter(p => p.category === product.category && p.id !== product.id);
    const others = products.filter(p => p.category !== product.category && p.id !== product.id);
    
    // Combine: Use all available same-category items, then fill remaining slots with other items
    return [...sameCategory, ...others].slice(0, 3);
  };
  
  const relatedProducts = getRelatedProducts();

  // Ensure we have a list of images to display. Fallback to single image if array is missing.
  const galleryImages = product.images && product.images.length > 0 ? product.images : [product.image];

  // Helper: Split description by periods to create bullet points
  // Filters out empty strings resulting from the split
  const features = product.description
    .split('.')
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock <= 5;

  // Carousel Navigation Handlers
  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  // Touch Event Handlers for Swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
        <div 
          className="relative bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-4xl w-full max-h-[90vh] flex flex-col"
        >
          
          {/* Close Button (Absolute Top Right) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
          >
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Scrollable Content Container */}
          <div id="modal-scroll-container" className="overflow-y-auto">
            {/* 
              Split Layout:
              - Mobile: Stacked (Image top, Content bottom)
              - Desktop: Side by Side (Image left, Content right)
            */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Left Column: Image Gallery */}
              <div className="bg-gray-50 flex flex-col h-full select-none">
                {/* Main Image View with Carousel Logic */}
                <div 
                  className="relative w-full h-64 md:h-96 bg-gray-100 flex-shrink-0 group cursor-grab active:cursor-grabbing"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <img 
                    key={activeImageIndex} /* Key ensures component unmounts/remounts to trigger animation */
                    src={galleryImages[activeImageIndex]} 
                    alt={`${product.name} view ${activeImageIndex + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover animate-fade-in ${isOutOfStock ? 'grayscale opacity-80' : ''}`}
                    draggable={false}
                  />

                  {/* Carousel Controls (Only if multiple images) */}
                  {galleryImages.length > 1 && (
                    <>
                      {/* Prev Button */}
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md text-gray-800 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden sm:block"
                        aria-label="Önceki"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      {/* Next Button */}
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md text-gray-800 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden sm:block"
                        aria-label="Sonraki"
                      >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-md pointer-events-none">
                        {activeImageIndex + 1} / {galleryImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails Row */}
                {galleryImages.length > 1 && (
                  <div className="p-4 flex gap-3 overflow-x-auto scrollbar-hide bg-gray-50 items-center justify-center">
                    {galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          activeImageIndex === idx 
                            ? 'border-brand-600 ring-2 ring-brand-100 ring-offset-1 opacity-100 scale-105 shadow-md' 
                            : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100 hover:scale-105'
                        }`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Product Details */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
                    {product.category}
                  </span>
                  
                  {/* Dynamic Stock Status Badge */}
                  {isOutOfStock ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Tükendi
                    </span>
                  ) : isLowStock ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Son {product.stock} Ürün!
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Stokta
                    </span>
                  )}
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                  {product.name}
                </h2>
                
                <p className="text-4xl font-bold text-brand-600 mb-6">
                  {product.price.toFixed(2)} ₺
                </p>

                {/* Refactored Description: Bulleted List */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                    Öne Çıkan Özellikler
                  </h3>
                  {/* Added key={product.id} to trigger animation restart on product change */}
                  <ul className="space-y-3" key={product.id}>
                    {/* Dynamic features from description text */}
                    {features.map((feature, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start text-gray-600 animate-fade-in-up opacity-0"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        <svg className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm leading-relaxed">{feature}.</span>
                      </li>
                    ))}
                    
                    {/* Static Value Props with continued delay */}
                    <li 
                      className="flex items-start text-gray-600 animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${features.length * 100}ms` }}
                    >
                        <svg className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm leading-relaxed">%100 Orijinal ürün garantisi.</span>
                    </li>
                    <li 
                      className="flex items-start text-gray-600 animate-fade-in-up opacity-0"
                      style={{ animationDelay: `${(features.length + 1) * 100}ms` }}
                    >
                        <svg className="h-5 w-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span className="text-sm leading-relaxed">Veteriner hekimler tarafından tavsiye edilir.</span>
                    </li>
                  </ul>
                </div>

                {/* Action Area */}
                <div className="mt-auto">
                  <button
                    onClick={handleAddToCart}
                    disabled={isAdded || isOutOfStock}
                    className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white transition-all duration-300 ${
                      isOutOfStock 
                        ? 'bg-gray-400 cursor-not-allowed'
                        : isAdded 
                          ? 'bg-green-600 hover:bg-green-700 scale-95' 
                          : 'bg-brand-600 hover:bg-brand-700 hover:shadow-lg hover:-translate-y-1'
                    }`}
                  >
                    {isOutOfStock ? (
                       <>
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Stokta Yok
                       </>
                    ) : isAdded ? (
                      <>
                        <svg className="w-6 h-6 mr-2 animate-checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Sepete Eklendi
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Sepete Ekle
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-center text-xs text-gray-400">
                    Güvenli Ödeme • Hızlı Kargo • İade Garantisi
                  </p>
                </div>
              </div>
            </div>

            {/* Related Products Section */}
            {relatedProducts.length > 0 && (
              <div className="bg-gray-50 p-8 border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Benzer Ürünler</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {relatedProducts.map((related) => (
                    <div 
                      key={related.id} 
                      onClick={() => onProductSelect(related)}
                      className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 group"
                    >
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 mb-3 h-32">
                        <img
                          src={related.image}
                          alt={related.name}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 truncate">{related.name}</h4>
                      <p className="text-sm font-bold text-brand-600 mt-1">{related.price.toFixed(2)} ₺</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
