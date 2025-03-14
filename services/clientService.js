import axiosInstance from "../utils/axiosInstance";

export const fetchClients = async () => {
  const response = await axiosInstance.get("/api/clients");
  return response.data;
};

export const fetchClient = async (id) => {
  const response = await axiosInstance.get(`/api/clients/${id}`);
  return response.data;
};

export const addClient = async (clientData) => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Unauthorized - No token found");
    }

    const response = await axiosInstance.post("/api/clients", clientData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
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

    const response = await axiosInstance.delete(`/api/clients/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200 || response.status === 204) {
      console.log("✅ Client deleted successfully in backend");
      return true;
    }

    console.log("❌ Unexpected response:", response);
    return false;
  } catch (error) {
    console.error("Error deleting client:", error);
    return false;
  }
};
