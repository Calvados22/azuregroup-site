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
          Innover, optimiser, transformer pour une performance durable dans un monde en constante évolution numérique.
          Nous aidons nos clients à intégrer les technologies digitales clés pour rester compétitifs et créer de nouvelles opportunités de croissance.
        </p>
      </header>

      <section className="digital-section" data-aos="fade-up">
        <h2>🎯 Notre Mission</h2>
        <p>
          Nous accompagnons les entreprises et institutions dans leur transformation digitale globale, avec une approche agile centrée sur l’impact métier. 
          Notre objectif est d’optimiser les processus, d'améliorer la productivité, et d’assurer une expérience client fluide et innovante.
          Nous mettons l’accent sur l’adaptabilité et la pérennité des solutions mises en place, garantissant un retour sur investissement mesurable.
        </p>
      </section>

      <section className="digital-section two-columns" data-aos="fade-up">
        <div className="column">
          <h3>🔍 Audit & Cartographie</h3>
          <p>
            Nous réalisons un diagnostic approfondi des systèmes d’information existants et une cartographie détaillée des processus métiers.
            Cela permet d’identifier les inefficacités, les redondances, ainsi que les risques liés à la sécurité et à la conformité. 
            Cette analyse fine ouvre la voie à des recommandations ciblées pour une transformation digitale réussie.
          </p>
        </div>
        <div className="column">
          <h3>🚀 Stratégies Digitales Personnalisées</h3>
          <p>
            En collaboration avec vos équipes, nous co-construisons des feuilles de route digitales adaptées à vos spécificités sectorielles et organisationnelles.
            Nous intégrons les meilleures pratiques et technologies pour maximiser l’impact de la transformation, tout en minimisant les risques et les coûts.
            Ces stratégies intègrent aussi bien la gestion du changement que la montée en compétences.
          </p>
        </div>
      </section>

      <section className="digital-section two-columns" data-aos="fade-up">
        <div className="column">
          <h3>☁️ Plateformes Intelligentes & Cloud</h3>
          <p>
            Nous intégrons des technologies avancées telles que le Cloud Computing, l’Internet des Objets (IoT), l’Intelligence Artificielle (IA), et les systèmes d’automatisation.
            Ces plateformes modernes permettent d’améliorer l’agilité, la scalabilité et la sécurité de vos infrastructures IT.
            Nous proposons également des solutions hybrides ou multi-cloud pour une flexibilité optimale.
          </p>
        </div>
        <div className="column">
          <h3>👥 Digitalisation des Parcours Utilisateurs</h3>
          <p>
            L’optimisation de l’expérience client et utilisateur est au cœur de notre démarche.
            Nous repensons les parcours clients, collaborateurs et partenaires pour les rendre plus fluides, personnalisés et omnicanaux.
            Cela inclut la mise en place d’outils collaboratifs, de CRM avancés, et d’interfaces intuitives pour booster l’engagement et la satisfaction.
          </p>
        </div>
      </section>

      <section className="digital-section two-columns" data-aos="fade-up">
        <div className="column">
          <h3>📚 Accompagnement au Changement</h3>
          <p>
            Le succès d’une transformation digitale repose sur l’adhésion des équipes.
            Nous proposons des programmes complets de formation, coaching et gestion du changement pour assurer une adoption rapide et durable des nouveaux outils et méthodes.
            Nos experts accompagnent les managers et utilisateurs tout au long du projet pour faciliter cette transition.
          </p>
        </div>
        <div className="column">
          <h3>🛠️ Nouveauté : Industrie 5.0 & Décarbonation</h3>
          <p>
            Nous intégrons les dernières tendances de l’Industrie 5.0, en combinant automation avancée et interaction humaine pour une production plus flexible et durable.
            Par ailleurs, nous aidons les entreprises à réduire leur empreinte carbone grâce à des dashboards intelligents, au pilotage énergétique optimisé et à l’intégration d’outils de décarbonation innovants, en phase avec les normes environnementales actuelles.
          </p>
        </div>
      </section>

      <section className="digital-cta" data-aos="fade-up">
        <h2>🤝 Prêts à transformer votre entreprise ?</h2>
        <p>
          Contactez Azure Group dès aujourd’hui pour découvrir comment notre expertise en transformation digitale peut propulser votre organisation vers l’avenir.
          Ensemble, faisons de la transformation numérique un levier de performance et de compétitivité durable.
        </p>
        <a href="/contact" className="contact-button">Contactez-nous</a>
      </section>
    </div>
  );
}

export default Digitalisation;
