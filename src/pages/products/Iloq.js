import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Iloq.css';

import residentialImg from '../../media/produits/residential-buildings.jpg';
import commercialImg from '../../media/produits/commercial-buildings.jpg';
import criticalImg from '../../media/produits/critical-infrastructure.jpg';
import healthcareImg from '../../media/produits/healthcare.jpg';
import educationImg from '../../media/produits/education.jpg';
import logisticsImg from '../../media/produits/logistics-storage.jpg';
import s50Img from '../../media/produits/s50.png';
import iloqVideo from '../../media/produits/iLOQ_5.mp4';

const IloqUseCases = () => {
  const useCases = [
    { title: 'Bâtiments Résidentiels', image: residentialImg },
    { title: 'Bâtiments Commerciaux', image: commercialImg },
    { title: 'Infrastructures Critiques', image: criticalImg },
    { title: 'Hôpitaux et Soins de Santé', image: healthcareImg },
    { title: 'Éducation', image: educationImg },
    { title: 'Logistique et Stockage', image: logisticsImg },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideProps = useSpring({
    opacity: 1,
    transform: 'translateX(0%)',
    from: { opacity: 0, transform: direction === 1 ? 'translateX(100%)' : 'translateX(-100%)' },
    reset: true,
    config: { tension: 200, friction: 20 },
    key: currentSlide,
  });

  return (
    <section className="iloq-use-cases">
      <h2>Où utiliser iLOQ ?</h2>
      <div className="slider-container">
        <button className="slider-button prev" onClick={prevSlide}>&#10094;</button>
        <div className="use-case-slider">
          <animated.div
            key={currentSlide}
            style={slideProps}
            className="use-case-card-wrapper"
          >
            <div className="use-case-card">
              <img
                src={useCases[currentSlide].image}
                alt={useCases[currentSlide].title}
                className="use-case-image"
              />
              <h3>{useCases[currentSlide].title}</h3>
            </div>
          </animated.div>
        </div>
        <button className="slider-button next" onClick={nextSlide}>&#10095;</button>
      </div>
      <div className="slider-pagination">
        {useCases.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentSlide === idx ? 'active' : ''}`}
            onClick={() => {
              setDirection(idx > currentSlide ? 1 : -1);
              setCurrentSlide(idx);
            }}
          ></span>
        ))}
      </div>
    </section>
  );
};

function Iloq() {
  const heroAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="iloq-page">
      <section className="iloq-hero animated-hero">
        <video autoPlay loop muted className="hero-video-background">
          <source src={iloqVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <animated.div style={heroAnimation} className="hero-content">
          <h1>Solutions de verrouillage intelligent sans pile</h1>
          <p>
            La gamme révolutionnaire de systèmes de verrouillage intelligents d’iLOQ permet un accès sécurisé, pratique
            et flexible avec des coûts de cycle de vie, une gestion et un impact sur l’environnement aussi bas que
            possible.
          </p>
        </animated.div>
      </section>

      <IloqUseCases />

      <section className="iloq-s50-section">
        <h2>iLOQ S50 : La solution de verrouillage mobile</h2>
        <div className="s50-content">
          <div className="s50-description">
            <p>
              Le système de verrouillage mobile iLOQ S50 est une solution révolutionnaire conçue pour les infrastructures
              critiques et les environnements exigeants. Il offre un accès sécurisé et une gestion simplifiée sans
              nécessiter de piles pour les serrures.
            </p>
            <p>
              Alimenté par la technologie NFC (Near Field Communication), le cylindre de fermeture électronique
              programmable de l'iLOQ S50 s'ouvre avec les téléphones mobiles Android et iOS compatibles NFC, ou avec le
              key-fob iLOQ K55S. Cela élimine le besoin de clés physiques et de batteries, réduisant ainsi les coûts de
              maintenance et l'impact environnemental.
            </p>
            <h3>Caractéristiques principales de l'iLOQ S50:</h3>
            <ul>
              <li>Cylindre de fermeture électronique programmable sans pile.</li>
              <li>Alimenté par NFC : aucune pile n’est nécessaire pour la serrure.</li>
              <li>Ouverture avec les téléphones mobiles Android et iOS compatibles NFC.</li>
              <li>Compatible avec le key-fob iLOQ K55S.</li>
              <li>Idéal pour les infrastructures critiques et les environnements exigeants.</li>
              <li>Réduit les coûts de cycle de vie et l'impact environnemental.</li>
            </ul>
          </div>
          <div className="s50-image">
            <img src={s50Img} alt="iLOQ S50 Product" />
          </div>
        </div>
      </section>

      <div className="contactez-nous-section" style={{ textAlign: 'center', margin: '40px 0' }}>
        <button
          className="contactez-nous-button"
          style={{
            padding: '12px 30px',
            fontSize: '1.1rem',
            backgroundColor: '#003366',
            color: '#fff',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer'
          }}
          onClick={() => window.location.href = '/contact'}
        >
          Contactez-nous
        </button>
      </div>
    </div>
  );
}

export default Iloq;
