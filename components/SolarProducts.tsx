import { solarProducts } from '@/lib/products';
import ProductCard from './ProductCard';

export default function SolarProducts() {
  const layers = [
    'Aluminium Frame',
    'Tempered Glass',
    'Encapsulant - EVA',
    'Solar cells',
    'Encapsulant - EVA',
    'Back sheet',
    'Junction Box'
  ];

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
              {solarProducts.map(product => (
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
