import { socialMedias } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <button>
          <div className="cta-button group">
            <div className="bg-circle" />
            <p className="text">Scroll to Top</p>
            <div className="arrow-wrapper">
              <img src="/images/arrow-up.png" alt="arrow-up" />
            </div>
          </div>
        </button>
        <div className="socials">
          {socialMedias.map((socialMedia, index) => (
            <a
              className="icon"
              href={socialMedia.link}
              target="_blank"
              key={socialMedia.link}
            >
              <img src={socialMedia.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Lucious Johnny Cheng. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
