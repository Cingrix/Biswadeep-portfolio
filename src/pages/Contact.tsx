import React from 'react';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gray-50">
      <div className="container-fluid py-16 flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl text-center">
          <h1 className="text-5xl font-bold text-portfolio-darkBlue mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 mb-12">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        </div>
        
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden p-10 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-portfolio-darkBlue border-b-2 border-portfolio-indigo pb-4">Contact Information</h2>
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-indigo/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-portfolio-indigo" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <a href="mailto:biswa03050920@gmail.com" className="text-lg text-gray-600 hover:text-portfolio-indigo transition-colors">
                    biswa03050920@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-portfolio-indigo/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-portfolio-indigo" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                  <a href="tel:+917595995807" className="text-lg text-gray-600 hover:text-portfolio-indigo transition-colors">
                    +91-7595995807
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-8">
              <h2 className="text-3xl font-semibold text-portfolio-darkBlue border-b-2 border-portfolio-indigo pb-4">Follow Me</h2>
              <p className="text-lg text-gray-600">Connect with me on social media for the latest updates and a more personal glimpse into my work and life.</p>
              <div className="flex justify-start items-center pt-4">
                <SocialLinks size={40} className="space-x-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
