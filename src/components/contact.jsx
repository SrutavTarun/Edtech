import "./styles/contact.css";

const Contact = () => {
  return (
    <>
      <h2 id="contact">CONTACT US</h2>
      <div className="c-line"></div>
      <div className="contactus">
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Message"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
