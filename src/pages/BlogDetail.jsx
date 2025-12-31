import { useParams, Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";

export default function BlogDetail() {
  const { id } = useParams();
  const { getBlogById } = useBlogs();
  const article = getBlogById(id);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-2xl font-semibold mb-4">Article not found</h1>
        <Link to="/blog" className="text-[#1B3A5F]">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="mb-6">
        <div className="text-sm text-[#6B7280] mb-2">
          {article.date} • {article.readingTime} min read
        </div>
        <h1 className="text-3xl font-semibold text-[#1A1D23] mb-4">
          {article.title}
        </h1>
        <div className="text-sm text-[#6B7280] mb-4">
          By {article.author} — {article.authorTitle}
        </div>
        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <div className="prose max-w-none text-[#4A5568] whitespace-pre-wrap">
          {article.content}
        </div>
      </div>
      <Link to="/blog" className="text-[#1B3A5F]">
        Back to Blog
      </Link>
    </div>
  );
}
