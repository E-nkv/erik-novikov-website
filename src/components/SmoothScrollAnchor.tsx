'use client';

import { useEffect } from 'react';

export default function SmoothScrollAnchor() {
  useEffect(() => {
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        const id = target.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          event.preventDefault();
          element.scrollIntoView({ behavior: 'smooth' });
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null; // This component doesn't render anything
}