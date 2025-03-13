import axiosInstance from "@/utils/axiosInstance";

export const fetchBlogs = async () => {
    const response = await axiosInstance.get("/api/blogs");
    return response.data;
};

export const fetchBlog = async (id) => {
    const response = await axiosInstance.get(`/api/blogs/${id}`);
    return response.data[0];
};