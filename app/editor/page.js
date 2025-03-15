"use client";

import AuthGuard from "@/components/AuthGuard";
import React, { useState, useEffect, useRef } from "react";
import {
  fetchClients,
  addClient,
  deleteClient,
} from "../../services/clientService";
import "./TestimonialEditorPage.css";
import { useRouter } from "next/navigation";
import { logout } from "../../services/loginService";
import ImageUpload from "../../components/ImageUpload";
import axiosInstance from "../../utils/axiosInstance";

export default function EditorPage() {
  const router = useRouter();
  const [clients, setClients] = useState([]);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState({
    image: "",
    quote: "",
    name: "",
    title: "",
  });
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    const loadClients = async () => {
      const response = await fetchClients();
      setClients(response);
    };
    loadClients();
  }, []);

  const getCurrentClient = () => {
    if (clients.length === 0) {
      return {
        image: "",
        quote: "No testimonials available.",
        name: "",
        title: "",
      };
    }
    return clients[currentTestIndex];
  };

  const handlePrev = () => {
    if (clients.length > 0) {
      setCurrentTestIndex(
        (prevIndex) => (prevIndex - 1 + clients.length) % clients.length
      );
    }
  };

  const handleNext = () => {
    if (clients.length > 0) {
      setCurrentTestIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }
  };

  const handleDelete = async () => {
    if (clients.length === 0) return;

    const clientId = clients[currentTestIndex].id;

    try {
      const success = await deleteClient(clientId);
      if (success) {
        const updatedClients = await fetchClients();
        setClients(updatedClients);
        setCurrentTestIndex(Math.max(0, currentTestIndex - 1));
      }
    } catch (error) {
      console.error("Error deleting client:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    if (
      !file ||
      !newTestimonial.quote ||
      !newTestimonial.name ||
      !newTestimonial.title
    ) {
      alert("Please fill out relevant fields before adding a new entry.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axiosInstance.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${authToken}`,
        },
      });

      const imageUrl = response.data.url;

      const testimonialWithImage = {
        ...newTestimonial,
        image: imageUrl,
      };

      const addedClient = await addClient(testimonialWithImage);

      if (addedClient && addedClient.id) {
        const updatedClients = await fetchClients();
        setClients(updatedClients);
        setCurrentTestIndex(updatedClients.length - 1);
        setNewTestimonial({ image: "", quote: "", name: "", title: "" });
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
      }
    } catch (error) {
      console.error("Error adding testimonial", error);
    }
  };

  return (
    <AuthGuard>
      <div className="testimonial-editor">
        <h1>Testimonial Carousel Editor</h1>
        <div className="testimonial-carousel">
          <div className="testimonial">
            {getCurrentClient().image && (
              <img
                className="image"
                src={getCurrentClient().image}
                alt="Client"
              />
            )}
            <span className="quote">{getCurrentClient().quote}</span>
            <span className="name">{getCurrentClient().name}</span>
            <span className="title">{getCurrentClient().title}</span>
          </div>
          <button id="leftButton" onClick={handlePrev}>
            Left
          </button>
          <button id="rightButton" onClick={handleNext}>
            Right
          </button>
          <button id="deleteButton" onClick={handleDelete}>
            Delete Current Entry
          </button>
        </div>

        <ImageUpload
          ref={fileInputRef}
          onFileSelect={(file) => setFile(file)}
        />
        <textarea
          name="quote"
          value={newTestimonial.quote}
          onChange={handleInputChange}
          placeholder="Quote"
        ></textarea>
        <textarea
          name="name"
          value={newTestimonial.name}
          onChange={handleInputChange}
          placeholder="Name"
        ></textarea>
        <textarea
          name="title"
          value={newTestimonial.title}
          onChange={handleInputChange}
          placeholder="Title"
        ></textarea>
        <div className="buttons">
          <button id="addButton" onClick={handleAdd}>
            Add Entry
          </button>
          <button id="logoutButton" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </AuthGuard>
  );
}
