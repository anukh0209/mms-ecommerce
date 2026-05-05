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
            <span>САГС ({totalItems})</span>
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
                  <div className="cart-item-image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                    ) : (
                      <span style={{ fontSize: '24px' }}>🔧</span>
                    )}
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{item.code}</div>
                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                    <div className="cart-item-actions">
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
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>НИЙТ:</span>
                <span className="total-price">{formatPrice(totalPrice)}</span>
              </div>
              
              {!isAuthenticated && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px',
                  background: '#fff3e0',
                  marginBottom: '15px',
                  fontSize: '13px'
                }}>
                  <Lock size={16} />
                  <span>Төлбөр төлөхийн тулд{' '}
                    <Link href="/login" onClick={() => setIsCartOpen(false)} style={{ color: '#D31145', fontWeight: 'bold' }}>
                      нэвтэрнэ үү
                    </Link>
                  </span>
                </div>
              )}
              
              <button 
                className="btn-checkout"
                onClick={handleCheckout}
                style={!isAuthenticated ? { opacity: 0.6 } : undefined}
              >
                ТӨЛБӨР ТӨЛӨХ
              </button>
              <button className="btn-clear" onClick={clearCart}>
                САГС ХООСЛОХ
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
