import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './EventInfo.css';

const EventInfo = () => {
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="event-info section">
      <motion.h2 className="section-title" {...fadeInUp}>
        예식 안내
      </motion.h2>

      <div className="info-container">
        <motion.div 
          className="info-card"
          {...fadeInUp}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="info-icon">
            <FaCalendarAlt />
          </div>
          <h3>날짜</h3>
          <p className="info-detail">2025년 12월 25일 목요일</p>
        </motion.div>

        <motion.div 
          className="info-card"
          {...fadeInUp}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="info-icon">
            <FaClock />
          </div>
          <h3>시간</h3>
          <p className="info-detail">오후 2시 30분</p>
        </motion.div>

        <motion.div 
          className="info-card"
          {...fadeInUp}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="info-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>장소</h3>
          <p className="info-detail">○○웨딩홀</p>
          <p className="info-address">서울시 강남구 테헤란로 123</p>
          <p className="info-floor">3층 그랜드홀</p>
        </motion.div>
      </div>

      <motion.div 
        className="calendar-widget"
        {...fadeInUp}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="calendar-header">
          <h4>December 2025</h4>
        </div>
        <div className="calendar-grid">
          <div className="calendar-day">Sun</div>
          <div className="calendar-day">Mon</div>
          <div className="calendar-day">Tue</div>
          <div className="calendar-day">Wed</div>
          <div className="calendar-day">Thu</div>
          <div className="calendar-day">Fri</div>
          <div className="calendar-day">Sat</div>
          
          {/* 2025년 12월 1일이 월요일이므로 일요일 칸은 비워둠 */}
          <div className="calendar-date empty"></div>
          
          {/* 1일부터 31일까지 */}
          {[...Array(31)].map((_, i) => (
            <div 
              key={i} 
              className={`calendar-date ${i + 1 === 25 ? 'wedding-day' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventInfo;

