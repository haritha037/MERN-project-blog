import axios from "axios";

const URL = "http://localhost:3000";

export async function getAllPostsApi() {
  const response = await axios.get(`${URL}/posts`);
  if (response.status === 200) {
    console.log(response);
    return response.data;
  } else {
    return;
  }
}

export async function getPostApi(id) {
  const response = await axios.get(`${URL}/posts/${id}`);

  if (response.status === 200) {
    console.log(response);
    return response.data;
  } else {
    return;
  }
}

export async function createPostApi(post) {
  const response = await axios.post(`${URL}/posts`, post);
  return response;
}

export async function updatePostApi(id, post) {
  const response = await axios.put(`${URL}/posts/${id}`, post);
  return response;
}

export async function deletePostApi(id) {
  const response = await axios.delete(`${URL}/posts/${id}`);
  return response; // to check the status
}
