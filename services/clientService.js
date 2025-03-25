// services/clientService.js

// We will modify the clientService.js to fetch data internally instead of externally

export const fetchClients = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client`); // Internal API route
  if (!res.ok) {
    throw new Error("Error fetching clients");
  }
  return res.json(); // Parse the JSON response
};

export const fetchClient = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client/${id}`); // Internal API route with dynamic id
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/client`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clientData),
    });

    if (!res.ok) {
      throw new Error("Error adding client");
    }
    return res.json(); // Return the added client data
  } catch (error) {
    console.error("❌ Error adding client:", error);
    return null;
  }
};

export const deleteClient = async (id) => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Unauthorized - No token found");
    }

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
