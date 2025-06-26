import React from 'react';
import './SecurityPhysique.css';
import securite from '../../media/services/Securite.jpg';
import access from '../../media/services/access.png';
import surveillance from '../../media/services/surveillance.png';
import perimetersecurity from '../../media/services/perimetersecurity.png';
import intercom from '../../media/services/intercom.png';
import intrusiondetection from '../../media/services/intrusiondetection.png';
import integratedplatform from '../../media/services/integratedplatform.png';

const SecurityPhysique = () => {
  return (
    <div className="security-physique-container">
      <section className="hero-image-section">
        <img
          src={securite}
          alt="Solutions Avancées de Sécurité Physique"
          className="hero-image"
        />
      </section>

      <section className="hero-content-section">
        <h1>Solutions Avancées de Sécurité Physique</h1>
        <p>
          Protégez vos actifs les plus précieux avec nos solutions de sécurité physique de pointe.
          Nous offrons une gamme complète de services pour assurer la sûreté et la tranquillité d'esprit.
        </p>
      </section>

      <section className="key-solutions-section">
        <h2>Nos Solutions Clés</h2>
        <div className="solution-grid">
          <div className="solution-item">
            <div className="solution-image-wrapper">
              <img src={access} alt="Contrôle d'Accès" />
            </div>
            <div className="solution-content">
              <h3>Contrôle d'Accès</h3>
              <p>Systèmes de gestion d'accès robustes pour sécuriser vos locaux et contrôler les flux de personnes.</p>
            </div>
          </div>

          <div className="solution-item">
            <div className="solution-image-wrapper">
              <img src={surveillance} alt="Vidéosurveillance" />
            </div>
            <div className="solution-content">
              <h3>Vidéosurveillance</h3>
              <p>Solutions de vidéosurveillance avancées avec analyse intelligente pour une surveillance continue.</p>
            </div>
          </div>

          <div className="solution-item">
            <div className="solution-image-wrapper">
              <img src={intrusiondetection} alt="Détection d'Intrusion" />
            </div>
            <div className="solution-content">
              <h3>Détection d'Intrusion</h3>
              <p>Systèmes de détection d'intrusion fiables pour protéger contre les accès non autorisés.</p>
            </div>
          </div>

          <div className="solution-item">
            <div className="solution-image-wrapper">
              <img src={intercom} alt="Interphonie et Visiophonie" />
            </div>
            <div className="solution-content">
              <h3>Interphonie et Visiophonie</h3>
              <p>Solutions de communication intégrées pour une gestion efficace des visiteurs et de la sécurité.</p>
            </div>
          </div>

          <div className="solution-item">
            <div className="solution-image-wrapper">
              <img src={perimetersecurity} alt="Sécurité Périmétrique" />
            </div>
            <div className="solution-content">
              <h3>Sécurité Périmétrique</h3>
              <p>Protection des frontières de votre propriété avec des technologies de sécurité périmétrique de pointe.</p>
            </div>
          </div>

          <div className="solution-item">
            <div className="solution-image-wrapper">
              <img src={integratedplatform} alt="Plateformes de Sécurité Intégrées" />
            </div>
            <div className="solution-content">
              <h3>Plateformes de Sécurité Intégrées</h3>
              <p>Centralisez et gérez tous vos systèmes de sécurité à partir d'une plateforme unique et intuitive.</p>
            </div>
          </div>
        </div>

        <div className="contact-button-section">
          <button onClick={() => window.location.href = '/contact'}>
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
};

export default SecurityPhysique;
