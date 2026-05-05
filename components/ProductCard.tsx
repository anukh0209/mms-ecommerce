import { Product, formatPrice } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
    </div>
  );
}
