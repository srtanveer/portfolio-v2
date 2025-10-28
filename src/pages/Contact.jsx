import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Check form validity
    const form = e.target.form;
    setIsValid(form.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // You can integrate with EmailJS or any email service here
    alert(`Thank you ${formData.fullname}! Your message has been received. We'll get back to you at ${formData.email} soon.`);
    
    // Reset form
    setFormData({
      fullname: '',
      email: '',
      message: '',
    });
    setIsValid(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact - MD. Showaib Rahman Tanveer</title>
        <meta name="description" content="Get in touch with MD. Showaib Rahman Tanveer for collaborations, projects, or inquiries" />
        <meta name="keywords" content="Contact, Get in Touch, Hire, Collaboration, SRTANVEER Contact" />
        <link rel="canonical" href="https://srtanveer.dev/contact" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srtanveer.dev/contact" />
        <meta property="og:title" content="Contact - MD. Showaib Rahman Tanveer" />
        <meta property="og:description" content="Get in touch with MD. Showaib Rahman Tanveer for collaborations, projects, or inquiries" />
        <meta property="og:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srtanveer.dev/contact" />
        <meta property="twitter:title" content="Contact - MD. Showaib Rahman Tanveer" />
        <meta property="twitter:description" content="Get in touch with MD. Showaib Rahman Tanveer for collaborations, projects, or inquiries" />
        <meta property="twitter:image" content="https://srtanveer.dev/assets/images/og-image.jpg" />
      </Helmet>

      <article className="contact active" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>

        <section className="contact-info-section"></section>

        <section className="mapbox" data-mapbox>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8943.336684414255!2d90.4568556292309!3d23.69568422861136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1761494877546!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>

          <form className="form" data-form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
                data-form-input
                value={formData.fullname}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                data-form-input
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              data-form-input
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button
              className="form-btn"
              type="submit"
              disabled={!isValid}
              data-form-btn
            >
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
}

export default Contact;
