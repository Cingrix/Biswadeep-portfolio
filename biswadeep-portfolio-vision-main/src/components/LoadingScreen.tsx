
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 10;
          return newProgress > 100 ? 100 : newProgress;
        });
      } else {
        onLoadingComplete();
      }
    }, 200);
    
    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);
  
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="w-40 h-40 relative mb-8">
        {/* You can add your profile picture here */}
        <div className="w-full h-full rounded-full border-4 border-portfolio-indigo overflow-hidden">
          <img
            src="public\lovable-uploads\imagec.png" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 rounded-full border-t-4 border-portfolio-indigo animate-loading"></div>
      </div>
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-portfolio-indigo rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-portfolio-darkGray font-medium">Loading Portfolio... {progress}%</p>
    </div>
  );
};

export default LoadingScreen;
