'use client'

export const fetchClients = async () => {
  const res = await fetch(`/api/client`); // Internal API route
  if (!res.ok) {
    throw new Error("Error fetching clients");
  }
  return res.json(); // Parse the JSON response
};

export const fetchClient = async (id) => {
  const res = await fetch(`/api/client/${id}`); // Internal API route with dynamic id
  if (!res.ok) {
    throw new Error("Error fetching client");
  }
  return res.json(); // Parse the JSON response
};

export const addClient = async (clientData) => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Unauthorized - No token found");
    }

    const res = await fetch(`/api/client`, {
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
  const token = localStorage.getItem("authToken");

  if (!token) {
    throw new Error("No token found");
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    opt = {
      method: 'POST',
      body: 'formData',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
    const response = await fetch('/api/upload', opt);
    return response.data.url;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Unauthorized - No token found");
    }

    const res = await fetch(`/api/client/${id}`, {
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
