import axiosInstance from "../utils/axiosInstance";

const login = async (username, password) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Login failed:", errorData);
      throw new Error(errorData.message || "Invalid username or password.");
    }

    const data = await response.json()

    if (data.token) {
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return { success: true, user: data.user };
    } else {
      return { success: false, message: "Invalid username or password." };
    }
  } catch (error) {
    console.error("Login failed:", error);
    return { success: false, message: "Login failed. Please try again." };
  }
};

const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
};

const isAuthenticated = () => {
  return !!localStorage.getItem("authToken");
};

export { login, logout, isAuthenticated };
