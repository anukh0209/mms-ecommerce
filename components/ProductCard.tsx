import { Product, formatPrice } from '@/lib/products';
import { useCart } from '@/lib/cart-context';
import { useToast } from '@/lib/toast-context';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      code: product.code,
    });
    showToast(`"${product.name}" сагсанд нэмэгдлээ!`);
  };

  return (
    <div className="product-card" data-id={product.id}>
      <div className="product-image">
        {product.image && <img src={product.image} alt={product.name} />}
        <div className="discount-badge">
          <div>{product.discount}%</div>
          <div>OFF</div>
        </div>
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-code">Code: {product.code}</div>
      <div className="stock-status">Бэлэн байгаа: {product.stock}ширхэг</div>
      <div className="product-price">
        {formatPrice(product.price)}
        <span className="original-price">{formatPrice(product.originalPrice)}</span>
      </div>
      <button className="btn-add-cart" onClick={handleAddToCart}>
        <ShoppingCart size={16} />
        Сагсанд хийх
      </button>
    </div>
  );
}
