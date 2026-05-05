'use client';

export default function LoadingSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="products-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="product-card" style={{ opacity: 0.6 }}>
          <div className="product-image" style={{ background: '#e0e0e0' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              background: '#d0d0d0', 
              borderRadius: '50%' 
            }} />
          </div>
          <div style={{ 
            height: '16px', 
            background: '#e0e0e0', 
            borderRadius: '4px', 
            margin: '10px auto',
            width: '80%'
          }} />
          <div style={{ 
            height: '12px', 
            background: '#e8e8e8', 
            borderRadius: '4px', 
            margin: '8px auto',
            width: '60%'
          }} />
        </div>
      ))}
    </div>
  );
}
