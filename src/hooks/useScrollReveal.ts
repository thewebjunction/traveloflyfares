import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useScrollReveal<T extends HTMLElement>(
  options?: { y?: number; stagger?: number; delay?: number; duration?: number }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll('.reveal-child');
    const targets = children.length > 0 ? children : [el];

    gsap.set(targets, { opacity: 0, y: options?.y ?? 40 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(targets, {
              opacity: 1,
              y: 0,
              duration: options?.duration ?? 0.8,
              delay: options?.delay ?? 0,
              stagger: options?.stagger ?? 0.12,
              ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
