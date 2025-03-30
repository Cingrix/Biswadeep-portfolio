import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formData,
        'YOUR_USER_ID' // Replace with your EmailJS user/public key
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border rounded-lg p-2"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-portfolio-indigo text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
      >
        Send Message
      </button>
      {status && <p className="text-center text-sm text-gray-600 mt-4">{status}</p>}
    </form>
  );
};

export default ContactForm;
