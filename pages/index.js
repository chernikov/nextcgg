import { useState, useEffect } from 'react';

export default function Home() {
  const [secret, setSecret] = useState('');

  useEffect(() => {
    setSecret(process.env.NEXT_PUBLIC_MY_SECRET || 'Secret not found');
  }, []);

  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#333' }}>GitHub Actions Secret Display</h1>
      <div style={{ 
        background: '#f5f5f5', 
        padding: '1rem', 
        borderRadius: '8px',
        marginTop: '2rem'
      }}>
        <h2 style={{ color: '#555' }}>Secret Value:</h2>
        <p style={{ 
          background: '#fff', 
          padding: '1rem', 
          borderRadius: '4px',
          border: '1px solid #ddd',
          fontFamily: 'monospace',
          fontSize: '14px'
        }}>
          {secret}
        </p>
      </div>
      <div style={{ marginTop: '2rem', color: '#666' }}>
        <p>This value is passed from GitHub Actions as a secret during the build process.</p>
      </div>
    </div>
  );
}