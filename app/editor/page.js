"use client";

import AuthGuard from "@/components/AuthGuard";
import React, { useState, useEffect, useRef } from "react";
import {
  fetchClients,
  addClient,
  deleteClient,
  uploadFile
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

  const handleAdd = async (e) => {
    e.preventDefault();

    // Make sure you handle the JWT token (can be stored in cookies or context)
    const token = localStorage.getItem('authToken'); // Or use context if needed

    if (!token) {
        return;
    }

    try {
        // Upload file if there is one
        let fileUrl = '';
        if (file) {
            fileUrl = await uploadFile(file);
        }

        const newClient = {
          name: newTestimonial.name,  
          quote: newTestimonial.quote, 
          title: newTestimonial.title,
          image: fileUrl,         
        };
        const addedClient = await addClient(newClient, token);
        if (addedClient) {
          const response = await fetch('/api/client');

          if (!response.ok) {
            throw new Error('Failed to fetch clients');
          }
          
          const updatedClients = await response.json();
          setClients(updatedClients);
          setCurrentTestIndex(updatedClients.length - 1);
        }

        console.log('Added client:', addedClient);
        // Handle success (e.g., clear form, show success message)
    } catch (error) {
        console.error('Error adding client:', error);
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
