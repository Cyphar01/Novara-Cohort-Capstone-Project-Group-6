import { useState } from "react";
import { submitContactForm } from "../services/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitContactForm(formData);

      setSubmitted(true);

      setFormData({
        firstName: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Have Questions About Planetary Science?</h2>

      <p>
        If you have questions about space, technology, or planetary data,
        reach out and we’ll get back to you.
      </p>

      {submitted ? (
        <div className="success-message">
          <h3>Message Sent Successfully 🚀</h3>
          <p>Thanks for contacting us.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              First Name <span className="red-star">*</span>
            </label>

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Email <span className="red-star">*</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@domain.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Phone Number <span className="red-star">*</span>
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Message <span className="red-star">*</span>
            </label>

            <textarea
              name="message"
              placeholder="Write message..."
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit →</button>
        </form>
      )}
    </section>
  );
}