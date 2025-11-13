'use client'

import { useState, useEffect } from 'react';
import Counter from "./component/counter";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading products...</div>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>NextJS Homework</h1>
      
      {/* Navigation Links */}
      <nav style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <a href="#counter" style={{ marginRight: '20px', color: 'blue', textDecoration: 'underline' }}>Counter</a>
        <a href="#about" style={{ marginRight: '20px', color: 'blue', textDecoration: 'underline' }}>About</a>
        <a href="#store" style={{ color: 'blue', textDecoration: 'underline' }}>Store</a>
      </nav>

      {/* Counter Section */}
      <section id="counter" style={{ marginBottom: '60px', paddingTop: '20px' }}>
        <h2>Counter Component</h2>
        <p>Two counter components with different increment values and button colors.</p>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Counter increment={1} buttonColor="blue" />
          <Counter increment={2} buttonColor="green" />
        </div>
      </section>

      <hr />

      {/* About Section */}
      <section id="about" style={{ marginBottom: '60px', paddingTop: '20px' }}>
        <h2>About This Project</h2>
        <p>
          This project demonstrates basic React fundamentals using NextJS. 
          For my final project, my partner and I will be improving a music translator app with features like YouTube link reading and subscription services. 
          I would like to showcase this by making these features as well as possible.
        </p>
        <p>
          <strong>GitHub Repository:</strong>{' '}
          <a 
            href="https://github.com/yourusername/your-repo-name" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            View Code on GitHub
          </a>
        </p>
      </section>

      <hr />

      {/* Store Section */}
      <section id="store" style={{ paddingTop: '20px' }}>
        <h2>Product Store</h2>
        
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px'
          }}
        />

        <p>Showing {filteredProducts.length} products</p>

        {/* Products Table */}
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse',
          border: '1px solid #ddd'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Image</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Title</th>
              <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                  />
                </td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>{product.title}</td>
                <td style={{ padding: '12px', border: '1px solid #ddd' }}>${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredProducts.length === 0 && (
          <p style={{ textAlign: 'center', marginTop: '20px' }}>No products found matching "{searchTerm}"</p>
        )}
      </section>
    </div>
  );
}