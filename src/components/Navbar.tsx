
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-fluid py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link to="/" className="font-bold text-xl md:text-2xl text-portfolio-darkBlue">
            Biswadeep <span className="text-portfolio-indigo">Guha Roy</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/resume" className="nav-link">Resume</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-portfolio-darkBlue focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container-fluid py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Me</Link>
            <Link to="/resume" className="nav-link text-left">Resume</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
