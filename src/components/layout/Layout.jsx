import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsappButton from './WhatsappButton';

export default function Layout({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let lenis;

    import('@studio-freight/lenis')
      .then(({ default: Lenis }) => {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);
      })
      .catch(() => {});

    const revealElements = document.querySelectorAll('.gs-reveal');
    revealElements.forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      if (lenis) lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsappButton />
    </>
  );
}
