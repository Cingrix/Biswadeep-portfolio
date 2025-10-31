import React from 'react';
import resumePDF from '../assets/Biswadeep.pdf'; // Import the resume file

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-foreground">My Resume</h1>
          <a
            href={resumePDF}
            download="Biswadeep_Guha_Roy_Resume.pdf"
            className="bg-indigo-600 text-primary-foreground px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-lg">
          <embed
            src={resumePDF}
            type="application/pdf"
            width="100%"
            height="800px"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;