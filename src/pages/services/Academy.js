import React, { useEffect } from 'react';
import './Academy.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  FaBolt, FaLaptopCode, FaProjectDiagram,
  FaUsersCog, FaShieldAlt, FaCertificate
} from 'react-icons/fa';

import academyImg from '../../media/services/accademy.jpg';

function Academy() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const formations = [
    {
      icon: <FaBolt />,
      title: 'Transition énergétique',
      desc: "Formations adaptées pour piloter la transition énergétique durable.",
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <FaLaptopCode />,
      title: 'Transformation digitale',
      desc: "Maîtriser les outils numériques pour accompagner la digitalisation.",
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Management de projet',
      desc: "Acquérir les compétences pour gérer efficacement vos projets.",
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <FaUsersCog />,
      title: 'Management 3.0',
      desc: "Adopter une gestion moderne centrée sur l’humain et l’innovation.",
      img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80'
    },
    {
      icon: <FaProjectDiagram />,
      title: 'Scaled Agile Framework (SAFe)',
      desc: "Déployer des méthodes agiles à grande échelle.",
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80' // Nouvelle image
    },
    {
      icon: <FaShieldAlt />,
      title: 'Cybersécurité',
      desc: "Sécuriser vos systèmes face aux menaces actuelles.",
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80'
    }
  ];

  const certifications = [
    { title: 'ISO 9001', desc: 'Management de la qualité', icon: <FaCertificate /> },
    { title: 'ISO 27001', desc: "Sécurité de l'information", icon: <FaCertificate /> },
    { title: 'ISO 50001', desc: "Management de l’énergie", icon: <FaCertificate /> },
    { title: 'ISO 21001', desc: "Management des organismes de formation", icon: <FaCertificate /> },
  ];

  return (
    <div className="academy-container">
      <header className="academy-header" data-aos="fade-up">
        <img src={academyImg} alt="Azure Academy" className="academy-banner" />
        <h1>Azure Academy - Formations sur mesure</h1>
        <p className="academy-intro">
          Chez Azure Group, nous proposons des formations personnalisées adaptées aux besoins spécifiques de votre organisation dans des domaines clés.
        </p>
      </header>

      <main className="academy-main">
        <section className="academy-section" data-aos="fade-up">
          <h2>Formations clés</h2>
          <p className="section-desc">
            Découvrez nos formations adaptées pour renforcer les compétences techniques et managériales de vos équipes.
          </p>

          <div className="cards-grid">
            {formations.map((formation, index) => (
              <article key={index} className="card" tabIndex="0">
                <div className="card-icon">{formation.icon}</div>
                <h3>{formation.title}</h3>
                <p>{formation.desc}</p>
                <img src={formation.img} alt={formation.title} className="card-image" />
              </article>
            ))}
          </div>
        </section>

        <section className="academy-section iso-section" data-aos="fade-up">
          <h2>Certifications ISO</h2>
          <p className="section-desc">
            Nous accompagnons votre organisation vers les standards internationaux reconnus pour la qualité, la sécurité, et l'efficacité énergétique.
          </p>

          <div className="cards-grid iso-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="card iso-card">
                <div className="card-icon iso-icon">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p>{cert.desc}</p>
              </div>
            ))}
          </div>

          <div className="iso-details">
            <ul>
              <li>Préparation à la certification</li>
              <li>Audit interne et accompagnement</li>
              <li>Formation des équipes sur les normes</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="academy-footer">
        <button className="contact-button">Contactez-nous</button>
      </footer>
    </div>
  );
}

export default Academy;
