import "./styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-top">
          <h2>Contact Me</h2>

          <p>
            Let's connect and build something amazing together.
          </p>
        </div>

        <form className="contact-form">

          <div className="input-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="input-group">
            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}