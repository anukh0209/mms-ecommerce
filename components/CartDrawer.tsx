'use client';

import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { formatPrice } from '@/lib/products';
import { X, Plus, Minus, ShoppingCart, Trash2, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      showToast('Төлбөр төлөхийн тулд нэвтэрнэ үү', 'error');
      setIsCartOpen(false);
      return;
    }
    showToast('Төлбөр төлөх хэсэг (хөгжүүлэлтэд)', 'info');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingCart size={20} />
            <span>Сагс ({totalItems})</span>
          </div>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
            <p>Сагс хоосон байна</p>
            <button className="btn-continue" onClick={() => setIsCartOpen(false)}>
              Дэлгүүр хэсэх
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-code">{item.code}</div>
                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                  </div>
                  <div className="cart-item-actions">
                    <div className="quantity-controls">
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Нийт:</span>
                <span className="total-price">{formatPrice(totalPrice)}</span>
              </div>
              
              {!isAuthenticated && (
                <div className="cart-auth-required">
                  <Lock size={16} />
                  <span>Төлбөр төлөхийн тулд{' '}<Link href="/login" onClick={() => setIsCartOpen(false)}>нэвтэрнэ үү</Link></span>
                </div>
              )}
              
              <button 
                className={`btn-checkout ${!isAuthenticated ? 'disabled' : ''}`}
                onClick={handleCheckout}
              >
                {isAuthenticated ? 'Төлбөр төлөх' : 'Төлбөр төлөх (Нэвтэрнэ үү)'}
              </button>
              <button className="btn-clear" onClick={clearCart}>
                Сагс хоослох
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
