'use client'

import { useState, useEffect } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch products from API when component mounts
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

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading products...</div>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Product Store</h1>
      
      {/* Search Bar */}
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
    </div>
  );
}