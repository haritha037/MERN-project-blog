import { useEffect, useState } from "react";

import "./App.css";
import { getAllPostsApi } from "./api/postsApi";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function loadAllPosts() {
      const data = await getAllPostsApi();

      if (data) {
        setPosts(data);
      }
    }

    loadAllPosts();
  }, []);

  return <div>{JSON.stringify(posts)}</div>;
}

export default App;
