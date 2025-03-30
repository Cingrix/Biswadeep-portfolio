
import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-portfolio-indigo rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      <div className="absolute inset-0 rounded-full border-2 border-portfolio-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110 group-hover:border-dashed"></div>
      <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 rounded-full border-2 border-white/50 opacity-0 group-hover:opacity-100 animate-pulse"></div>
    </div>
  );
};

export default ProfileImage;
