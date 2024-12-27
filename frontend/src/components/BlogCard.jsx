import { Link } from "react-router-dom";

function BlogCard({ post }) {
  const date = new Date(post.dateCreated);
  const formattedDate = date.toString().slice(4, 15);
  return (
    <Link to={`/read-blog/${post._id}`} className="post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{formattedDate}</p>
    </Link>
  );
}

export default BlogCard;
