import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.css';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { id: 1, size: 'large', src: '/images/WhatsApp Image 2026-05-21 at 16.35.19.jpeg' },
  { id: 2, size: 'medium', src: '/images/WhatsApp Image 2026-05-21 at 16.36.20.jpeg' },
  { id: 3, size: 'small', src: '/images/WhatsApp Image 2026-05-21 at 16.36.24.jpeg' },
  { id: 4, size: 'small', src: '/images/WhatsApp Image 2026-05-21 at 16.36.29.jpeg' },
  { id: 5, size: 'large', src: '/images/WhatsApp Image 2026-05-21 at 16.36.35.jpeg' },
  { id: 6, size: 'medium', src: '/images/WhatsApp Image 2026-05-21 at 16.36.55.jpeg' },
  { id: 7, size: 'medium', src: '/images/WhatsApp Image 2026-05-21 at 16.37.12.jpeg' },
  { id: 8, size: 'small', src: '/images/WhatsApp Image 2026-05-21 at 16.44.46.jpeg' }
];

const Gallery = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gallery items entrance animation
      gsap.from(itemsRef.current, {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery-section" ref={sectionRef}>
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Instagram'dan</h2>
          <p>Son çalışmalarımızı keşfedin</p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <a
              key={image.id}
              href="https://www.instagram.com/bir.ogretmenin.orguleri/"
              target="_blank"
              rel="noopener noreferrer"
              className={`gallery-item ${image.size}`}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <div className="gallery-image">
                <img src={image.src} alt={`Gallery ${image.id}`} />
                <div className="gallery-overlay">
                  <span className="gallery-text">Instagram'da Gör →</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="gallery-cta">
          <a
            href="https://www.instagram.com/bir.ogretmenin.orguleri/"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-button"
          >
            @bir.ogretmenin.orguleri →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
