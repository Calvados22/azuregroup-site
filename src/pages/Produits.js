import React, { useEffect } from 'react';
import './Produits.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import iloq from '../media/produits/iloq.png';
import chainway from '../media/produits/chainway.png';
import { FaLock, FaMobileAlt, FaLeaf, FaKey, FaNetworkWired, FaBarcode, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

function Produits() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    {
      name: 'iLOQ',
      image: iloq,
      description: "iLOQ est un leader mondial des solutions de verrouillage numérique et sans batterie. Nos solutions permettent une gestion des accès sécurisée, économique et respectueuse de l'environnement.",
      features: [
        { icon: <FaLock />, text: "Systèmes de verrouillage électronique et sans clé" },
        { icon: <FaLeaf />, text: "Technologie éco-responsable sans batterie" },
        { icon: <FaKey />, text: "Gestion d'accès à distance et en temps réel" },
        { icon: <FaShieldAlt />, text: "Sécurité des bâtiments, logements collectifs et sites sensibles" }
      ],
      onClick: () => navigate('/products/iloq')
    },
    {
      name: 'Chainway',
      image: chainway,
      description: "Chainway propose des terminaux mobiles et lecteurs RFID de haute performance adaptés aux secteurs exigeants : logistique, santé, industrie, sécurité.",
      features: [
        { icon: <FaMobileAlt />, text: "Terminaux mobiles robustes sous Android" },
        { icon: <FaBarcode />, text: "Lecteurs de codes-barres et RFID ultra-rapides" },
        { icon: <FaNetworkWired />, text: "Compatibilité avec les réseaux 4G, Wi-Fi et Bluetooth" },
        { icon: <FaShieldAlt />, text: "Équipements durcis, résistants aux chocs et intempéries" }
      ],
      onClick: () => navigate('/products/chainway')
    }
  ];

  return (
    <div className="produits-container">
      <header className="produits-header" data-aos="fade-down">
        <h1>🌟 Nos Produits</h1>
        <p>Découvrez nos solutions innovantes pour une gestion moderne, sécurisée et efficace.</p>
      </header>

      <div className="produits-grid">
        {products.map((product, index) => (
          <div className="produit-card" key={index} data-aos="fade-up">
            <img src={product.image} alt={product.name} className="produit-image" />
            <h2 className="produit-name">{product.name}</h2>
            <p className="produit-desc">{product.description}</p>
            <ul className="produit-features">
              {product.features.map((feat, idx) => (
                <li key={idx}>{feat.icon} {feat.text}</li>
              ))}
            </ul>
            <button className="produit-button" onClick={product.onClick}>
              En savoir plus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Produits;
