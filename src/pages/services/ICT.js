import React from 'react';
import ictImg from '../../media/services/ict.jpg';
import './ICT.css';

const ICT = () => {
  return (
    <div className="ict-page">
      {/* Banner */}
      <div className="ict-banner-container">
        <img src={ictImg} alt="ICT banner" className="ict-banner" />
      </div>

      {/* Header */}
      <div className="ict-header">
        <h1>Solutions ICT & Télécoms</h1>
        <p className="ict-subtitle">
          Azure Group se positionne comme EPC en Ingénierie, Planification et Intégration des Solutions ICT & Télécoms. Nous accompagnons nos clients dans la conception, la planification et le déploiement de solutions ICT de pointe, adaptées aux exigences des environnements professionnels modernes : performance, sécurité, connectivité et évolutivité.
        </p>
      </div>

      {/* Content */}
      <div className="ict-cards">
        <div className="ict-card">
          <div className="icon-wrapper">📡</div>
          <h2>Télécom LTE (4G/5G Privé et Public)</h2>
          <p>
            Le LTE (Long Term Evolution) est une norme de communication sans fil permettant la transmission rapide de données, de voix et de vidéos. Azure Group réalise l’ingénierie radio, le dimensionnement, le déploiement et l’optimisation de réseaux LTE adaptés aux environnements industriels et urbains.
          </p>
          <p>
            Nous proposons des architectures sur-mesure (small cells, macro sites, réseaux privés 4G/5G), intégrant les contraintes de couverture, de capacité et de résilience. Ces réseaux sont idéals pour les sites critiques, les campus industriels ou les zones rurales isolées.
          </p>
        </div>

        <div className="ict-card">
          <div className="icon-wrapper">🧵</div>
          <h2>FTTH & FH (Faisceaux Hertziens)</h2>
          <p>
            <strong>FTTH</strong> (Fiber To The Home) permet une connectivité très haut débit via la fibre optique, offrant une bande passante stable et sécurisée pour les foyers et les entreprises. Azure Group prend en charge l’étude de faisabilité, le génie civil, le tirage de fibre, le raccordement client et les tests de performance.
          </p>
          <p>
            <strong>FH (Faisceaux Hertziens)</strong> : Nos solutions FH assurent la continuité de service dans les zones où la fibre est difficile d’accès. Elles offrent une alternative fiable et rapide au câblage, avec des vitesses de transmission allant jusqu’à plusieurs Gbps, sur des distances importantes.
          </p>
        </div>

        <div className="ict-card">
          <div className="icon-wrapper">🏢</div>
          <h2>IBS – PROSE (ex‑Rosenberger)</h2>
          <p>
            L’IBS (Indoor Building Solution) est une technologie visant à améliorer la couverture mobile dans les bâtiments. Nous travaillons avec PROSE (ex-Rosenberger), leader mondial en systèmes DAS (Distributed Antenna System) et composants passifs.
          </p>
          <p>
            Nos solutions sont multi-bandes et multi-opérateurs, compatibles 2G/3G/4G/5G, et s’intègrent dans des environnements architecturaux complexes tels que les hôpitaux, les centres commerciaux et les stades. Un design réseau précis et une gestion centralisée garantissent performance et évolutivité.
          </p>
        </div>

        <div className="ict-card">
          <div className="icon-wrapper">📶</div>
          <h2>WiFi 6 – Cambium Networks</h2>
          <p>
            WiFi 6 (norme 802.11ax) améliore considérablement la capacité, la vitesse et la latence des réseaux sans fil. Azure Group intègre des équipements Cambium Networks réputés pour leur robustesse, leur gestion cloud simplifiée et leurs performances dans les environnements denses.
          </p>
          <p>
            Nous assurons le dimensionnement du réseau, l’installation, la configuration de la sécurité (WPA3, VLANs, QoS) et la maintenance proactive. Cette solution est idéale pour les établissements scolaires, les campus, les hôtels et les administrations.
          </p>
        </div>

        <div className="ict-card">
          <div className="icon-wrapper">☎️</div>
          <h2>Téléphonie IP & PABX</h2>
          <p>
            Nos solutions de téléphonie IP permettent une gestion souple et économique des communications d’entreprise. Azure Group intègre des systèmes VoIP et PABX IP avec messagerie vocale, redirection intelligente, conférence, journalisation des appels, et interopérabilité SIP.
          </p>
          <p>
            Nous accompagnons la migration depuis les systèmes traditionnels vers des architectures IP hybrides ou 100% cloud, tout en assurant la sécurité des flux voix et l’intégration CRM/ERP (Cisco, 3CX, Avaya...).
          </p>
        </div>

        <div className="ict-card">
          <div className="icon-wrapper">🌐</div>
          <h2>Routage et Switching – Cisco, Dell & Autres</h2>
          <p>
            Azure Group conçoit et installe des infrastructures LAN/WAN sécurisées basées sur les équipements Cisco, Dell et Mikrotik. Nos experts assurent le design des topologies réseau, la segmentation via VLAN, la redondance et la haute disponibilité.
          </p>
          <p>
            Nous mettons en œuvre des solutions avancées telles que le routage dynamique (OSPF, BGP), le QoS pour les applications critiques, la détection d’intrusion, et l’administration centralisée via SNMP/NetFlow.
          </p>
        </div>
      </div>

      {/* Contact Button */}
      <div className="ict-cta">
        <a href="/contact" className="ict-button">Contactez-nous</a>
      </div>
    </div>
  );
};

export default ICT;
