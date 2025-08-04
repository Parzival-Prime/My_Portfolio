
import {Brand} from "../Smallutils"

function Footer() {
  return (
    <footer className="bg-[#52020F] text-white py-6 mt-10">

        <div className="mx-3 mb-4">
            <Brand/>
        </div>

       <div className="pl-5 flex flex-col gap-y-3 text-lg">

        <a href='about' 
        target="_blank"
        rel="noopener noreferrer">About Me</a>

        <a href='#contact'
        target="_blank"
        rel="noopener noreferrer">Contact Me</a>
       </div>

       <div className="text-center mt-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
        
      {/* 
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            More About Me
          </a>

          <a
            href="#contact"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
          >
            Contact Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-center md:text-left">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div> 
      */}
      
    </footer>
  );
}

export default Footer