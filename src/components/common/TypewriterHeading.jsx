import React, { useState, useEffect } from 'react';

const TypewriterHeading = ({ 
  text, 
  tag: Tag = 'h1', 
  className = '',
  speed = 50,
  showCursor = true 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;
    
    let currentIndex = 0;
    setDisplayedText('');
    setIsComplete(false);

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Tag 
      className={`typewriter ${isComplete ? 'typewriter-complete' : ''} ${className}`}
    >
      {displayedText}
      {!isComplete && showCursor && '|'}
    </Tag>
  );
};

export default TypewriterHeading;




