'use client';

import { FC } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/ui/footer';

const About: FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-12 space-y-8 md:space-y-0">
        <div className="w-48 h-48 md:w-64 md:h-64 mb-20 md:mb-40 relative overflow-hidden shadow-xl transform transition-transform hover:scale-110">
          <Image
            src="/zafar.jpg"
            alt="Zafar's profile picture"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left md:ml-8 max-w-xl space-y-6">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            Hello! I &apos; m a passionate Full Stack Developer with a strong foundation in web
            development. I specialize in building modern, responsive web applications using
            <strong> React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
            I love writing clean, maintainable code and solving complex problems through programming.
          </p>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            Over the years, I&apos;ve worked on several projects, collaborating with cross-functional
            teams to build intuitive and scalable web applications. I enjoy learning new
            technologies and improving my skills to stay updated with the latest trends in
            software development.
          </p>
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
            When I&apos;m not coding, I love to explore new technologies, contribute to open-source
            projects, and write about my experiences. I&apos;m always excited to learn and grow as a
            developer.
          </p>

          <div className="mt-8">
            <Link href="/cv">
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 px-8 py-3 rounded-full shadow-md transform transition-transform hover:scale-105 duration-300"
              >
                Download Resume
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
