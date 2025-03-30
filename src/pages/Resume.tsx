import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Resume: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Trigger download and redirect to homepage
    const link = document.createElement('a');
    link.href = 'public\Biswadeep.pdf'; // Path to the uploaded resume file
    link.download = '/Biswadeep_Guha_Roy_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Redirect after a short delay
    const timer = setTimeout(() => {
      navigate('/');
    }, 500);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-4">Downloading Resume...</h1>
        <p>You will be redirected to the homepage shortly.</p>
      </div>
    </div>
  );
};

export default Resume;
