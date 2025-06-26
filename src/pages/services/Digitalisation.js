import React, { useEffect } from 'react';
import './Digitalisation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import digitalisationImg from '../../media/services/digitalisation.jpg';

function Digitalisation() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="digitalisation-container">
      <header className="digitalisation-header" data-aos="fade-down">
        <img src={digitalisationImg} alt="Digitalisation" className="digitalisation-banner" />
        <h1>Transformation Digitale chez Azure Group</h1>
        <p className="subtitle">
          Innover, optimiser, transformer pour une performance durable
        </p>
      </header>

      <section className="digital-section" data-aos="fade-up">
        <h2>🎯 Notre Mission</h2>
        <p>
          Nous accompagnons les entreprises et institutions dans leur transformation digitale globale, avec une approche agile centrée sur l’impact métier.
        </p>
      </section>

      <section className="digital-section two-columns" data-aos="fade-up">
        <div className="column">
          <h3>🔍 Audit & Cartographie</h3>
          <p>
            Diagnostic approfondi des systèmes d’information et cartographie des processus métiers pour révéler les opportunités d’optimisation et d’innovation.
          </p>
        </div>
        <div className="column">
          <h3>🚀 Stratégies Digitales Personnalisées</h3>
          <p>
            Co-construction de feuilles de route digitales alignées sur vos objectifs pour maximiser l’impact de la transformation.
          </p>
        </div>
      </section>

      <section className="digital-section two-columns" data-aos="fade-up">
        <div className="column">
          <h3>☁️ Plateformes Intelligentes & Cloud</h3>
          <p>
            Intégration de technologies avancées : Cloud, IoT, IA, systèmes d’automatisation, pour moderniser vos infrastructures.
          </p>
        </div>
        <div className="column">
          <h3>👥 Digitalisation des Parcours Utilisateurs</h3>
          <p>
            Optimisation de l’expérience client, collaboration employé et partenaire grâce à la digitalisation fluide des parcours.
          </p>
        </div>
      </section>

      <section className="digital-section two-columns" data-aos="fade-up">
        <div className="column">
          <h3>📚 Accompagnement au Changement</h3>
          <p>
            Formation, coaching et montée en compétences de vos équipes pour assurer l’adoption des nouveaux outils.
          </p>
        </div>
        <div className="column">
          <h3>🛠️ Nouveauté : Industrie 5.0 & Décarbonation</h3>
          <p>
            Transformation digitale des secteurs industriels avec dashboards intelligents, pilotage énergétique et outils de décarbonation.
          </p>
        </div>
      </section>

      <section className="digital-cta" data-aos="fade-up">
        <h2>🤝 Prêts à transformer votre entreprise ?</h2>
        <a href="/contact" className="contact-button">Contactez-nous</a>
      </section>
    </div>
  );
}

export default Digitalisation;