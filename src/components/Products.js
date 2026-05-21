import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Bere',
    description: 'Yumuşak yün karışımı, sıcak tutan',
    colors: 'Terracotta, Sage, Krem',
    image: '/images/WhatsApp Image 2026-05-21 at 16.27.59.jpeg'
  },
  {
    id: 2,
    name: 'Atkı',
    description: 'El dokuması, uzun ve şık',
    colors: 'Tüm renkler mevcut',
    image: '/images/WhatsApp Image 2026-05-21 at 16.34.37.jpeg'
  },
  {
    id: 3,
    name: 'Hırka',
    description: 'Oversize kesim, rahat',
    colors: 'Özel renk seçimi',
    image: '/images/WhatsApp Image 2026-05-21 at 16.34.40.jpeg'
  },
  {
    id: 4,
    name: 'Kazak',
    description: 'Klasik kesim, günlük kullanım',
    colors: 'Doğal tonlar',
    image: '/images/WhatsApp Image 2026-05-21 at 16.34.49.jpeg'
  },
  {
    id: 5,
    name: 'Eldiven',
    description: 'Parmaksız veya tam',
    colors: 'İstediğin renk',
    image: '/images/WhatsApp Image 2026-05-21 at 16.35.02.jpeg'
  },
  {
    id: 6,
    name: 'Çanta',
    description: 'El yapımı, dayanıklı',
    colors: 'Desenli veya düz',
    image: '/images/WhatsApp Image 2026-05-21 at 16.35.11.jpeg'
  }
];

const Products = () => {
  const sectionRef = useRef(null);
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      const cards = slider.querySelectorAll('.product-card');

      if (cards.length === 0) return;

      // Check if mobile
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        const cardWidth = cards[0].offsetWidth + 40;
        const totalWidth = cardWidth * cards.length;

        // Horizontal scroll pin (desktop only)
        gsap.to(slider, {
          x: () => -(totalWidth - window.innerWidth + 200),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            pin: wrapperRef.current,
            scrub: 1,
            end: () => `+=${totalWidth}`,
            invalidateOnRefresh: true,
            pinSpacing: true,
            markers: false,
          }
        });
      }

      // Cards entrance animation
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt effect on hover
  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 12,
      rotateX: -y * 12,
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (card) => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out'
    });
  };

  return (
    <section className="products-section" ref={sectionRef}>
      <div className="products-wrapper" ref={wrapperRef}>
        <div className="products-header">
          <h2>Koleksiyon</h2>
          <p>Her ürün sipariş üzerine, senin için örülür.</p>
        </div>

        <div className="products-slider" ref={sliderRef}>
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-image-overlay"></div>
                <span className="product-number">0{product.id}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-colors">{product.colors}</p>
                <a
                  href="https://www.instagram.com/bir.ogretmenin.orguleri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="product-cta"
                >
                  Sipariş için DM
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
