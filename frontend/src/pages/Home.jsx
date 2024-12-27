import { useEffect, useState } from "react";
import { getAllPostsApi } from "../api/postsApi";
import BlogCard from "../components/BlogCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadAllPosts() {
      const data = await getAllPostsApi();
      data.sort(
        (p1, p2) =>
          new Date(p2.dateCreated).getTime() -
          new Date(p1.dateCreated).getTime()
      );
      setPosts(data);
    }
    loadAllPosts();
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Home;
