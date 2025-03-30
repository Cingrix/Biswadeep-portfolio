import React, { useState, useEffect, useRef } from 'react';
import TypewriterEffect from '@/components/TypewriterEffect';
import LoadingScreen from '@/components/LoadingScreen';
import ProfileImage from '@/components/ProfileImage';
import SocialLinks from '@/components/SocialLinks';
import { ArrowDown } from 'lucide-react';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const introSectionRef = useRef<HTMLDivElement>(null);

  // Simulated image loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll animation for introduction section
  useEffect(() => {
    const handleScroll = () => {
      if (introSectionRef.current) {
        const rect = introSectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible && !showIntro) {
          setShowIntro(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showIntro]);

  const handleLoadingComplete = () => {
    setLoading(false);

    // Delay showing content for smoother transition
    setTimeout(() => {
      setShowMainContent(true);
    }, 500);
  };

  const traits = [
    "Software Developer",
    "Big Data Analyst",
    "MERN Stack Developer"
  ];

  const scrollToIntro = () => {
    introSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className="min-h-screen flex flex-col">
        {showMainContent && (
          <>
            <div className="pt-20 flex-grow">
              {/* Hero Section with Animated Images */}
              <div className="container-fluid min-h-[80vh] flex flex-col justify-center relative overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-center">
                  {/* Left Image (Software Developer) */}
                  <div
                    className={`md:w-1/4 ${imagesLoaded ? 'slide-from-center-left' : 'opacity-0'}`}
                  >
                    <img
                      src="public\lovable-uploads\—Pngtree—cool illustration of businessman and_6006379.png"
                      alt="Software Developer"
                      className="max-w-full h-auto"
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                  </div>

                  {/* Center Content */}
                  <div className="md:w-1/6 text-center py-10 md:py-0 z-10">
                    <h1 className="text-xl font-bold text-portfolio-darkBlue">Hey, this is Biswadeep</h1>
                    <div className="h-10 text-[5px]">
                      <TypewriterEffect texts={traits} />
                    </div>
                  </div>

                  {/* Right Image (Data Analyst) */}
                  <div
                    className={`md:w-1/4 ${imagesLoaded ? 'slide-from-center-right' : 'opacity-0'}`}
                  >
                    <img
                      src="public\lovable-uploads\Lovepik_com-450092792- illustration of software development male developer.png"
                      alt="Data Analyst"
                      className="max-w-full h-auto"
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
                  <button onClick={scrollToIntro} aria-label="Scroll to introduction">
                    <ArrowDown className="text-portfolio-indigo" />
                  </button>
                </div>
              </div>

              {/* Introduction Section */}
              <div
                ref={introSectionRef}
                className={`container-fluid py-16 bg-white/80 backdrop-blur-sm rounded-lg transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Left side: Text */}
                  <div className="space-y-6">
                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4 text-portfolio-darkBlue">Introduction</h3>
                      <div className="space-y-3 text-gray-700">
                        <p>Proficient in programming languages such as C, C++, and Java, with expertise in front-end development, data structures, and deep learning.</p>
                        <p>Done projects like: Tumor Detection System, Student Progression App.</p>
                        <p>Completed a front-end development internship at IBM (Edunet Foundation).</p>
                        <p>Motivated by curiosity and a desire for innovation, I aim to use technology to create impactful solutions and make meaningful contributions to the tech industry.</p>
                      </div>
                    </div>

                    <SocialLinks className="mt-8" />
                  </div>

                  {/* Right side: Profile Image */}
                  <div className="flex justify-center md:justify-end">
                    <div className="w-64 h-64 md:w-80 md:h-80">
                      <ProfileImage
                        src="public\lovable-uploads\imagec-1.png"
                        alt="Biswadeep Guha Roy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default Index;
