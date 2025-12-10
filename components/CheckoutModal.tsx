
import React, { useState, useEffect } from 'react';
import { Product } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onRemoveFromCart: (index: number) => void;
  onClearCart: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, cartItems, onRemoveFromCart, onClearCart }) => {
  // Tracks the current view in the checkout process: Cart List -> Payment Form -> Success Message
  const [step, setStep] = useState<'cart' | 'payment' | 'success'>('cart');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>('');

  // Reset state when modal is reopened
  useEffect(() => {
    if (isOpen) {
      setStep('cart');
      setOrderNumber('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment API delay
    setTimeout(() => {
      // Generate random order number (Mock)
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      setOrderNumber(`BP-${randomNum}`);
      
      setIsProcessing(false);
      setStep('success');
      onClearCart(); // Empty the global cart
    }, 2000);
  };

  const handleNavigateToProducts = () => {
    onClose();
    // Wait for modal to close, then scroll
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    /* Modal Overlay and Container with Accessibility Roles */
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      
      {/* Darkened Backdrop */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

      <div className="flex items-center justify-center min-h-screen p-4 text-center sm:p-0">
        <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg w-full">
          
          {/* Modal Header */}
          <div className="bg-brand-50 px-4 py-3 sm:px-6 flex justify-between items-center border-b border-brand-100">
            <h3 className="text-lg leading-6 font-medium text-brand-900" id="modal-title">
              {step === 'cart' && 'Sepetiniz'}
              {step === 'payment' && 'Ödeme Bilgileri'}
              {step === 'success' && 'Sipariş Alındı'}
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 min-h-[300px]">
            
            {/* View 1: Cart Items List */}
            {step === 'cart' && (
              <>
                {cartItems.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 mb-4">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">Sepetinizde henüz ürün yok.</p>
                    <button 
                      onClick={handleNavigateToProducts}
                      className="mt-4 text-brand-600 hover:text-brand-500 font-medium"
                    >
                      Alışverişe Başla
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto pr-2">
                      {cartItems.map((item, index) => (
                        <li key={`${item.id}-${index}`} className="py-3 flex items-center">
                          <img className="h-10 w-10 rounded-full object-cover" src={item.image} alt={item.name} />
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-bold text-gray-900">{item.price.toFixed(2)} ₺</span>
                            {/* Remove Button */}
                            <button 
                              onClick={() => onRemoveFromCart(index)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              title="Ürünü Sil"
                            >
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                      <span className="text-base font-medium text-gray-900">Toplam Tutar</span>
                      <span className="text-xl font-bold text-brand-600">{totalAmount.toFixed(2)} ₺</span>
                    </div>
                  </div>
                )}
              </>
            )}

            {/* View 2: Mock Payment Form */}
            {step === 'payment' && (
              <form id="payment-form" onSubmit={handlePayment} className="space-y-4">
                <div>
                  <label htmlFor="card-name" className="block text-sm font-medium text-gray-700">Kart Üzerindeki İsim</label>
                  <input type="text" id="card-name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm" placeholder="Ad Soyad" />
                </div>
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Kart Numarası</label>
                  <input type="text" id="card-number" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="card-expiry" className="block text-sm font-medium text-gray-700">Son Kullanma (AA/YY)</label>
                    <input type="text" id="card-expiry" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label htmlFor="card-cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                    <input type="text" id="card-cvc" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm" placeholder="123" />
                  </div>
                </div>
              </form>
            )}

            {/* View 3: Success Confirmation */}
            {step === 'success' && (
              <div className="text-center py-6">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6 animate-bounce">
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Siparişiniz Başarıyla Alındı!</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Küçük dostunuz hediyelerini çok sevecek.
                </p>
                <div className="mt-6 bg-brand-50 border border-brand-100 rounded-lg p-4">
                  <p className="text-sm text-brand-800 mb-1">Sipariş Takip Numaranız:</p>
                  <p className="text-2xl font-bold text-brand-600 tracking-wider font-mono">{orderNumber}</p>
                  <p className="text-xs text-gray-500 mt-2">Bu numarayı saklayın, alt kısımdaki takip alanından sorgulama yapabilirsiniz.</p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Action Buttons (Footer) */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {step === 'cart' && cartItems.length > 0 && (
              <button
                type="button"
                onClick={() => setStep('payment')}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Ödemeye Geç
              </button>
            )}

            {step === 'payment' && (
              <button
                type="submit"
                form="payment-form"
                disabled={isProcessing}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'İşleniyor...' : `Ödemeyi Tamamla (${totalAmount.toFixed(2)} ₺)`}
              </button>
            )}

            {step === 'success' && (
              <button
                type="button"
                onClick={handleNavigateToProducts}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-brand-600 text-base font-medium text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Alışverişe Dön
              </button>
            )}

            {step !== 'success' && (
              <button
                type="button"
                onClick={() => step === 'payment' ? setStep('cart') : onClose()}
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {step === 'payment' ? 'Geri Dön' : 'Kapat'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
