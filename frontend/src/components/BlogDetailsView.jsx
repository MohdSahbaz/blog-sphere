import { useParams } from "react-router-dom";
import dumyBlogData from "../data/blogData";
import { FaUserCircle, FaCalendarAlt, FaTag } from "react-icons/fa";
import { format } from "date-fns";

const BlogDetailsView = () => {
  const { id } = useParams();

  const blog = dumyBlogData.find((b) => b.id == id);

  if (!blog) {
    return (
      <div className="text-center text-gray-400 text-lg">Blog not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Title */}
      <h1 className="text-3xl leading-[1.3] sm:text-4xl font-bold bg-gradient-to-r from-[#00ffae] to-[#00d4ff] text-transparent bg-clip-text">
        {blog.title}
      </h1>

      {/* SubDescription */}
      <p className="text-gray-300">{blog.subDescription}</p>

      {/* Image */}
      {blog.imagesURL && (
        <img
          src={blog.imagesURL}
          alt={blog.title}
          className="w-full rounded-xl shadow-lg object-cover max-h-[400px]"
        />
      )}

      {/* Author & Dates */}
      <div className="flex flex-wrap gap-6 items-center text-sm text-gray-400 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-[#00ffc8]" />
          <span>By {blog.user.username}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#00ffc8]" />
          <span>
            Published: {format(new Date(blog.createdAt), "MMMM d, yyyy")}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#00ffc8]" />
          <span>
            Updated: {format(new Date(blog.updatedAt), "MMMM d, yyyy")}
          </span>
        </div>
      </div>

      {/* Full Description */}
      <div className="text-gray-200 leading-relaxed">{blog.description}</div>

      {/* Tags */}
      <div className="flex flex-wrap gap-3 pt-6">
        {blog.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-white/10 backdrop-blur-md rounded-full text-[#00ffc8]"
          >
            <FaTag className="inline mr-1" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailsView;
