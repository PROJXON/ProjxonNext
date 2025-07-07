'use client';
import AuthGuard from '@/components/AuthGuard';
import React, { useState, useEffect, useRef } from 'react';
import { addClient, deleteClient, uploadFile } from '@/services/clientService';
import './TestimonialEditorPage.css';
import { useRouter } from 'next/navigation';
import { logout } from '@/services/loginService';
import ImageUpload from '@/components/ImageUpload';
import Image from 'next/image';
import { InternTestimonial } from '@/types/interfaces';

export default function EditorPage() {
  const router = useRouter();
  const [clients, setClients] = useState<InternTestimonial[]>([]);
  const [currentTestIndex, setCurrentTestIndex] = useState(0);
  const [newTestimonial, setNewTestimonial] = useState<InternTestimonial>({
    image: '',
    quote: '',
    name: '',
    title: '',
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const setAuthToken = useState<string | null>(null)[1];

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setAuthToken(token);
  }, [setAuthToken]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  useEffect(() => {
    const loadClients = async () => {
      const response = await fetch('/api/client');
      const data = await response.json();
      setClients(data);
    };
    loadClients();
  }, []);

  const getCurrentClient = () => {
    if (clients.length === 0) {
      return {
        image: '',
        quote: 'No testimonials available.',
        name: '',
        title: '',
      };
    }
    return clients[currentTestIndex];
  };

  const handlePrev = () => {
    if (clients.length > 0) {
      setCurrentTestIndex(
        (prevIndex) => (prevIndex - 1 + clients.length) % clients.length,
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
    if (!clientId) throw new Error('Invalid client ID');

    try {
      const success = await deleteClient(clientId);
      if (success) {
        const updatedClients = await fetch('/api/client');
        const data = await updatedClients.json();
        setClients(data);
        setCurrentTestIndex(Math.max(0, currentTestIndex - 1));
      }
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleAdd = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Make sure you handle the JWT token (can be stored in cookies or context)
    const token = localStorage.getItem('authToken'); // Or use context if needed

    if (!token) return;

    try {
      // Upload file if there is one
      let fileUrl = '';
      if (file) fileUrl = await uploadFile(file);

      const newClient: InternTestimonial = {
        name: newTestimonial.name,
        quote: newTestimonial.quote,
        title: newTestimonial.title,
        image: fileUrl,
      };
      const addedClient = await addClient(newClient);
      if (addedClient) {
        const response = await fetch('/api/client');

        if (!response.ok) throw new Error('Failed to fetch clients');

        const updatedClients = await response.json();
        setClients(updatedClients);
        setCurrentTestIndex(updatedClients.length - 1);

        setNewTestimonial({
          image: '',
          quote: '',
          name: '',
          title: '',
        });

        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
      }

      console.log('Added client:', addedClient);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <AuthGuard>
      <div className='testimonial-editor'>
        <h1>Testimonial Carousel Editor</h1>
        <div className='testimonial-carousel'>
          <div className='testimonial'>
            {getCurrentClient().image && (
              <Image
                src={getCurrentClient().image.toString()}
                alt='Client'
                width={150}
                height={150}
              />
            )}
            <span className='quote'>{getCurrentClient().quote}</span>
            <span className='name'>{getCurrentClient().name}</span>
            <span className='title'>{getCurrentClient().title}</span>
          </div>
          <button id='leftButton' onClick={handlePrev}>
            Left
          </button>
          <button id='rightButton' onClick={handleNext}>
            Right
          </button>
          <button id='deleteButton' onClick={handleDelete}>
            Delete Current Entry
          </button>
        </div>

        <ImageUpload
          ref={fileInputRef}
          onFileSelect={(file) => setFile(file)}
        />
        <textarea
          name='quote'
          value={newTestimonial.quote}
          onChange={handleInputChange}
          placeholder='Quote'
        ></textarea>
        <textarea
          name='name'
          value={newTestimonial.name}
          onChange={handleInputChange}
          placeholder='Name'
        ></textarea>
        <textarea
          name='title'
          value={newTestimonial.title}
          onChange={handleInputChange}
          placeholder='Title'
        ></textarea>
        <div className='buttons'>
          <button id='addButton' onClick={handleAdd}>
            Add Entry
          </button>
          <button id='logoutButton' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </AuthGuard>
  );
}