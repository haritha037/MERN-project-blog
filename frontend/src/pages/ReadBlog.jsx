import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostApi } from "../api/postsApi";
import BlogCard from "../components/BlogCard";
import { formatDate } from "../utils/utils";

function ReadBlog() {
  const [post, setPost] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPost() {
      let data = await getPostApi(params.id);
      setPost(data);
    }
    loadPost();
  }, [params.id]);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{formatDate(post.dateCreated)}</p>
      <p>{post.content}</p>
    </div>
  );
}

export default ReadBlog;
