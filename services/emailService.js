import axiosInstance from "../utils/axiosInstance";

export const sendEmail = async (formData) => {
    try {
        const response = await axiosInstance.post(
            "/api/emails/send-email",
            formData
        );
        return response.data;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};