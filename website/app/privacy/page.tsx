import React from 'react';
import { Shield } from 'lucide-react';

export const metadata = {
  title: "Privacy Policy | Armemo",
  description: "Privacy policy and terms of service for the Armemo app.",
};

export default function PrivacyPolicy() {
  return (
    <main className="section" style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-panel" style={{ padding: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '30px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={24} color="#6366f1" />
            </div>
            <h1 className="outfit" style={{ fontSize: '2.5rem' }}>Privacy Policy</h1>
          </div>
          
          <div style={{ color: '#94a3b8', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p>
              Daricos Tech Development ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by the Armemo application and website.
            </p>

            <h2 className="outfit" style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>Information We Collect</h2>
            <p>
              Armemo is designed to respect your privacy. We do not require you to create an account or provide personal information to use the core features of our meditation app. 
              We may collect non-personal, aggregated usage data (such as which meditation tracks are played most often) to help us improve the app and provide a better experience.
            </p>

            <h2 className="outfit" style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>How We Use Your Information</h2>
            <p>
              Any information collected is used solely for the following purposes:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>To provide, operate, and maintain our application.</li>
              <li>To improve, personalize, and expand our application.</li>
              <li>To understand and analyze how you use our application.</li>
              <li>To develop new products, services, features, and functionality.</li>
            </ul>

            <h2 className="outfit" style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>Third-Party Services</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our app, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h2 className="outfit" style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>Security</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you use our app. However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>

            <h2 className="outfit" style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="outfit" style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at contact@daricostech.com.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
