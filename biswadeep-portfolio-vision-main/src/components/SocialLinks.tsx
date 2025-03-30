
import React from 'react';
import { Github, Instagram, Linkedin, Code2 } from 'lucide-react';

interface SocialLinksProps {
  size?: number;
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 24, className = '' }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/biswa_roy._/',
      icon: <Instagram size={size} className="transition-transform duration-300 hover:scale-125" />,
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-red-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Cingrix',
      icon: <Github size={size} className="transition-transform duration-300 hover:scale-125" />,
      bgColor: 'bg-gray-800'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Cingrix/',
      icon: <Code2 size={size} className="transition-transform duration-300 hover:scale-125" />,
      bgColor: 'bg-yellow-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/biswadeep-guha-roy-752a62258',
      icon: <Linkedin size={size} className="transition-transform duration-300 hover:scale-125" />,
      bgColor: 'bg-blue-600'
    }
  ];
  
  return (
    <div className={`flex ${className}`}>
      {socialLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${link.bgColor} text-white p-2 rounded-full mx-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
          aria-label={link.name}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
