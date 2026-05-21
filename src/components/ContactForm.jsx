import { useState } from "react";

function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    try {
      await fetch("https://whitebricks.com/tsacademy.php", {
        method: "POST",
        body: formData,
      });

      setMessage("Form submitted successfully!");
      form.reset();
    } catch (error) {
      setMessage("Something went wrong.");
    }
  };

  return (
    <section className="contact-section" id="contact-section">
      <h2>Have Questions About Planetary Science?</h2>
      <p>Interested in learning more about space,astronomy or how planetary data is collected and analyzed?<br />
      Reach out and we will get back to you.</p>

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

  <button type="submit">Submit &nbsp;&nbsp;&gt;</button>

</form>

      {message && <p className="success-message">{message}</p>}
    </section>
  );
}

export default ContactForm;