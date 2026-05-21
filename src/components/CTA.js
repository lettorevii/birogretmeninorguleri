import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './CTA.css';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animation
      gsap.to(bgRef.current, {
        scale: 1.05,
        rotation: 2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Content fade in
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
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
    <section className="cta-section" ref={sectionRef}>
      <div className="cta-bg" ref={bgRef}></div>
      <div className="cta-content" ref={contentRef}>
        <h2>Sana özel bir şey öreyim.</h2>
        <p>
          Sipariş vermek veya bilgi almak için<br />
          Instagram'dan ulaşabilirsin.
        </p>
        <a
          href="https://www.instagram.com/bir.ogretmenin.orguleri/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Instagram'da Mesaj Gönder
        </a>
      </div>
    </section>
  );
};

export default CTA;
