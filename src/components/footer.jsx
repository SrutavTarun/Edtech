import "./styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="ftop">
        <div className="fleft">
          <div className="flogo">LOGO</div>
          <div className="fltext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,</div>
        </div>
        <div className="fmid">
          <div className="fmhead">Useful Links</div>
          <div className="flist">
            <div className="flist-item">Home</div>
            <div className="flist-item">About</div>
            <div className="flist-item">Services</div>
            <div className="flist-item">Contact</div>
          </div>
        </div>
        <div className="fright">
          <div className="frhead">Follow us</div>
          <div className="flinks">
            <div className="flink-item">Facebook</div>
            <div className="flink-item">Instagram</div>
            <div className="flink-item">Twitter</div>
            <div className="flink-item">Youtube</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="fbottom">
        <div className="fcopyright">Copyright Logo</div>
        <div className="fprivacy">Privacy Policy</div>
        <div className="fterms">Terms and Conditions</div>
      </div>
    </div>
  );
};

export default Footer;
