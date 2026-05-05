export default function CategoryIcons() {
  const categories = [
    'САРГЭЭГДЭХ',
    'САМБАР',
    'БАТАРЕЙТ БАГАЖ',
    'КАБЕЛЬ',
    'БАРИЛГА',
    'УУЛ УУРХАЙ'
  ];

  return (
    <section className="category-icons" id="categories">
      <div className="container">
        <h3 className="section-label">САЛБАРЫН АНГИЛАЛ</h3>
        <div className="icons-grid">
          {categories.map((cat, index) => (
            <div className="icon-card" key={index}>
              <div className="icon-placeholder"></div>
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
