import { useState } from "react";
import dumyBlogData from "../data/blogData";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = dumyBlogData.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-10">
      {/* Search Area with Heading */}
      <div className="text-center space-y-6">
        <div>
          <h2 className="text-3xl leading-[1.3] font-bold bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
            Explore All Blogs
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Search posts by title and discover insightful articles.
          </p>
        </div>

        {/* Search Input with Icon */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="search"
            placeholder="Search blogs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#00ffc8]"
          />
        </div>
      </div>

      {/* Blog Cards */}
      {filteredBlogs.length > 0 ? (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-left shadow hover:shadow-lg transition duration-300 flex flex-col hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="mb-2 capitalize text-gray-400/50">
                By {blog.user.username}
              </p>
              <p className="text-gray-300 text-sm mb-4">
                {blog.subDescription}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="mt-auto text-[#00ffc8] text-left hover:underline text-sm cursor-pointer"
              >
                Read More →
              </Link>
            </div>
          ))}
        </section>
      ) : (
        <p className="text-center text-gray-400">No blogs found.</p>
      )}
    </div>
  );
};

export default Blogs;
