'use client';

import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { formatPrice } from '@/lib/products';
import { X, Plus, Minus, ShoppingCart, Trash2, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      showToast(t.loginRequired, 'error');
      setIsCartOpen(false);
      return;
    }
    if (items.length === 0) {
      showToast(t.cartEmpty, 'error');
      return;
    }
    showToast('Төлбөр төлөх - Тун удахгүй', 'info');
  };

  const handleClearCart = () => {
    if (items.length === 0) return;
    clearCart();
    showToast('Сагс хоослогдлоо', 'info');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-drawer">
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingCart size={22} />
            <span>{t.cartTitle} ({totalItems})</span>
          </div>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingCart size={56} style={{ opacity: 0.2, marginBottom: '20px' }} />
            <p>{t.cartEmpty}</p>
            <button className="btn-continue" onClick={() => setIsCartOpen(false)}>
              {t.continueShopping}
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
                      <span style={{ fontSize: '28px' }}>🔧</span>
                    )}
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>{item.code}</div>
                    <div className="cart-item-price">{formatPrice(item.price)}</div>
                    <div className="cart-item-actions">
                      <button
                        className="qty-btn"
                        onClick={() => {
                          if (item.quantity <= 1) {
                            removeFromCart(item.id);
                          } else {
                            updateQuantity(item.id, item.quantity - 1);
                          }
                        }}
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
                        onClick={() => {
                          removeFromCart(item.id);
                          showToast('Бараа хасагдлаа', 'info');
                        }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>{t.total}</span>
                <span className="total-price">{formatPrice(totalPrice)}</span>
              </div>
              
              {!isAuthenticated && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  background: '#fff3e0',
                  borderRadius: '8px',
                  marginBottom: '15px',
                  fontSize: '13px',
                  fontWeight: 600
                }}>
                  <Lock size={18} color="#E53935" />
                  <span>{t.loginRequired}{' '}
                    <Link href="/login" onClick={() => setIsCartOpen(false)} style={{ color: '#E53935', fontWeight: '800' }}>
                      Login
                    </Link>
                  </span>
                </div>
              )}
              
              <button 
                className="btn-checkout"
                onClick={handleCheckout}
                disabled={!isAuthenticated || items.length === 0}
              >
                {t.checkout}
              </button>
              <button className="btn-clear" onClick={handleClearCart}>
                {t.clearCart}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
