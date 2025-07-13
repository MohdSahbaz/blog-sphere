import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex items-center justify-center px-4 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-3xl w-full text-center space-y-10">
        {/* About Text */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl leading-[1.3] font-bold bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
            About Bloggr
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Bloggr is a modern blogging platform where creators can share ideas,
            thoughts, and stories with the world. Built with performance,
            design, and community in mind — it’s a place for inspiration and
            expression.
          </p>
          <p className="text-gray-400 text-sm">
            This project is part of a hands-on learning journey using React and
            Spring Boot to build real-world web applications. Features like
            secure authentication, public/private blogs, and full CRUD are being
            added step by step.
          </p>
        </div>

        {/* Creator Profile Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-white/20">
          <img
            src="https://avatars.githubusercontent.com/u/153989346?s=400&u=b8958b7542a7cd4a1c7e29b7395d211c8308a491&v=4"
            alt="Creator"
            className="w-24 h-24 rounded-full border-4 border-[#00ffae] shadow"
          />
          <div className="text-left sm:text-center space-y-1">
            <h3 className="text-xl font-semibold text-white">Mohd Shabaz</h3>
            <p className="text-[#00ffc8] text-sm">
              Full Stack Developer (MERN & Java)
            </p>
            <p className="text-gray-400 text-sm">
              I specialize in building modern web applications using React,
              Node.js, Spring Boot, and MongoDB. Passionate about clean UI,
              efficient backend, and delivering real-world solutions.
            </p>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="pt-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#00ffc8] hover:underline"
          >
            <FaArrowLeft /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
