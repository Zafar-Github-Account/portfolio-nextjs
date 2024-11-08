'use client';

import { FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import emailjs from 'emailjs-com';
import Footer from '@/components/ui/footer';

const Contact: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ message: string, type: 'success' | 'error' | '' }>({
    message: '',
    type: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ message: 'Please fill in all fields.', type: 'error' });
      return;
    }

    emailjs.send(
      'service_am3dbsl',
      'template_zyokqrg',
      formData,
      '8S08VEHv-I8qMCReN'
    ).then(
      () => {
        setFormStatus({ message: 'Message sent successfully!', type: 'success' });
        setFormData({ name: '', email: '', message: '' });
      },
      () => {
        setFormStatus({ message: 'Failed to send message. Please try again later.', type: 'error' });
      }
    );

    setTimeout(() => {
      setFormStatus({ message: '', type: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-gray-900">
      <Navbar />
      
      {/* Contact Form Section */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-gray-600">I&apos;d love to hear from you! Please fill out the form below to send me a message.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 md:p-8 rounded-lg shadow-lg">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-800">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {formStatus.message && (
              <div className={`text-sm ${formStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {formStatus.message}
              </div>
            )}
            <div>
              <Button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-blue-50 py-12 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800">Or Reach Me At</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-gray-600">
            <div>
              <p className="text-lg font-medium">Email:</p>
              <a href="mailto:zafarsohail694@gmail.com" className="text-blue-600 hover:underline">zafarsohail694@gmail.com</a>
            </div>
            <div>
              <p className="text-lg font-medium">LinkedIn:</p>
              <a href="https://www.linkedin.com/in/zafar-sohail-b573bb244/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                linkedin.com/in/zafar
              </a>
            </div>
            <div>
              <p className="text-lg font-medium">GitHub:</p>
              <a href="https://github.com/Zafar-Github-Account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                github.com/zafar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
