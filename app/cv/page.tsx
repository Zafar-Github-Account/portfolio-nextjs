// pages/cv.tsx

import { FC } from 'react';
import Navbar from '@/components/ui/navbar';
import Image from 'next/image';

const CV: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-300 to-pink-300 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* CV Main Section */}
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-xl mt-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-28 h-28 rounded-full overflow-hidden mb-6">
            <Image
              src="/zafar.jpg"
              alt="Profile Picture"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-800 hover:text-blue-600 transition duration-300">Zafar Sohail</h1>
          <p className="text-xl text-gray-600 mt-2">Full Stack Developer</p>
        </div>

        {/* About Me Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="text-lg text-gray-700">
            I&apos;m a passionate Full Stack Developer with expertise in building modern web applications using React, Next.js, TypeScript, and TailwindCSS. I focus on writing clean, maintainable code and building intuitive, user-friendly applications.
          </p>
        </section>

        {/* Skills Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-lg text-gray-700">
            <li className="flex items-center hover:text-blue-600 transition duration-300">React</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">Next.js</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">TypeScript</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">TailwindCSS</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">Node.js</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">Git & GitHub</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">MongoDB</li>
            <li className="flex items-center hover:text-blue-600 transition duration-300">Express</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Experience</h2>
          <div className="space-y-8">
            <div className="hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">Full Stack Developer</h3>
              <p className="text-lg text-gray-600">Zafar Tech Solutions - June 2022 - Present</p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Developed and maintained web applications using React, Next.js, and TypeScript.</li>
                <li>Collaborated with the design team to create intuitive and responsive UIs.</li>
                <li>Implemented server-side functionalities using Node.js and Express.</li>
              </ul>
            </div>
            <div className="hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold text-gray-800">Frontend Developer</h3>
              <p className="text-lg text-gray-600">Zafar Corp - Jan 2021 - May 2022</p>
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                <li>Built user-friendly interfaces using React and TailwindCSS.</li>
                <li>Optimized web pages for performance and speed improvements.</li>
                <li>Integrated RESTful APIs into frontend applications.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-4 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800">Education</h2>
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Bachelor of Computer Science</h3>
            <p className="text-lg text-gray-600">University of karachi - 2017 - 2021</p>
            <p className="text-lg text-gray-700">Focused on software development, algorithms, and data structures.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact</h2>
          <p className="text-lg text-gray-700">Feel free to reach out to me via email at <a href="mailto:zafarsohail694@gmail.com" className="text-blue-600 hover:text-blue-800 transition duration-300">zafarsohail694@gmail.com</a></p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-16">
        <p>© 2024 Zafar Sohail. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default CV;
