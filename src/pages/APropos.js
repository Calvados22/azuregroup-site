// src/pages/APropos.js
import React from 'react';
import './APropos.css';
import img1 from'../media/apropos/img1.jpg';
import img2 from'../media/apropos/img2.jpg';
import img3 from'../media/apropos/img3.jpg';
import img4 from'../media/apropos/img4.jpg';
const APropos = () => {
  return (
    <div className="apropos-container">
      <section className="intro-section">
        <h1>À propos de AzureGroup</h1>
        <div className="intro-frame">
          <p>
            Chez AzureGroup, nous mettons notre expertise et notre engagement au service de la transition énergétique, 
            de l’innovation technologique et du développement des compétences. Découvrez ci-dessous qui nous sommes, 
            nos valeurs, notre équipe, et notre ambition.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="about-image">
          {/* 🖼️ Ajoutez ici l'image ou l'icône pour "Qui sommes-nous ?" */}
          <img src={img1} alt="Qui sommes-nous ?" />
        </div>
        <div className="about-text">
          <h2>1. Qui sommes-nous ?</h2>
          <p>
            AzureGroup est un leader national dans le domaine de la conception, la construction et l’exploitation des systèmes d’énergie solaire.
            Notre entreprise se distingue par son engagement envers l’innovation, la durabilité et l’excellence opérationnelle.
            <br /><br />
            Nous collaborons avec des experts internationaux pour offrir des solutions solaires adaptées aux besoins de nos clients.
            En plus de l’énergie solaire, nous intervenons dans l’IT/TELECOM, la cybersécurité et la digitalisation.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="about-image">
          {/* 🖼️ Ajoutez ici l'image ou l'icône pour "Nos valeurs & vision" */}
          <img src={img3} alt="Notre ambition" />
        </div>
        <div className="about-text">
          <h2>2. Nos valeurs & vision</h2>
          <p>
            Notre vision est d’offrir des solutions intégrées et durables face aux défis énergétiques et technologiques.
            <br /><br />
            <strong>Nos valeurs fondamentales :</strong><br />
            - <strong>Innovation :</strong> technologies de pointe pour des solutions performantes.<br />
            - <strong>Durabilité :</strong> fort engagement pour l’environnement.<br />
            - <strong>Excellence :</strong> rigueur et qualité dans toutes nos prestations.<br />
            - <strong>Partenariat :</strong> approche collaborative pour accompagner nos clients.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="about-image">
          {/* 🖼️ Ajoutez ici l'image ou l'icône pour "Notre équipe / partenaires" */}
          <img src={img4} alt="Valeurs et vision" />
        </div>
        <div className="about-text">
          <h2>3. Notre équipe / partenaires</h2>
          <p>
            AzureGroup s’appuie sur une équipe multidisciplinaire et des partenaires internationaux de confiance 
            pour garantir un haut niveau de compétence dans chaque projet. Nous valorisons la collaboration 
            et le partage d’expertise pour réussir ensemble.
          </p>
        </div>
      </section>

      <section className="about-block">
        <div className="about-image">
          {/* 🖼️ Ajoutez ici l'image ou l'icône pour "Notre ambition" */}
          <img src={img2} alt="Notre équipe" />
        </div>
        <div className="about-text">
          <h2>4. Notre ambition : accompagner la performance durable</h2>
          <p>
            Notre ambition va au-delà des solutions techniques. AzureGroup propose des <strong>formations spécialisées</strong> dans des domaines clés :<br />
            - IT/TELECOM<br />
            - Énergie solaire<br />
            - Management<br />
            - Normes ISO<br /><br />
            Objectif : aider nos clients à <strong>renforcer leur compétitivité</strong> et à <strong>s’adapter aux évolutions</strong> du marché.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <p>Souhaitez-vous en savoir plus sur nos services ou produits ?</p>
        <a href="/contact">Contactez-nous</a>
      </section>
    </div>
  );
};

export default APropos;
