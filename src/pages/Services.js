import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Services.css';

import energieImg from '../media/services/energie.jpg';
import ictImg from '../media/services/ict.jpg';
import outsourcingImg from '../media/services/outsourcing.jpg';
import securiteImg from '../media/services/cybersecurite.jpg';
import digitalisationImg from '../media/services/digitalisation.jpg';
import accademyImg from '../media/services/accademy.jpg';
import slider1 from '../media/slider/slider1.jpg';
import slider2 from '../media/slider/slider2.jpg';
import slider3 from '../media/slider/slider3.jpg';

AOS.init();

// Liste des services
const services = [
  { name: 'Énergie Renouvelable', image: energieImg, link: 'https://www.azureenregy.ma' },
  { name: 'ICT', image: ictImg, link: '/services/ICT' },
  { name: 'OUTSOURCING', image: outsourcingImg, link: '/services/outsourcing' },
  { name: 'CYBERSÉCURITÉ PHYSIQUE', image: securiteImg, link: '/services/SecurityPhysique' },
  { name: 'DIGITALISATION', image: digitalisationImg, link: '/services/Digitalisation' },
  { name: 'ACADEMY', image: accademyImg, link: '/services/Academy' },
];

// Liste des images du slider principal
const sliderImages = [
  { image: slider1, link: 'slider/slider1' },
  { image: slider2, link: 'slider/slider2' },
  { image: slider3, link: 'slider/slider3' },
];

function NosServicesSection() {
  return (
    <section className="nos-services-section" data-aos="fade-up">
      {/* Slider principal */}
      <div className="top-slider">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          modules={[Autoplay, Pagination]}
          className="services-swiper"
        >
          {sliderImages.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Link to={slide.link}>
                <img src={slide.image} alt={`Slide ${idx + 1}`} className="slider-hero-img" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Section des services */}
      <div className="services-frame">
        <h2>Nos Services</h2>
        <p className="services-description">
          Chez AzureGroup, nous offrons une gamme complète de services couvrant l’énergie renouvelable,
          les technologies de l’information, la cybersécurité, et plus encore. Notre objectif est
          d’apporter des solutions innovantes et durables à nos clients dans tous les secteurs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => {
            const isExternal = service.link.startsWith('http');
            const CardContent = (
              <>
                <img src={service.image} alt={service.name} />
                <div className="service-name">{service.name}</div>
              </>
            );

            return isExternal ? (
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="service-card"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                {CardContent}
              </a>
            ) : (
              <Link
                to={service.link}
                key={index}
                className="service-card"
                data-aos="zoom-in"
                data-aos-delay={`${index * 100}`}
              >
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NosServicesSection;
