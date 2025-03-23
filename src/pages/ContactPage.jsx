import "../css/contact.css";

export const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    const formEntries = formData.entries();
    const formValues = Object.fromEntries(formEntries);

    console.log(formValues);
  };

  return (
    <div className="contact-page">
      <div className="container">
        
        <div className="form-container">
          <h3>Get in Touch with Us</h3>
          <form action={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                autoComplete="off"
                rows={10}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
