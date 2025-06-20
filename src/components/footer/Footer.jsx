import "./Footer.css";
import AbedLogoInverse from "/MyLogoInverse.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-sections">
        <img
          src={AbedLogoInverse}
          alt="Abed Logo Inverse"
          id="abed-logo-inverse"
        />
        <p id="copyright-text">Copyright {year} ABED, All Rights Reserved</p>
      </div>
      <div className="footer-sections">
        <p id="binary">
          01000001 01100010 01100100 01100001 01101100 01101100 01100001
          01101000 00100000 01000001 01101100 01110010 01100001 01111001
          01111001 01100101 01110011
        </p>
      </div>
    </footer>
  );
};

export default Footer;
