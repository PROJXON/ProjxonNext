import getClients from '@/lib/getClients'
import axios from 'axios';

export const fetchClients = async () => {
  try {
    const response = await getClients()

    if (!response.ok) {
      throw new Error("Failed to fetch clients");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching clients:", error);
    return []; // Return empty array if error occurs
  }
};

export const fetchClient = async id => {
  try {
    const response = await getClients(id)

    if (!response.ok) {
      throw new Error(`Failed to fetch client with id: ${id}`);
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("❌ Error fetching client:", error);
    return null;
  }
};

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

    const responseData = await res.json();
    return Response.json(responseData, { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error adding client", error: error.message }),
      { status: 500 }
    );
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

    if (!res.ok) {
      throw new Error("Error deleting client");
    }

    return res.status === 200 || res.status === 204;
  } catch (error) {
    console.error("❌ Error deleting client:", error);
    return false;
  }
};
