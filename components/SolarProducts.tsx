import { solarProducts } from '@/lib/products';
import ProductCard from './ProductCard';

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
}

interface SolarProductsProps {
  posts?: Post[];
}

export default function SolarProducts({ posts = [] }: SolarProductsProps) {
  const layers = [
    'Aluminium Frame',
    'Tempered Glass',
    'Encapsulant - EVA',
    'Solar cells',
    'Encapsulant - EVA',
    'Back sheet',
    'Junction Box'
  ];

  const displayProducts = posts.length > 0
    ? posts.slice(0, 6).map((post, index) => ({
        id: index + 100,
        name: post.title,
        code: post.slug.toUpperCase(),
        stock: 1453,
        price: 1250000,
        originalPrice: 1500000,
        discount: 20,
        category: 'solar',
        image: null
      }))
    : solarProducts;

  return (
    <section className="solar-products" id="solar-products">
      <div className="container">
        <div className="products-layout">
          <div className="products-sidebar">
            <button className="btn-green active">БҮТЭЭГДЭХҮҮН</button>
            <button className="btn-white active-blue">НАРНЫ ХАВТАН <span>▼</span></button>
            <button className="btn-white">ИНВЕРТЕР <span>▼</span></button>
            <button className="btn-white">БАТАРЕЙ СИСТЕМ <span>▼</span></button>
          </div>
          <div className="products-main">
            <div className="products-grid small" id="solarGrid">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="product-detail-image">
              <div className="layered-image">
                {layers.map((layer, index) => (
                  <div className="layer" key={index}>{layer}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
