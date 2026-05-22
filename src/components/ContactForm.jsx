import { useState } from "react";
import { submitContactForm } from "../services/api";

function ContactForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await submitContactForm(data);

      setLoading(false);
      setMessage("Message sent successfully!");
      setShowMessage(true);

      form.reset();
    } catch (error) {
      setLoading(false);
      setMessage("Something went wrong. Please try again.");
      setShowMessage(true);
    }

    setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 5000);
  };

  return (
    <section className="contact-section" id="contact-section">
      <h2>Have Questions About Planetary Science?</h2>

      <p>
        Interested in learning more about space, astronomy or how planetary
        data is collected and analyzed?
        <br />
        Reach out and we will get back to you.
      </p>

      {/* LOADING STATE */}
      {loading ? (
        <div className="success-message loading-box">
          <div className="loader"></div>
          <p>Sending message...</p>
        </div>
      ) : showMessage ? (
        /* SUCCESS OR ERROR MESSAGE */
        <div className="success-message">
          <p>{message}</p>
        </div>
      ) : (
        /* FORM */
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="fullname">
              Full Name<span className="red-star">*</span>
            </label>

            <input
              type="text"
              name="fullname"
              placeholder="Full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email<span className="red-star">*</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              Phone Number<span className="red-star">*</span>
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Please enter a valid phone number."
              pattern="[0-9]{11}"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message<span className="red-star">*</span>
            </label>

            <textarea
              name="message"
              placeholder="Enter your message"
              maxLength="100"
              required
            ></textarea>

            <small>100 characters</small>
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
