
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductShowcase from './components/ProductShowcase';
import Contact from './components/Contact';
import AiChatbot from './components/AiChatbot';
import CheckoutModal from './components/CheckoutModal';
import ProductDetailModal from './components/ProductDetailModal';
import { Product } from './types';

/**
 * Main Application Component
 * 
 * Strategy: "Lift State Up"
 * We manage the global application state here (cart items, open modals)
 * and pass them down to child components via props.
 */
function App() {
  // State for the shopping cart (Array of products)
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // State to control the visibility of the Checkout Modal
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // State to track which product is currently being viewed in detail (null if none)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // State for product search query
  const [searchQuery, setSearchQuery] = useState('');

  // State for favorites (persisted in localStorage)
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to load favorites from localStorage:', error);
      return [];
    }
  });

  // State to control whether ProductShowcase shows favorites view
  const [viewFavoritesMode, setViewFavoritesMode] = useState(false);

  /**
   * Adds a product to the cart array.
   * Passed down to ProductShowcase and ProductDetailModal.
   */
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
  };

  /**
   * Removes a specific item from the cart based on its array index.
   * Passed down to CheckoutModal.
   */
  const handleRemoveFromCart = (indexToRemove: number) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  /**
   * Clears the entire cart, usually after a successful payment.
   */
  const handleClearCart = () => {
    setCartItems([]);
  };

  /**
   * Toggles a product's favorite status.
   * Adds or removes the product ID from the favorites array.
   */
  const handleToggleFavorite = (productId: number) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId];

      try {
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
      } catch (error) {
        console.error('Failed to save favorites to localStorage:', error);
      }

      return newFavorites;
    });
  };

  /**
   * Scrolls to the products section and enables favorites view.
   */
  const handleViewFavorites = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Set a small delay to ensure ProductShowcase receives the prop update after scroll
      setTimeout(() => {
        setViewFavoritesMode(true);
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/*
        Header Component:
        - Receives cart count to display badge.
        - Receives handler to open the checkout modal.
        - Receives handler to update search query.
        - Receives current searchQuery to sync input.
        - Receives favorites count and handler to view favorites.
      */}
      <Header
        cartCount={cartItems.length}
        onOpenCart={() => setIsCheckoutOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        favoritesCount={favorites.length}
        onViewFavorites={handleViewFavorites}
      />
      
      <main>
        {/* Landing Section */}
        <Hero />
        
        {/* Features/Services Section */}
        <Services />
        
        {/*
          Product Grid Section:
          - Handles clicking on a product (opens detail modal).
          - Handles "Add to Cart" (triggers animation and state update).
          - Receives search query to filter products.
          - Can reset search query.
          - Manages favorites state.
          - Can be opened in favorites view mode.
        */}
        <ProductShowcase
          onAddToCart={handleAddToCart}
          onProductClick={(product) => setSelectedProduct(product)}
          searchQuery={searchQuery}
          onResetSearch={() => {
            setSearchQuery('');
            setViewFavoritesMode(false);
          }}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          initialViewFavorites={viewFavoritesMode}
        />
      </main>
      
      {/* Footer and Contact Info */}
      <Contact />
      
      {/* Floating AI Chat Widget */}
      <AiChatbot />
      
      {/* 
        Checkout Logic:
        - Handles cart display, payment form, and success state.
        - Only renders content if isOpen is true.
      */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/*
        Product Detail View:
        - Shows large image and extended details.
        - Appears when a user clicks a product card.
        - onProductSelect: Allows the modal to switch to a related product.
        - Can toggle favorite status.
      */}
      <ProductDetailModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onProductSelect={setSelectedProduct}
        favorites={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
}

export default App;
