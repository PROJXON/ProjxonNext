import axiosInstance from "../utils/axiosInstance";

const login = async (username, password) => {
    try {
        const response = await axiosInstance.post("/api/auth/login", {
            username,
            password,
        });

        if (response.data.token) {
            localStorage.setItem("authToken", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            return { success: true, user: response.data.user };
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