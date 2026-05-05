interface MenuItem {
  _id: string;
  label: string;
  url: string;
  order: number;
}

interface FooterProps {
  footerMenus?: MenuItem[];
}

export default function Footer({ footerMenus = [] }: FooterProps) {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h4>ABOUT</h4>
            <p>MyMonSource LLC is professional supplier company specialized in electrical products for Mining, Construction and Energy sector of Mongolia.</p>
          </div>
          <div className="footer-contact">
            <h4>CONTACT US</h4>
            <p>MMS Green building, Archivists street 512,</p>
            <p>8th khoroo, Khan-Uul district, Ulaanbaatar</p>
            <p>17101, Mongolia</p>
          </div>
        </div>
        
        {footerMenus.length > 0 && (
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            marginBottom: '20px',
            flexWrap: 'wrap'
          }}>
            {footerMenus.sort((a, b) => a.order - b.order).map((menu) => (
              <a 
                key={menu._id}
                href={menu.url}
                style={{ 
                  color: '#666', 
                  textDecoration: 'none',
                  fontSize: '14px'
                }}
              >
                {menu.label}
              </a>
            ))}
          </div>
        )}
        
        <div className="footer-bottom">
          <p>THE FUTURE IS ELECTRIC</p>
        </div>
      </div>
    </footer>
  );
}
