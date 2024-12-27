import { Link } from "react-router-dom";
import { formatDate } from "../utils/utils";

function BlogCard({ post }) {
  return (
    <Link to={`/read-blog/${post._id}`} className="post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{formatDate(post.dateCreated)}</p>
    </Link>
  );
}

export default BlogCard;
