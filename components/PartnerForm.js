"use client";
import { useState, useRef } from "react";
import { Form, Button, Col, Alert } from "react-bootstrap";
import { sendEmail } from "../services/emailService";
import "./PartnerForm.css";

const PartnerForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    try {
      await sendEmail(data); // Call the service function
      setStatus({
        show: true,
        message:
          "Thank you for your partnership request! We will contact you soon.",
        type: "success",
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        show: true,
        message: "Something went wrong. Please try again later.",
        type: "danger",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="partner-form-container text-white p-2 m-auto">
      <Col className="mb-4">
        <h2 className="text-center mt-4">PARTNERSHIP REQUEST</h2>

        {status.show && (
          <Alert
            variant={status.type}
            onClose={() => setStatus({ ...status, show: false })}
            dismissible
            className="mx-auto"
            style={{ maxWidth: "600px" }}
          >
            {status.message}
          </Alert>
        )}

        <Form
          ref={form}
          onSubmit={handleSubmit}
          className="infoform mx-auto justify-content-center"
          style={{ maxWidth: "600px" }}
        >
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Name"
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mt-3">
            <Form.Control
              type="tel"
              name="user_phone"
              placeholder="Phone"
              required
            />
          </Form.Group>

          <Form.Group controlId="formOrganization" className="mt-3">
            <Form.Control
              type="text"
              name="organization"
              placeholder="Organization"
              required
            />
          </Form.Group>

          <Form.Group controlId="formServicesNeeded" className="mt-3">
            <Form.Control
              type="text"
              name="services_needed"
              placeholder="Services needed"
              required
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mt-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={5}
              placeholder="Enter your message"
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              variant="light"
              type="submit"
              className="mt-4 submit-button"
              style={{
                backgroundColor: "#FFD700",
                borderColor: "#FFD700",
                color: "#000",
              }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Col>
    </div>
  );
};

export default PartnerForm;