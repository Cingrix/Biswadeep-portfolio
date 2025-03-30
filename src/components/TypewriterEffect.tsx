
import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // If we're deleting
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        timeout = setTimeout(() => {}, delayBetweenTexts);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      }
    } 
    // If we're typing
    else {
      const fullText = texts[currentTextIndex];
      if (currentText === fullText) {
        // Delay before starting to delete
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, typingSpeed);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);
  
  return (
    <div className="typewriter-container">
      <span className="font-medium text-portfolio-indigo text-xl md:text-2xl">
        {currentText}
        <span className="inline-block w-0.5 h-5 bg-portfolio-indigo ml-0.5 animate-blink-caret"></span>
      </span>
    </div>
  );
};

export default TypewriterEffect;
