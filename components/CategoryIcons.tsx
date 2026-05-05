'use client';

interface CategoryIconsProps {
  activeCategory?: string;
  onCategorySelect?: (category: string) => void;
}

interface CategoryItem {
  label: string;
  value: string;
  icon: string;
}

const categories: CategoryItem[] = [
  { label: 'СЭРГЭЭДЭХ', value: 'solar', icon: '☀️' },
  { label: 'САМБАР', value: 'switchboard', icon: '⚡' },
  { label: 'БАТАРЕЙТ БАГАЖ', value: 'battery', icon: '🔋' },
  { label: 'КАБЕЛЬ', value: 'cable', icon: '🔌' },
  { label: 'БАРИЛГА', value: '', icon: '🏗️' },
  { label: 'УУЛ УУРХАЙ', value: '', icon: '⛏️' },
];

export default function CategoryIcons({ activeCategory = '', onCategorySelect }: CategoryIconsProps) {
  const handleClick = (category: CategoryItem) => {
    if (onCategorySelect) {
      onCategorySelect(category.value);
    }
  };

  return (
    <section className="category-icons" id="categories">
      <div className="container">
        <h3 className="section-label">САЛБАРЫН АНГИЛАЛ</h3>
        <div className="icons-grid">
          {categories.map((cat, index) => {
            const isActive = activeCategory === cat.value;
            return (
              <div 
                className={`icon-card ${isActive ? 'active' : ''} ${onCategorySelect ? 'clickable' : ''}`}
                key={index}
                onClick={() => handleClick(cat)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleClick(cat);
                  }
                }}
              >
                <div className="icon-placeholder">{cat.icon}</div>
                <span>{cat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
