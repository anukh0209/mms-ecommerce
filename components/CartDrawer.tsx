'use client';

import { useCart } from '@/lib/cart-context';
import { formatPrice } from '@/lib/products';
import { X, Plus, Minus, ShoppingCart, Trash2 } from 'lucide-react';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

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
              <button className="btn-checkout">
                Төлбөр төлөх
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
