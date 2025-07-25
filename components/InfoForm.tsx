'use client';
import { useState, useRef, FormEvent } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { sendEmail } from '../services/emailService';
import './InfoForm.css';
import { InfoFormStatus, EmailFormFields } from '@/types/interfaces';

const InfoForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<InfoFormStatus>({
    show: false,
    message: '',
    type: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!form.current) return;

    const formData = new FormData(form.current);
    const data: EmailFormFields = {
      user_name: formData.get('user_name') as string,
      user_email: formData.get('user_email') as string,
      message: formData.get('message') as string,
    };

    try {
      await sendEmail(data);
      setStatus({
        show: true,
        message: 'Thank you! We will contact you as soon as possible.',
        type: 'success',
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        show: true,
        message: 'Something went wrong. Please try again later.',
        type: 'danger',
      });
      console.log('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="infoform-container text-white">
      <Card className="contact-form-card">
        <Card.Body className="p-md-5">
          <h2 className="contact-heading mb-3 text-yellow">Questions?</h2>
          {status.show && (
            <Alert
              variant={status.type}
              onClose={() => setStatus({ ...status, show: false })}
              dismissible
              className="mx-auto"
              style={{ maxWidth: '600px' }}
            >
              {status.message}
            </Alert>
          )}

          <Form
            ref={form}
            className="infoform mx-auto justify-content-center"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3 mt-2">
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Enter Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-2" controlId="formEmail">
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Enter Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                rows={3}
                placeholder="How can we help you?"
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button
                variant="light"
                type="submit"
                className="mt-4 submit-button"
                style={{
                  backgroundColor: '#FFD700',
                  borderColor: '#FFD700',
                  color: '#000',
                }}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoForm;