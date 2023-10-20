import "./styles/contact.css";

const Contact = () => {
  return (
    <>
      <h2>CONTACT US</h2>
      <div className="c-line"></div>
      <div className="contactus">
        <div className="left">
          <div className="top">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bottom">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, sapien vel lacinia bibendum,
            </p>
          </div>
        </div>
        <div className="right">
          <form>
            <div className="name-email">
              <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Name" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Email"/>
              </div>
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
      </div>
    </>
  );
};

export default Contact;
