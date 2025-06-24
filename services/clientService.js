import axios from 'axios';
import getToken from '@/lib/getToken';

export const fetchClients = async ({ useNoStore = false } = {}) => {
  try {
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`, {
      ...(useNoStore ? { cache: "no-store" } : { next: { revalidate: 300 } }), // default ISR for SSR pages
    });

    if (!res.ok) throw new Error("Error fetching clients");

    return await res.json();
  } catch (error) {
    console.error("❌ Error fetching clients:", error.message);
    return []; // Safe fallback for SSR
  }
};

export const fetchClient = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client/${id}`); // Internal API route with dynamic id
  if (!res.ok) throw new Error("Error fetching client");
  return res.json(); // Parse the JSON response
};

export const addClient = async (clientData) => {
  try {
    const token = getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      throw new Error(`Error adding client: ${errorResponse.message || res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("❌ Error adding client:", error.message);
    return null;
  }
};

export const uploadFile = async (file) => {
  const token = getToken();
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post('/api/upload', formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const token = getToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Error deleting client");

    return res.status === 200 || res.status === 204;
  } catch (error) {
    console.error("❌ Error deleting client:", error);
    return false;
  }
};