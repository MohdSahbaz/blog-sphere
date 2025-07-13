const About = () => {
  return (
    <div className="flex items-center justify-center px-4 text-white">
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-8 max-w-3xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl leading-[1.3] font-bold bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
          About Bloggr
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Bloggr is a modern blogging platform where creators can share ideas,
          thoughts, and stories with the world. Built with performance, design,
          and community in mind — it’s a place for inspiration and expression.
        </p>
        <p className="text-gray-400 text-sm">
          This project is part of a hands-on learning journey using React and
          Spring Boot to build real-world web applications. Features like secure
          authentication, public/private blogs, and full CRUD are being added
          step by step.
        </p>
      </div>
    </div>
  );
};

export default About;
