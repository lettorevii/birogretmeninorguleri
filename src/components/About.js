import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text moves down
      gsap.to(textRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Image moves up (opposite direction)
      gsap.to(imageRef.current, {
        y: -100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Fade in animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-text" ref={textRef}>
          <h2>Küçük el ile büyük sevgi.</h2>
          <p>
            Her ilmek, sabırla ve özenle örülür. Geleneksel teknikleri modern tasarımlarla
            buluşturarak, size özel parçalar yaratıyoruz. Doğal iplikler, el emeği ve
            sınırsız renk seçenekleriyle hayalinizdeki örgüyü birlikte tasarlayalım.
          </p>
          <a
            href="https://www.instagram.com/bir.ogretmenin.orguleri/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta"
          >
            Instagram'da Takip Et →
          </a>
        </div>

        <div className="about-image" ref={imageRef}>
          <img
            src="/images/WhatsApp Image 2026-05-21 at 16.25.41.jpeg"
            alt="El İşçiliği"
          />
          <div className="image-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
