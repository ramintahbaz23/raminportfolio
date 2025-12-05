import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isWorkPage = location.pathname.startsWith('/works/') && location.pathname !== '/works';
  const [backButtonColor, setBackButtonColor] = useState('black');
  const backButtonRef = useRef(null);

  useEffect(() => {
    if (!isWorkPage || !backButtonRef.current) return;

    const checkBackgroundColor = () => {
      const button = backButtonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Get the element at the center point
      const elementBelow = document.elementFromPoint(centerX, centerY);
      if (!elementBelow) return;

      // Walk up the DOM tree to find the actual background element
      let bgElement = elementBelow;
      while (bgElement && bgElement !== document.body) {
        const styles = window.getComputedStyle(bgElement);
        const bgColor = styles.backgroundColor;
        const opacity = parseFloat(styles.opacity);
        
        // Check if we have a solid background color
        if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent' && opacity > 0.5) {
          // Parse RGB values
          const rgbMatch = bgColor.match(/\d+/g);
          if (rgbMatch && rgbMatch.length >= 3) {
            const r = parseInt(rgbMatch[0]);
            const g = parseInt(rgbMatch[1]);
            const b = parseInt(rgbMatch[2]);
            
            // Calculate luminance (perceived brightness)
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            
            // If background is dark (luminance < 0.5), use white text, otherwise black
            setBackButtonColor(luminance < 0.5 ? 'white' : 'black');
            return;
          }
        }
        bgElement = bgElement.parentElement;
      }
    };

    // Check on scroll and resize
    const handleScroll = () => {
      requestAnimationFrame(checkBackgroundColor);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial check
    checkBackgroundColor();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isWorkPage]);

  return (
    <>
      <nav>
        <div className="flex justify-between items-center">
          {!isWorkPage && (
            <Link to="/" className={`text-[16px] md:text-[16pt] dark:text-white text-black`}>
              Ramin Tahbaz
            </Link>
          )}
        </div>
      </nav>
      {isWorkPage && (
        <>
          <div className="pt-5 md:pt-10 relative z-40">
            <div className="w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
              <Link 
                to="/" 
                className="text-[16px] md:text-[16pt] dark:text-white text-black relative z-40 inline-block"
                style={{ pointerEvents: 'auto', position: 'relative' }}
              >
                Ramin Tahbaz
              </Link>
            </div>
          </div>
          <div className="fixed top-5 md:top-10 z-50 w-full left-0 right-0 pointer-events-none">
            <div className="w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 flex justify-end">
              <Link 
                ref={backButtonRef}
                to="/works" 
                className={`text-[16px] md:text-[16pt] flex items-center mr-6 md:mr-[55px] px-3 py-1.5 rounded backdrop-blur-sm bg-white/80 dark:bg-[#1c1f26]/80 transition-colors duration-200 pointer-events-auto ${
                  backButtonColor === 'white' ? 'text-white' : 'text-black dark:text-white'
                }`}
              >
                <span className="mr-2">←</span>
                Back
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;