export default function getToken() {
  const token = localStorage.getItem('authToken');
  if (!token) throw new Error('Unauthorized - No token found');
  return token;
}