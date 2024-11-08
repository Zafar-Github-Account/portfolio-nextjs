import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-blue-400 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center text-center py-16 px-4 sm:px-8 lg:px-12 space-y-8 sm:space-y-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-lg transform transition-all duration-300 hover:translate-y-1">
          Hello, I&apos;m a Full Stack Developer
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Welcome to my portfolio, built with <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
          Here you can explore my projects, learn about my journey, and get in touch for collaborations or inquiries.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <Link href="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:translate-y-1">
              View Projects
            </Button>
          </Link>
          <Link href="/about">
            <Button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transform transition-all duration-300 hover:bg-white hover:text-blue-600 hover:scale-105 hover:translate-y-1">
              About Me
            </Button>
          </Link>
        </div>
      </main>

      {/* Skills Section */}
      <section className="bg-white py-16 sm:py-20 shadow-lg rounded-xl mx-4 sm:mx-8 xl:mx-16">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 transform transition-all duration-300 hover:translate-y-1">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            I specialize in modern web development with a strong emphasis on <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:translate-y-2">
              <Image src="/React.png" alt="React logo" width={80} height={80} className="mb-4 mx-auto" />
              <p className="text-xl font-semibold text-gray-800">React</p>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:translate-y-2">
              <Image src="/next.jpg" alt="Next.js logo" width={80} height={80} className="mb-4 mx-auto" />
              <p className="text-xl font-semibold text-gray-800">Next.js</p>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:translate-y-2">
              <Image src="/typescript.png" alt="TypeScript logo" width={80} height={80} className="mb-4 mx-auto" />
              <p className="text-xl font-semibold text-gray-800">TypeScript</p>
            </div>
            <div className="text-center transform transition-all duration-300 hover:scale-110 hover:translate-y-2">
              <Image src="/tailwind.png" alt="TailwindCSS logo" width={80} height={80} className="mb-4 mx-auto" />
              <p className="text-xl font-semibold text-gray-800">TailwindCSS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 py-16 sm:py-20 text-white text-center shadow-xl rounded-xl mx-4 sm:mx-8 xl:mx-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl sm:text-4xl font-semibold transform transition-all duration-300 hover:translate-y-1">
            Get in Touch
          </h3>
          <p className="text-lg sm:text-xl text-gray-200">
            Whether you&apos;re interested in working together or just want to chat, I&apos;d love to hear from you!
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-200 text-lg px-8 py-4 rounded-lg font-semibold transition duration-300 transform hover:scale-105 hover:translate-y-1">
              Contact Me
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
