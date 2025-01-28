import { FC } from "react";
import { Github } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-6 mt-10 border-2 border-gray-800 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left space-y-4 md:space-y-0">
        
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Private Asset Management. All rights reserved.
        </p>

        <a 
          href="https://github.com/stevencartavia/veil-assets" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-white transition"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>

      </div>
    </footer>
  );
};

export default Footer;
