import { motion } from 'framer-motion';
import { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // 샘플 placeholder 이미지 (public/images 폴더에 본인의 이미지를 넣으세요)
  // 이미지 파일명: photo1.jpg, photo2.jpg, photo3.jpg, photo4.jpg, photo5.jpg, photo6.jpg
  const images = [
    '/images/photo1.jpg',
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
    '/images/photo5.jpg',
    '/images/photo6.jpg'
  ];

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true }
  };

  return (
    <section className="gallery section">
      <motion.h2 className="section-title" {...fadeInUp} transition={{ duration: 0.6 }}>
        우리의 순간들
      </motion.h2>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            {...fadeInUp}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            onClick={() => setSelectedImage(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={image} alt={`Wedding photo ${index + 1}`} />
            <div className="gallery-overlay">
              <span>+</span>
            </div>
          </motion.div>
        ))}
      </div>

     

      {selectedImage !== null && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={images[selectedImage]}
            alt="Selected"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;

