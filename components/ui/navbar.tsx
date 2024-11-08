import Link from 'next/link';
import { Button } from './button';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          My Portfolio
        </Link>
        <div className="space-x-4">
          {/* Home Button */}
          <Link href="/" className="inline-block">
            <Button className="bg-blue-700 hover:bg-blue-800 px-4 py-2">Home</Button>
          </Link>
          <Link href="/about" className="inline-block">
            <Button className="bg-blue-700 hover:bg-blue-800 px-4 py-2">About</Button>
          </Link>
          <Link href="/project" className="inline-block">
            <Button className="bg-blue-700 hover:bg-blue-800 px-4 py-2">Projects</Button>
          </Link>
          <Link href="/contact" className="inline-block">
            <Button className="bg-blue-700 hover:bg-blue-800 px-4 py-2">Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
