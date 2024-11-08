'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

const Projects: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
      <Navbar />

      {/* Main Section */}
      <main className="p-8 sm:p-10 lg:p-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-gray-800">My Projects</h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">
            <img
              src="/covid.png"
              alt="Covid Website"
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                Covid Website
              </h3>
              <p className="text-gray-600 mt-3 text-base sm:text-lg">
                A description of the Covid project. Highlights include features, technology stack, and challenges.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 px-4 py-2 w-full rounded-full transform transition-transform hover:scale-105 duration-300"
                  onClick={() => window.open('https://covid-website-indol.vercel.app')}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">
            <img
              src="/studen-card.png"
              alt="Student Card"
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                Student Card
              </h3>
              <p className="text-gray-600 mt-3 text-base sm:text-lg">
                A description of the Student Card project. Discusses the tech stack and how it addresses user needs.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 px-4 py-2 w-full rounded-full transform transition-transform hover:scale-105 duration-300"
                  onClick={() => window.open('https://zafaf.vercel.app')}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-2xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-3xl">
            <img
              src="/acme.png"
              alt="ACME Website"
              className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="p-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
                ACME Website
              </h3>
              <p className="text-gray-600 mt-3 text-base sm:text-lg">
                Description of the ACME project. Covers tools, languages, and frameworks used.
              </p>
              <div className="mt-6">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 px-4 py-2 w-full rounded-full transform transition-transform hover:scale-105 duration-300"
                  onClick={() => window.open('https://nextjs-website-official.vercel.app/dashboard')}
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
