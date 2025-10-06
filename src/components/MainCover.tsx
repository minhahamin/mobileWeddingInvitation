import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './MainCover.css';

const MainCover = () => {
  return (
    <motion.section 
      className="main-cover section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="cover-content">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="cover-date">2025년 12월 25일</p>
        </motion.div>

        <motion.div
          className="heart-icon"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          <FaHeart />
        </motion.div>

        <motion.div
          className="names"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h1 className="groom-name">신랑 이름</h1>
          <span className="and">&</span>
          <h1 className="bride-name">신부 이름</h1>
        </motion.div>

        <motion.p
          className="invitation-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          저희 두 사람이 사랑으로 하나 되는 날<br />
          오셔서 축복해 주시면 감사하겠습니다
        </motion.p>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MainCover;

