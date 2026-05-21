import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 240;

  useEffect(() => {
    // Preload all images
    const loadedImages = [];
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === frameCount) {
        setImages(loadedImages);
      }
    };

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/hero/ezgif-frame-${frameNumber}.jpg`;
      img.onload = handleImageLoad;
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas size - keep original dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const airpods = {
      frame: 0
    };

    // Draw initial frame
    context.drawImage(images[0], 0, 0, canvas.width, canvas.height);

    const ctx = gsap.context(() => {
      // Check if mobile
      const isMobile = window.innerWidth <= 768;

      // Frame-by-frame scroll animation
      gsap.to(airpods, {
        frame: frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: isMobile ? '+=50%' : '+=100%',
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
        onUpdate: () => {
          const frameIndex = Math.round(airpods.frame);
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
        }
      });

      // Title animation - letters drop one by one
      const titleText = titleRef.current.textContent;
      titleRef.current.innerHTML = titleText
        .split('')
        .map((char, i) => `<span style="display:inline-block;opacity:0;transform:translateY(-50px)">${char === ' ' ? '&nbsp;' : char === '\n' ? '<br>' : char}</span>`)
        .join('');

      gsap.to(titleRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3
      });

      // Subtitle fade in
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: 'power2.out' }
      );
    }, heroRef);

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const frameIndex = Math.round(airpods.frame);
      context.drawImage(images[frameIndex], 0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  return (
    <section className="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="hero-canvas"></canvas>

      <nav className="hero-nav">
        <div className="logo">Bir Öğretmenin Örgüleri</div>
        <a href="https://www.instagram.com/bir.ogretmenin.orguleri/" target="_blank" rel="noopener noreferrer" className="instagram-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </nav>

      <div className="hero-content">
        <h1 ref={titleRef}>El Yapımı Örgü Tasarımları</h1>
        <p ref={subtitleRef} className="hero-subtitle">Her ilmek bir hikaye anlatır.</p>
        <button className="hero-cta" onClick={() => {
          document.querySelector('.about-section')?.scrollIntoView({ behavior: 'smooth' });
        }}>
          Koleksiyonu Keşfet ↓
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
