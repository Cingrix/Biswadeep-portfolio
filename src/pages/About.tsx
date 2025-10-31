
import React, { useState, useEffect } from 'react';
import Footer from '@/components/Footer';
import codingIllustration from '../assets/bb070ecb-a0ec-4154-889b-b11e3bdb9620.png';

const About: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(document.documentElement.classList.contains('dark'));

  // Observe changes to the 'dark' class on the html element
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Generate random submission data for the heatmap
  const generateSubmissionData = () => {
    const data = [];
    // Generate 7 days x 52 weeks of mock data
    for (let i = 0; i < 364; i++) {
      const submissions = Math.random() > 0.7 ? Math.floor(Math.random() * 5) + 1 : 0;
      data.push(submissions);
    }
    return data;
  };

  const submissionData = generateSubmissionData();

  // Function to get color based on submission count
  const getSubmissionColor = (count: number) => {
    if (count === 0) return isDarkMode ? 'bg-muted' : 'bg-gray-300';
    if (count === 1) return 'bg-green-200';
    if (count === 2) return 'bg-green-300';
    if (count === 3) return 'bg-green-400';
    if (count >= 4) return 'bg-green-500';
    return isDarkMode ? 'bg-muted' : 'bg-gray-200';
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container-fluid py-16">
        <h1 className="text-4xl font-bold text-center text-foreground mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left column: About text */}
          <div className="space-y-8">
            <p className="text-lg text-foreground">
              I am from Kolkata, West Bengal, and currently pursuing a B.Tech in Computer Science and Engineering with a focus on developing innovative technical solutions.
            </p>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Skills & Projects</h2>
              <p className="text-foreground mb-4">
                Skilled in programming, front-end development, data structures, and deep learning, I have worked on projects such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>A deep learning-based healthcare solution.</li>
                <li>An application to enhance student engagement.</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Motivation & Aspirations</h2>
              <p className="text-foreground mb-4">
                I am driven by a desire to solve problems and make meaningful contributions through technology.
              </p>
              <p className="text-foreground">
                I aspire to create my own startup in the field of software services, combining innovation and impactful solutions.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Beyond Coding</h2>
              <p className="text-foreground mb-4">
                Apart from coding, I am passionate about:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
                <li>Exploring the intricate details of fighter jets and military technology.</li>
                <li>Web development.</li>
                <li>Playing football.</li>
              </ul>
            </div>
          </div>
          
          {/* Right column: Image and LeetCode stats */}
          <div className="space-y-8">
            <div className="flex justify-center">
              <img 
                src={codingIllustration}
                alt="Coding Illustration"
                className="max-w-full h-auto rounded-lg shadow-lg"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
        
        {/* LeetCode Stats Section - Now below the about text */}
        <div className="mt-12 p-6 bg-background backdrop-blur-sm rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-foreground">LeetCode Stats</h2>
          
          <div className="flex flex-col space-y-6">
            {/* LeetCode stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-card p-4 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Problems Solved</p>
                <p className="text-3xl font-bold text-portfolio-indigo">400+</p>
              </div>
              
              <div className="bg-card p-4 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Contest Rating</p>
                <p className="text-3xl font-bold text-portfolio-indigo">1300+</p>
              </div>
              
              <div className="bg-card p-4 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Easy</p>
                <p className="text-3xl font-bold text-green-500">100+</p>
              </div>
              
              <div className="bg-card p-4 rounded-md text-center">
                <p className="text-sm text-muted-foreground">Medium</p>
                <p className="text-3xl font-bold text-yellow-500">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Hard: <span className="font-bold text-red-500">70+</span></p>
              </div>
            </div>
            
            {/* LeetCode contribution heatmap */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Submission Activity</h3>
              <div className="grid grid-cols-52 gap-1">
                {submissionData.map((count, index) => (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-sm ${getSubmissionColor(count)}`}
                    title={`${count} submissions`}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-muted-foreground">Less</span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-sm bg-muted"></div>
                  <div className="w-3 h-3 rounded-sm bg-green-200"></div>
                  <div className="w-3 h-3 rounded-sm bg-green-300"></div>
                  <div className="w-3 h-3 rounded-sm bg-green-400"></div>
                  <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                </div>
                <span className="text-xs text-muted-foreground">More</span>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://leetcode.com/u/Cingrix/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-portfolio-indigo hover:underline font-medium"
              >
                View my LeetCode profile →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
