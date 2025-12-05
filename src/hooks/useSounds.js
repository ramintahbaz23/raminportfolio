import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import soundManager from '../utils/sounds';

// Initialize audio context on first user interaction
let initialized = false;
const initAudio = () => {
  if (!initialized && typeof window !== 'undefined') {
    const init = () => {
      soundManager.ensureContext();
      initialized = true;
      window.removeEventListener('click', init);
      window.removeEventListener('touchstart', init);
    };
    window.addEventListener('click', init, { once: true });
    window.addEventListener('touchstart', init, { once: true });
  }
};

// Hook to handle navigation sounds
export function useNavigationSounds() {
  const location = useLocation();
  const prevPathRef = React.useRef(location.pathname);

  useEffect(() => {
    // Initialize audio on first interaction
    initAudio();
    
    // Only play sound if path actually changed (not on initial load)
    if (prevPathRef.current !== location.pathname) {
      // Play clean click sound for navigation (no swoosh)
      const clickTimer = setTimeout(() => {
        soundManager.playClick();
      }, 50);

      prevPathRef.current = location.pathname;

      return () => {
        clearTimeout(clickTimer);
      };
    } else {
      prevPathRef.current = location.pathname;
    }
  }, [location.pathname]);
}

// Hook for hover sounds
export function useHoverSounds() {
  useEffect(() => {
    // Initialize audio on first interaction
    initAudio();
    
    let lastPlayTime = 0;
    let clickPending = false;
    const throttleDelay = 150; // Throttle to prevent too many sounds

    // Track clicks to prevent pop sound right before click
    const handleClick = () => {
      clickPending = true;
      setTimeout(() => {
        clickPending = false;
      }, 200);
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      
      // Check if target is an element node (not a text node)
      if (!target || typeof target.tagName === 'undefined') return;
      
      // Don't play pop if a click is about to happen
      if (clickPending) return;
      
      const now = Date.now();
      
      // Throttle sounds
      if (now - lastPlayTime < throttleDelay) return;
      
      // Check if target is a link or button, or is inside one
      const isLink = target.tagName === 'A';
      const isButton = target.tagName === 'BUTTON';
      const hasLinkParent = target.closest && typeof target.closest === 'function' && target.closest('a');
      const hasButtonParent = target.closest && typeof target.closest === 'function' && target.closest('button');
      const hasHoverClass = target.classList && (
        target.classList.contains('rainbow-hover')
      );
      
      // Exclude drum machine buttons from hover sounds
      const isDrumMachineButton = target.classList && target.classList.contains('drum-machine-button');
      const hasDrumMachineParent = target.closest && typeof target.closest === 'function' && target.closest('.drum-machine-button');
      
      if ((isLink || isButton || hasLinkParent || hasButtonParent || hasHoverClass) && !isDrumMachineButton && !hasDrumMachineParent) {
        soundManager.playPop();
        lastPlayTime = now;
      }
    };

    // Add event listeners
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);
}

export default soundManager;

