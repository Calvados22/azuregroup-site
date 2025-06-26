import React, { useEffect } from 'react';
import './Outsourcing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Remplace par le chemin réel de ton image outsourcing
import outsourcingImg from '../../media/services/outsourcing.jpg';

import { FaBolt, FaLaptopCode, FaProjectDiagram, FaUsersCog, FaNetworkWired, FaPhoneAlt, FaShieldAlt, FaServer } from 'react-icons/fa';

function Outsourcing() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Transition énergétique",
      description: "Externalisez la gestion et le pilotage de vos projets de transition énergétique. Nous mettons en place des solutions innovantes pour optimiser votre consommation, intégrer les énergies renouvelables et réduire votre empreinte carbone grâce à des outils digitaux avancés.",
      icon: <FaBolt />
    },
    {
      title: "Transformation digitale",
      description: "Confiez-nous la prise en charge de votre transformation numérique. De l’audit à la mise en œuvre de solutions cloud, IoT, automatisation et intelligence artificielle, nous assurons un déploiement agile et sécurisé, aligné sur vos objectifs métier.",
      icon: <FaLaptopCode />
    },
    {
      title: "Management de projet",
      description: "Bénéficiez d’un pilotage professionnel et efficace de vos projets grâce à notre expertise en gestion de projet traditionnelle et agile, garantissant respect des délais, qualité et maîtrise des coûts.",
      icon: <FaProjectDiagram />
    },
    {
      title: "Management 3.0",
      description: "Nous intégrons les principes du Management 3.0 pour favoriser l’autonomie, la collaboration et l’innovation au sein de vos équipes, renforçant ainsi leur engagement et leur performance.",
      icon: <FaUsersCog />
    },
    {
      title: "Scaled Agile Framework (SAFe)",
      description: "Pour les organisations complexes, nous proposons un accompagnement en déploiement du framework SAFe, facilitant la coordination agile à grande échelle et l’alignement stratégique.",
      icon: <FaProjectDiagram />
    },
    {
      title: "Télécom",
      description: "Externalisez la gestion de vos infrastructures télécoms, avec un focus sur la performance, la sécurité et la continuité des communications.",
      icon: <FaPhoneAlt />
    },
    {
      title: "Cybersécurité",
      description: "Protégez vos actifs numériques grâce à notre service d’outsourcing en cybersécurité, incluant audits, surveillance, gestion des risques et réponse aux incidents.",
      icon: <FaShieldAlt />
    },
    {
      title: "Systèmes et Réseaux",
      description: "Confiez-nous l’administration, la maintenance et l’optimisation de vos systèmes informatiques et réseaux pour garantir disponibilité, performance et évolutivité.",
      icon: <FaServer />
    },
  ];

  return (
    <div className="outsourcing-container">
      <header className="outsourcing-header" data-aos="fade-down">
        <img src={outsourcingImg} alt="Outsourcing Azure Group" className="outsourcing-banner" />
        <h1>Outsourcing Azure Group</h1>
        <p className="subtitle">
          Azure Group propose des ressources en freelance via des contrats cadre mensuel ou journalier en mode outsourcing complet et sur mesure, destiné à accompagner les entreprises dans leurs projets stratégiques et opérationnels, avec une expertise pointue dans plusieurs domaines clés :
        </p>
      </header>

      <section className="outsourcing-cards" data-aos="fade-up">
        {services.map((service, index) => (
          <article
            className="outsourcing-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon-wrapper">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className="outsourcing-cta" data-aos="fade-up" data-aos-delay="900">
        <a href="/contact" className="contact-button">Contactez-nous</a>
      </section>
    </div>
  );
}

export default Outsourcing;
