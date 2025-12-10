
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onSearch: (query: string) => void;
  searchQuery?: string; // Added to allow parent to control/reset input
  favoritesCount?: number;
  onViewFavorites?: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onSearch, searchQuery = '', favoritesCount = 0, onViewFavorites }) => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for the cart icon animation (bump effect)
  const [isCartBumping, setIsCartBumping] = useState(false);
  // State for search input (local state for debounce)
  const [searchTerm, setSearchTerm] = useState(searchQuery);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Ana Sayfa', href: '#home' },
    { name: 'Ürünler', href: '#products' },
    { name: 'Hizmetler', href: '#services' },
    { name: 'İletişim', href: '#contact' },
  ];

  /**
   * Effect: Sync local searchTerm with prop searchQuery.
   * This is crucial for when the "Clear Filters" button in ProductShowcase resets the search.
   */
  useEffect(() => {
    setSearchTerm(searchQuery);
  }, [searchQuery]);

  /**
   * Effect: Triggers a temporary animation state whenever items are added to the cart.
   * This creates a visual cue (scale up/down) for the user.
   */
  useEffect(() => {
    if (cartCount > 0) {
      setIsCartBumping(true);
      const timer = setTimeout(() => setIsCartBumping(false), 300); // Reset after 300ms
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  /**
   * Debounce Effect for Search:
   * Waits for the user to stop typing for 300ms before triggering the parent's onSearch.
   */
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  /**
   * Smooth scroll handler.
   * - Prevents default anchor jump.
   * - Closes mobile menu.
   * - Uses JS scrollIntoView for better browser compatibility.
   */
  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#home' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Optionally scroll to products section if user starts typing
    if (e.target.value.length > 0) {
      const productsSection = document.getElementById('products');
      if (productsSection && window.scrollY < productsSection.offsetTop - 200) {
        // Only scroll if we are far above
        // productsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    /* 
      Sticky Header Wrapper 
      - sticky top-0: Keeps header at top during scroll.
      - z-50: Ensures it stays above all other content.
    */
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand / Logo Area */}
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer" 
            onClick={(e) => handleScroll(e, '#home')}
          >
            <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900 hidden sm:block">
              Berkay<span className="text-brand-500">Petshop</span>
            </span>
            <span className="font-bold text-xl tracking-tight text-gray-900 sm:hidden">
              B<span className="text-brand-500">P</span>
            </span>
          </div>

          <div className="flex items-center flex-1 justify-end md:justify-between md:ml-8">
            {/* Desktop Navigation (Hidden on mobile) */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-gray-600 hover:text-brand-600 font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Search Bar */}
            <div className="hidden md:flex items-center ml-4 flex-1 max-w-xs">
              <div className="relative w-full text-gray-400 focus-within:text-brand-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center ml-4 space-x-1">
              {/* Favorites Icon & Badge */}
              {onViewFavorites && (
                <button
                  onClick={onViewFavorites}
                  className="relative p-2 text-gray-600 hover:text-red-500 transition-all cursor-pointer focus:outline-none group"
                  aria-label="Favorileri Görüntüle"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {favoritesCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                      {favoritesCount}
                    </span>
                  )}
                </button>
              )}

              {/* Shopping Cart Icon & Badge */}
              <button
                id="cart-icon" /* Used as target for flying image animation */
                onClick={onOpenCart}
                className={`relative p-2 text-gray-600 hover:text-brand-600 transition-transform cursor-pointer focus:outline-none ${
                  isCartBumping ? 'scale-125' : '' /* Tailwind scale utility for bounce effect */
                }`}
                aria-label="Sepeti Görüntüle"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-600 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button (Hamburger) */}
              <div className="md:hidden flex items-center ml-2">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                  aria-label="Toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    {isMenuOpen ? (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-3 border-b border-gray-100">
             {/* Mobile Search Input */}
             <div className="relative w-full text-gray-400 focus-within:text-brand-600">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
                />
              </div>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
