'use client';

import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, []);

  return null;
}

