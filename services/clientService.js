import getClients from '@/lib/getClients'
import axios from 'axios';

export const fetchClients = async () => await getClients()

export const fetchClient = async id => await getClients(id)

export const addClient = async clientData => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("Unauthorized - No token found")

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
      console.error("Error from WordPress API:", errorResponse); // Log error response from WordPress
      throw new Error(`Failed to add client. Status code: ${res.status}`);
    }

    return await res.json()
  } catch (error) {
    console.error("Error adding client")
    throw error
  }
};

export const uploadFile = async file => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No token found");
  }

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

export const deleteClient = async id => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("Unauthorized - No token found")

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return res.ok
  } catch (error) {
    console.error("❌ Error deleting client:", error);
    return false;
  }
};
