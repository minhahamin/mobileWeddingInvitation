import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <motion.footer className="footer" {...fadeInUp}>
      <div className="footer-content">
        <div className="footer-message">
          <FaHeart className="footer-heart" />
          <p className="thank-you">
            참석해 주셔서 감사합니다
          </p>
          <p className="couple-names">
            신랑 홍길동 & 신부 김영희
          </p>
        </div>
        
        <div className="footer-divider"></div>
        
        <p className="copyright">
          © 2025 Wedding Invitation
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;

