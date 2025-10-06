import { motion } from 'framer-motion';
import { FaBus, FaSubway, FaCar, FaMapMarkedAlt } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const handleMapClick = () => {
    // 카카오맵 또는 네이버맵으로 연결 (실제 주소로 변경하세요)
    window.open('https://map.kakao.com/', '_blank');
  };

  return (
    <section className="location section">
      <motion.h2 className="section-title" {...fadeInUp}>
        오시는 길
      </motion.h2>

      <motion.div 
        className="map-container"
        {...fadeInUp}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="map-placeholder" onClick={handleMapClick}>
          <FaMapMarkedAlt />
          <p>지도를 클릭하여 자세히 보기</p>
        </div>
      </motion.div>

      <motion.div 
        className="address-info"
        {...fadeInUp}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h3>○○웨딩홀</h3>
        <p>서울시 강남구 테헤란로 123</p>
        <p>3층 그랜드홀</p>
        <p className="tel">Tel. 02-1234-5678</p>
      </motion.div>

      <div className="transport-info">
        <motion.div 
          className="transport-card"
          {...fadeInUp}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="transport-icon subway">
            <FaSubway />
          </div>
          <h4>지하철</h4>
          <p>2호선 강남역 3번 출구</p>
          <p>도보 5분</p>
        </motion.div>

        <motion.div 
          className="transport-card"
          {...fadeInUp}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="transport-icon bus">
            <FaBus />
          </div>
          <h4>버스</h4>
          <p>간선: 146, 147, 148</p>
          <p>지선: 3411, 4419</p>
        </motion.div>

        <motion.div 
          className="transport-card"
          {...fadeInUp}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="transport-icon car">
            <FaCar />
          </div>
          <h4>자가용</h4>
          <p>건물 지하 주차장 이용</p>
          <p>2시간 무료</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;

