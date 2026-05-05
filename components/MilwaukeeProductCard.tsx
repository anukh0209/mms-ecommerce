'use client';

import { useState } from 'react';
import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useAuth } from '@/lib/auth-context';
import { useToast } from '@/lib/toast-context';
import { useLanguage } from '@/lib/language-context';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function MilwaukeeProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleAddToCart = () => {
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
    showToast(`"${product.name}" ${t.addToCart}!`);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    showToast(
      isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
      'info'
    );
  };

  // Random badges for demo
  const badges = [];
  if (product.id % 3 === 0) badges.push('new');
  if (product.id % 5 === 0) badges.push('trending');

  return (
    <div className="product-card-milwaukee">
      {/* Badges */}
      <div className="product-badge">
        {badges.map((badge) => (
          <div key={badge} className={`badge-${badge}`}>
            {badge === 'new' ? t.new : t.trending}
          </div>
        ))}
      </div>

      {/* Product Actions */}
      <div className="product-actions-milwaukee">
        <button 
          className="product-action-btn"
          onClick={handleWishlist}
          style={{ color: isWishlisted ? '#D31145' : undefined }}
        >
          <Heart size={16} fill={isWishlisted ? '#D31145' : 'none'} />
        </button>
      </div>

      {/* Product Image */}
      <div className="product-image-milwaukee">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div style={{ fontSize: '60px', opacity: 0.2 }}>🔧</div>
        )}
      </div>

      {/* Product Info */}
      <div className="product-info-milwaukee">
        <div className="product-name-milwaukee">{product.name}</div>
        <div className="product-code-milwaukee">{product.code}</div>
        <div className="product-price-milwaukee">{formatPrice(product.price)}</div>
        <div className={`product-stock-milwaukee ${product.stock === 0 ? 'out-of-stock' : ''}`}>
          {product.stock > 0 ? `${t.inStock}: ${product.stock}` : t.outOfStock}
        </div>
        <button className="btn-add-cart-milwaukee" onClick={handleAddToCart}>
          <ShoppingCart size={16} />
          {t.addToCart}
        </button>
      </div>
    </div>
  );
}
