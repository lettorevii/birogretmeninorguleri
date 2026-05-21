import React from 'react';
import './Features.css';

const features = [
  {
    icon: '🧶',
    title: 'El Yapımı',
    description: 'Her ürün sipariş üzerine üretilir.'
  },
  {
    icon: '🌿',
    title: 'Doğal İplik',
    description: 'Yün, pamuk ve mohair karışımı.'
  },
  {
    icon: '🎨',
    title: 'Renk Seçimi',
    description: 'İstediğin renkte sipariş verebilirsin.'
  },
  {
    icon: '📦',
    title: 'Özenli Paket',
    description: 'Hediye olarak da gönderilebilir.'
  }
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2>Neden El Yapımı?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
