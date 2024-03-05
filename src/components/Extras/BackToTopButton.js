// BackToTopButton.js
'use client';
import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100); // You can adjust the scroll threshold as needed
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md ${
        isVisible ? 'visible' : 'invisible'
      }`}
      onClick={scrollToTop}
    >
      Back to Top
    </button>
  );
};

export default BackToTopButton;
