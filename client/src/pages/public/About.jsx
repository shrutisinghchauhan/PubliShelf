import { FaUserCircle, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-section animate-fade-in">
        <div className="h-10"></div>
        <div className="about-container">
          <div className="about-header">
            <h1 className="about-title">About Us</h1>
            <p className="about-subtitle">
              Discover the story behind PubliShelf and our mission to connect readers and authors worldwide.
            </p>
          </div>
          <div className="about-content">
            <div className="about-card">
              <h2 className="about-card-title">Our Mission</h2>
              <p className="about-card-text">
                At PubliShelf, we believe in the power of books to transform lives. Our mission is to create a
                vibrant marketplace where readers can discover new books and authors can reach a global audience.
              </p>
              <p className="about-card-text">
                We are committed to providing a seamless experience for both buyers and sellers, ensuring that every transaction is smooth and enjoyable.
              </p>
            </div>
            <div className="about-card">
              <h2 className="about-card-title">Our Team</h2>
              <p className="about-card-text">
                PubliShelf is built with passion by a dedicated developer who loves books and technology.
              </p>
            </div>
          </div>

          <div className="team-section">
            <h2 className="team-title">Meet the Developer</h2>
            <div className="flex justify-center">
              <div className="team-card" style={{ maxWidth: "320px" }}>
                <FaUserCircle className="team-member-img mx-auto scale-75" size={50} />
                <h3 className="team-member-name">Shruti Chauhan</h3>
                <p className="team-member-role">Full Stack Developer</p>
                <p className="team-member-desc">IIITM Gwalior</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/shruti-chauhan-b794bb258/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-800 transition-colors">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/_shrutiiiiii_0_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-700 transition-colors">
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
