import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Armemo | Meditation & Mindfulness",
  description: "Find your inner peace with Armemo, the premier Amharic guided meditation app built by Daricos Tech Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="container nav-content">
            <Link href="/" className="nav-logo">
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #289DE1, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px' }}>
                A
              </div>
              Armemo
            </Link>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><a href="#features">Features</a></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </nav>
        
        {children}

        <footer>
          <div className="container">
            <div className="footer-content">
              <div>
                <div className="nav-logo" style={{ marginBottom: '20px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', background: 'linear-gradient(135deg, #289DE1, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '14px' }}>
                    A
                  </div>
                  Armemo
                </div>
                <p style={{ color: '#94a3b8', lineHeight: '1.6', maxWidth: '300px' }}>
                  Your daily companion for mindfulness, meditation, and mental clarity in Amharic.
                </p>
              </div>
              <div>
                <h4 className="outfit" style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px' }}>Links</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li><Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Home</Link></li>
                  <li><Link href="/privacy" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</Link></li>
                  <li><a href="mailto:contact@daricostech.com" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }}>Contact Daricos Tech</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} Daricos Tech Development. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
