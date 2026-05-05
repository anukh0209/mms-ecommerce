'use client';

import { useState } from 'react';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      showToast(t.loginRequiredAdd, 'error');
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      code: product.code,
    });
    showToast(`"${product.name}" ${t.addToCart}!`, 'success');
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    showToast(
      isWishlisted ? 'Хадгалснаас хасагдлаа' : 'Хадгалсан бараануудад нэмэгдлээ',
      'info'
    );
  };

  const handleImageClick = () => {
    showToast(`${product.name} - Дэлгэрэнгүй хуудас (тун удахгүй)`, 'info');
  };

  const badges = [];
  if (product.discount > 0) badges.push({ type: 'sale', text: `-${product.discount}%` });
  if (product.id % 3 === 0) badges.push({ type: 'new', text: t.new });

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="product-badge">
        {badges.map((badge, i) => (
          <div key={i} className={`badge badge-${badge.type}`}>{badge.text}</div>
        ))}
      </div>

      {/* Actions */}
      <div className="product-actions">
        <button 
          className="action-btn" 
          onClick={handleWishlist}
          style={{ color: isWishlisted ? '#ef4444' : undefined }}
          aria-label="Wishlist"
        >
          <Heart size={18} fill={isWishlisted ? '#ef4444' : 'none'} />
        </button>
        <button 
          className="action-btn" 
          onClick={handleImageClick}
          aria-label="View"
        >
          <Eye size={18} />
        </button>
      </div>

      {/* Image */}
      <div className="product-image-wrap" onClick={handleImageClick}>
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="product-placeholder">🔧</div>
        )}
        <div className="product-image-overlay" />
      </div>

      {/* Info */}
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="product-code">{product.code}</div>
        
        <div className="product-price-row">
          <span className="product-price">{formatPrice(product.price)}</span>
          {product.originalPrice > product.price && (
            <span className="product-original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        
        <div className={`product-stock ${product.stock === 0 ? 'out' : ''}`}>
          <span style={{ 
            width: '8px', 
            height: '8px', 
            borderRadius: '50%', 
            background: product.stock > 0 ? '#22c55e' : '#ef4444',
            display: 'inline-block'
          }} />
          {product.stock > 0 ? `${t.inStock} (${product.stock})` : t.outOfStock}
        </div>
        
        <button className="btn-add-cart" onClick={handleAddToCart}>
          <ShoppingCart size={16} />
          {t.addToCart}
        </button>
      </div>
    </div>
  );
}
