import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { FaCalendarAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import './Activities.css';
import { activities } from "../../data/activities";

const ActivityCard = ({ image, date, title, description, onFlip }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const swiperRef = useRef(null);

  const images = Array.isArray(image) ? image : [image];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    onFlip(!isFlipped);
  };

  return (
    <div className={`activity-card ${isFlipped ? 'is-flipped' : ''}`}>
      {!isFlipped && (
      <div className="date-ribbon">
        <FaCalendarAlt className="date-icon" />
        <span>{date}</span>
      </div>
      )}
      <div className="card-inner">
        <div className="card-front">
          <div className="activity-image-container">
            {images.length > 1 ? (
              <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img src={img} alt={title} className="activity-image" />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img src={images[0]} alt={title} className="activity-image single-image" />
            )}
          </div>

          <div className="activity-content">
            <h3 className="activity-title">{title}</h3>
            <p className="activity-description">
              {description ? `${description.substring(0, 100)}...` : ''}
            </p>
            <button onClick={handleFlip} className="read-more-btnn">Read More</button>
          </div>
        </div>

        <div className="card-back">
          <div className="activity-content">
            <p className="activity-description">{description}</p>
            <button onClick={handleFlip} className="read-more-btnn">Back to Front</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  const [isAnyCardFlipped, setIsAnyCardFlipped] = useState(false);
  const mainSwiperRef = useRef(null);

  const handleCardFlip = (isFlipped) => {
    setIsAnyCardFlipped(isFlipped);
    if (mainSwiperRef.current && mainSwiperRef.current.swiper) {
      if (isFlipped) {
        mainSwiperRef.current.swiper.autoplay.stop();
      } else {
        mainSwiperRef.current.swiper.autoplay.start();
      }
    }
  };

  return (
    <section className="activities-section" id="activities">
      <div className="activities-container">
        <h2 className="activities-title">Activities</h2>
        <Swiper
          ref={mainSwiperRef}
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={false}
          initialSlide={0}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="activities-slider"
        >
          {activities.map((activity, index) => (
            <SwiperSlide key={index}>
              <ActivityCard {...activity} onFlip={handleCardFlip} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Activities;
