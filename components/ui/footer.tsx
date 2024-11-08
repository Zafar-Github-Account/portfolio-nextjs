import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center py-6 sm:py-8 lg:py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Copyright Information */}
        <p className="text-lg sm:text-xl font-semibold text-gray-200">
          © 2024 My Portfolio. All Rights Reserved.
        </p>
        
        {/* Built With Information */}
        <div className="mt-4 text-sm sm:text-base text-gray-300">
          <p>
            Built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
          </p>
        </div>

        {/* Social Links with Icons */}
        <div className="mt-4 text-sm sm:text-base text-gray-300">
          <p className="flex justify-center space-x-6">
            <Link href="https://github.com/Zafar-Github-Account" passHref>
              <FaGithub size={24} className="hover:text-gray-100 transition duration-300" />
            </Link>
            <Link href="https://www.linkedin.com/in/zafar-sohail-b573bb244/" passHref>
              <FaLinkedin size={24} className="hover:text-gray-100 transition duration-300" />
            </Link>
            <Link href="zafarsohail694@gmail.com" passHref>
              <FaEnvelope size={24} className="hover:text-gray-100 transition duration-300" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
