
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 
        Header Component:
        - Receives cart count to display badge.
        - Receives handler to open the checkout modal.
        - Receives handler to update search query.
        - Receives current searchQuery to sync input.
      */}
      <Header 
        cartCount={cartItems.length} 
        onOpenCart={() => setIsCheckoutOpen(true)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
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
        */}
        <ProductShowcase 
          onAddToCart={handleAddToCart} 
          onProductClick={(product) => setSelectedProduct(product)}
          searchQuery={searchQuery}
          onResetSearch={() => setSearchQuery('')}
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
      */}
      <ProductDetailModal 
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onProductSelect={setSelectedProduct}
      />
    </div>
  );
}

export default App;
