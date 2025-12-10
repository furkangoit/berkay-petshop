
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

interface ProductShowcaseProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  searchQuery: string;
  onResetSearch?: () => void;
  favorites: number[];
  onToggleFavorite: (productId: number) => void;
  initialViewFavorites?: boolean;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onAddToCart, onProductClick, searchQuery, onResetSearch, favorites, onToggleFavorite, initialViewFavorites = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  // State to toggle between "All Products" view and "Favorites" view
  const [viewFavorites, setViewFavorites] = useState(initialViewFavorites);

  // State to track which products have been recently added (for button feedback)
  const [addedIds, setAddedIds] = useState<number[]>([]);

  // State for loading animation during filtering
  const [isLoading, setIsLoading] = useState(false);

  // Extract unique categories for the filter menu
  const categories = ['Tümü', ...Array.from(new Set(products.map(p => p.category)))];

  // Define price ranges
  const priceRanges = [
    { label: 'Tümü', value: 'all' },
    { label: '0 - 100 ₺', value: '0-100' },
    { label: '100 - 300 ₺', value: '100-300' },
    { label: '300 - 500 ₺', value: '300-500' },
    { label: '500 ₺ ve üzeri', value: '500-plus' },
  ];

  // Check if any filter is currently active
  const hasActiveFilters = selectedCategory !== 'Tümü' || 
                           selectedPriceRange !== 'all' || 
                           viewFavorites || 
                           searchQuery.length > 0;

  // Function to reset all filters
  const handleClearFilters = () => {
    setSelectedCategory('Tümü');
    setSelectedPriceRange('all');
    setViewFavorites(false);
    if (onResetSearch) {
      onResetSearch();
    }
  };

  // Effect to sync viewFavorites with initialViewFavorites prop
  useEffect(() => {
    if (initialViewFavorites) {
      setViewFavorites(true);
    }
  }, [initialViewFavorites]);

  // Effect to simulate loading delay when filters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // 500ms delay for visual effect
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedPriceRange, searchQuery, viewFavorites]);

  // Handle toggling favorite status
  const toggleFavorite = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevent opening product detail modal
    onToggleFavorite(productId);
  };

  // Switch to category view (disables favorites view)
  const handleCategoryChange = (category: string) => {
    setViewFavorites(false);
    setSelectedCategory(category);
  };

  // Filter products based on Category, Search Query, Price Range OR Favorites Mode
  const filteredProducts = products.filter(p => {
    // Common Search Logic (Apply search query in both modes)
    const query = searchQuery.toLowerCase();
    const searchMatch = searchQuery === '' || 
                        p.name.toLowerCase().includes(query) || 
                        p.description.toLowerCase().includes(query) ||
                        p.category.toLowerCase().includes(query);

    // MODE 1: Favorites View
    if (viewFavorites) {
      return favorites.includes(p.id) && searchMatch;
    }

    // MODE 2: Standard Filtering (Category + Price)
    const categoryMatch = selectedCategory === 'Tümü' || p.category === selectedCategory;
    
    let priceMatch = true;
    if (selectedPriceRange !== 'all') {
      if (selectedPriceRange === '500-plus') {
        priceMatch = p.price >= 500;
      } else {
        const [min, max] = selectedPriceRange.split('-').map(Number);
        priceMatch = p.price >= min && p.price < max;
      }
    }

    return categoryMatch && searchMatch && priceMatch;
  });

  /**
   * Handles adding a product to the cart with a flying image animation.
   */
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation(); // CRITICAL: Prevents the parent div's onClick (Detail Modal) from firing

    if (product.stock === 0) return;

    // Helper function to trigger the "Added" feedback on the button
    const triggerFeedback = () => {
      setAddedIds(prev => [...prev, product.id]);
      setTimeout(() => {
        setAddedIds(prev => prev.filter(id => id !== product.id));
      }, 2000); // Reset after 2 seconds
    };

    const targetBtn = e.currentTarget as HTMLElement;
    const productCard = targetBtn.closest('.group');
    const imgElement = productCard?.querySelector('img');
    const cartIcon = document.getElementById('cart-icon');

    if (imgElement && cartIcon) {
      // Get coordinates
      const imgRect = imgElement.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      // Create flying image clone
      const flyingImg = imgElement.cloneNode() as HTMLImageElement;
      flyingImg.style.position = 'fixed';
      flyingImg.style.left = `${imgRect.left}px`;
      flyingImg.style.top = `${imgRect.top}px`;
      flyingImg.style.width = `${imgRect.width}px`;
      flyingImg.style.height = `${imgRect.height}px`;
      flyingImg.style.borderRadius = '0.5rem';
      flyingImg.style.zIndex = '1000'; // Make sure it floats above everything else
      flyingImg.style.pointerEvents = 'none';
      flyingImg.style.transition = 'all 0.8s cubic-bezier(0.2, 1, 0.3, 1)'; // Smooth ease-out effect
      
      document.body.appendChild(flyingImg);

      // Force Reflow
      void flyingImg.offsetWidth;

      // Set destination coordinates (Cart Icon)
      flyingImg.style.left = `${cartRect.left + cartRect.width / 4}px`;
      flyingImg.style.top = `${cartRect.top + cartRect.height / 4}px`;
      flyingImg.style.width = '24px';
      flyingImg.style.height = '24px';
      flyingImg.style.opacity = '0.5';

      // Clean up and update state
      let handled = false;
      const handleTransitionEnd = () => {
        if (handled) return;
        handled = true;
        flyingImg.remove();
        onAddToCart(product); // Update global cart state
        triggerFeedback();    // Show visual feedback on button
      };

      flyingImg.addEventListener('transitionend', handleTransitionEnd);
      
      // Safety fallback
      setTimeout(handleTransitionEnd, 850);
    } else {
      onAddToCart(product);
      triggerFeedback();
    }
  };

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="products" className="bg-gray-100 py-16 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters Container */}
        <div className="flex flex-col mb-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {viewFavorites ? 'Favori Ürünlerim' : 'Popüler Ürünler'}
            </h2>
            
            {/* Clear Filters Button (Visible only if filters are active) */}
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500"
              >
                <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Tüm Ürünleri Göster
              </button>
            )}
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            {/* Category Filter Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 pb-4 border-b border-gray-100 sm:border-0 sm:pb-0 sm:mb-0">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wider min-w-[80px]">Kategori:</span>
              <div className="flex flex-wrap gap-2">
                
                {/* Favorites Toggle Button */}
                <button
                  onClick={() => setViewFavorites(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    viewFavorites
                      ? 'bg-red-500 text-white shadow-md transform scale-105'
                      : 'bg-white text-red-500 hover:bg-red-50 border border-red-200'
                  }`}
                >
                  <svg className={`w-4 h-4 ${viewFavorites ? 'fill-current' : 'fill-none'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Favorilerim
                </button>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300 mx-2 hidden sm:block"></div>

                {/* Standard Categories */}
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      !viewFavorites && selectedCategory === category
                        ? 'bg-brand-600 text-white shadow-md transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-600 border border-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter Buttons (Hidden in Favorites Mode) */}
            {!viewFavorites && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 sm:mt-4 transition-all duration-300">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider min-w-[80px]">Fiyat:</span>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setSelectedPriceRange(range.value)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedPriceRange === range.value
                          ? 'bg-brand-600 text-white shadow-md transform scale-105'
                          : 'bg-gray-50 text-gray-700 hover:bg-brand-50 hover:text-brand-600 border border-gray-200'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 xl:gap-x-8 min-h-[400px]">
          {isLoading ? (
             <div className="col-span-full flex flex-col items-center justify-center h-96">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-brand-600 mb-4"></div>
                <p className="text-gray-500 font-medium animate-pulse">Ürünler Yükleniyor...</p>
             </div>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const isAdded = addedIds.includes(product.id);
              const isOutOfStock = product.stock === 0;
              const isLowStock = product.stock > 0 && product.stock <= 5;
              const isFavorite = favorites.includes(product.id);

              return (
                <div 
                  key={product.id} 
                  onClick={() => onProductClick(product)}
                  className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="w-full min-h-60 bg-gray-200 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-90 lg:h-60 lg:aspect-none transition-opacity relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-center object-cover lg:w-full lg:h-full ${isOutOfStock ? 'grayscale opacity-70' : ''}`}
                    />
                    
                    {/* Favorite Button with Tooltip */}
                    <button
                      onClick={(e) => toggleFavorite(e, product.id)}
                      className="group/fav absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-all duration-200 hover:scale-110 focus:outline-none z-20 group-hover:opacity-100"
                      aria-label={isFavorite ? "Favorilerden çıkar" : "Favorilere ekle"}
                    >
                      <svg 
                        className={`w-5 h-5 transition-colors duration-300 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
                        fill={isFavorite ? "currentColor" : "none"} 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {/* Tooltip */}
                      <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/fav:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm z-30">
                        {isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
                      </span>
                    </button>

                    {/* Category Badge */}
                    <span className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 text-xs font-bold text-gray-700 rounded shadow-sm">
                      {product.category}
                    </span>

                    {/* Stock Indicators */}
                    {isOutOfStock && (
                      <span className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-bold text-white rounded shadow-sm">
                        Tükendi
                      </span>
                    )}
                    {isLowStock && (
                      <span className="absolute top-2 left-2 bg-orange-500 px-2 py-1 text-xs font-bold text-white rounded shadow-sm">
                        Son {product.stock} Ürün!
                      </span>
                    )}
                  </div>
                  <div className="p-4 mt-2 flex justify-between flex-col flex-grow">
                    <div>
                      <h3 className="text-sm text-gray-700 font-semibold">
                        <div>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </div>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 line-clamp-3">{product.description}</p>
                    </div>
                    <div className="mt-4">
                      <p className={`text-lg font-bold ${isOutOfStock ? 'text-gray-400' : 'text-brand-600'}`}>
                        {product.price.toFixed(2)} ₺
                      </p>
                    </div>
                  </div>
                  
                  {/* Add to cart button with Tooltip */}
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={isAdded || isOutOfStock}
                    className={`group/btn absolute bottom-0 left-0 w-full text-white text-center py-3 font-medium cursor-pointer z-10 transition-all duration-300 
                      ${isOutOfStock 
                        ? 'bg-gray-400 cursor-not-allowed opacity-100' 
                        : isAdded 
                          ? 'bg-green-600 opacity-100 shadow-md scale-[1.02] ring-2 ring-green-400 ring-offset-2 ring-offset-green-50' 
                          : 'bg-brand-600 hover:bg-brand-700 opacity-0 group-hover:opacity-100'
                      }`}
                  >
                    {/* Tooltip (Only show if able to add) */}
                    {!isOutOfStock && !isAdded && (
                      <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-sm">
                        Sepete Ekle
                      </span>
                    )}
                    
                    {isOutOfStock ? (
                      'Stokta Yok'
                    ) : isAdded ? (
                      <span className="flex items-center justify-center gap-2">
                         <svg className="w-5 h-5 animate-checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                         </svg>
                         Eklendi
                      </span>
                    ) : (
                      'Sepete Ekle'
                    )}
                  </button>
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center text-gray-500">
               {viewFavorites ? (
                  <>
                     <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                     <p className="text-lg font-medium">Henüz favori ürününüz yok.</p>
                     <p className="text-sm">Beğendiğiniz ürünlerin üzerindeki kalp ikonuna tıklayarak buraya ekleyebilirsiniz.</p>
                     <button onClick={() => setViewFavorites(false)} className="mt-4 text-brand-600 hover:text-brand-700 font-medium">
                        Tüm Ürünleri Gör
                     </button>
                  </>
               ) : (
                  <>
                     <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                     </svg>
                     <p className="text-lg font-medium">Sonuç bulunamadı.</p>
                     <p className="text-sm">Seçtiğiniz kriterlere uygun ürün mevcut değil.</p>
                     <button onClick={handleClearFilters} className="mt-4 text-brand-600 hover:text-brand-700 font-medium underline">
                        Filtreleri Temizle
                     </button>
                  </>
               )}
            </div>
          )}
        </div>
        
        {!viewFavorites && (
          <div className="mt-12 text-center">
            <a 
              href="#products" 
              onClick={scrollToProducts}
              className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
            >
              Tüm Ürünleri Gör
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
