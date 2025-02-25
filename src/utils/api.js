const API_URL = 'https://jsonplaceholder.typicode.com';

export default async function getPosts() {
  const response = await fetch(`${API_URL}/posts`);
  return response.json();
}

export async function getUser(userId) {
  const response = await fetch(`${API_URL}/users/${userId}`);
  return response.json();
}

export async function getUserPosts(userId = 1) {
  const response = await fetch(`${API_URL}/posts?userId=${userId}`)
  return response.json();
}
