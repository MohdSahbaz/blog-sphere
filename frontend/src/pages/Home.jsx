import { Link } from "react-router-dom";
import dumyBlogData from "../data/blogData";

const Home = () => {
  const getRandomBlogs = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const blogData = getRandomBlogs(dumyBlogData, 3);

  return (
    <div className="text-center space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl sm:text-5xl leading-[1.3] font-extrabold bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
          Welcome to Bloggr
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Share your thoughts, learn from others, and explore quality blog posts
          crafted with passion.
        </p>
        <Link
          to={"/blogs"}
          className="mt-4 px-6 py-2 bg-[#00ffae] text-black font-semibold rounded-full shadow hover:scale-105 transition cursor-pointer "
        >
          Explore Blogs
        </Link>
      </section>

      {/* Blog Preview Cards */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left shadow hover:shadow-lg transition duration-300 flex flex-col hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="mb-2 capitalize text-gray-400/50">
              By {blog.user.username}
            </p>
            <p className="text-gray-300 text-sm mb-4">{blog.subDescription}</p>
            <Link
              to={`/blog/${blog.id}`}
              className="mt-auto text-[#00ffc8] text-left hover:underline text-sm cursor-pointer"
            >
              Read More →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
