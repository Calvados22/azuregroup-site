import React, { useEffect } from 'react';
import './Chainway.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import c72 from '../../media/produits/c72.png';
import ura4 from '../../media/produits/ura4.png';
import chainwayVideo from '../../media/produits/Chainway5.mp4';
import {
  FaMicrochip, FaBatteryFull, FaWifi, FaBarcode, FaIdCard,
  FaNetworkWired, FaShieldAlt, FaMobileAlt, FaBoxOpen,
  FaExpand, FaThermometerHalf, FaCheckCircle
} from 'react-icons/fa';

function Chainway() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <div className="chainway-hero-video-wrapper">
        <video
          className="chainway-hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={chainwayVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="chainway-hero-text" data-aos="fade-up">
        <h1>🌟 Solutions Chainway : Technologie, Robustesse et Performance</h1>
        <p>
          <FaMobileAlt /> Des terminaux <strong>mobiles intelligents</strong> et des lecteurs <strong>RFID fixes</strong> qui répondent aux défis des secteurs les plus exigeants : logistique, production, retail, santé, etc.
          <br />
          <FaBoxOpen /> Optimisez vos processus avec des outils conçus pour durer et faciliter votre quotidien professionnel.
        </p>
      </div>

      <div className="chainway-container">
        <div className="chainway-products-parallel" data-aos="fade-up">
          <div className="product-card">
            <img src={c72} alt="Chainway C72" />
            <h2>📱 Chainway C72 Mobile Computer</h2>
            <p className="product-description">
              Le Chainway C72 est un terminal mobile industriel sous Android. Conçu pour un scannage de codes-barres ultra-efficace, il résiste aux environnements difficiles grâce à sa robustesse et son autonomie exceptionnelle, idéal pour la logistique, l’inventaire ou la gestion d’actifs.
            </p>
            <h3>Caractéristiques & Fonctions</h3>
            <ul>
              <li><FaMicrochip /> Android 11/13, Octa-core 2.3GHz, 3-4 Go RAM + 32-64 Go ROM</li>
              <li><FaBatteryFull /> Batterie 8000 mAh, +12h d’utilisation continue</li>
              <li><FaBarcode /> Scanner 1D/2D ultra-performant</li>
              <li><FaIdCard /> NFC en option</li>
              <li><FaShieldAlt /> IP65, résistance aux chutes 1.5m</li>
              <li><FaWifi /> Wi-Fi dual-band, 4G, Bluetooth 5.0, GPS</li>
            </ul>
            <h3>Caractéristiques physiques</h3>
            <ul>
              <li><FaExpand /> Dimensions : 164 x 80 x 24 mm | Poids : 654g</li>
              <li>Écran : 5.2" IPS, 1920x1080, Gorilla Glass</li>
              <li>Connectique : USB-C OTG, casque Type-C</li>
            </ul>
            <h3>Environnement</h3>
            <ul>
              <li><FaThermometerHalf /> -20°C à +50°C opérationnel | -40°C à +70°C stockage</li>
              <li>Humidité : 5%-95% non condensé</li>
            </ul>
          </div>

          <div className="product-card">
            <img src={ura4} alt="Chainway URA4" />
            <h2>📡 Chainway URA4 Fixed RFID Reader</h2>
            <p className="product-description">
              Le Chainway URA4 est un lecteur RFID fixe performant avec Android intégré. Il offre une lecture UHF rapide et précise avec des interfaces complètes, idéal pour la gestion des stocks, la production et les commerces.
            </p>
            <h3>Caractéristiques & Fonctions</h3>
            <ul>
              <li><FaMicrochip /> Android 9, Octa-core 1.8GHz, 3 Go + 32 Go</li>
              <li><FaNetworkWired /> Interfaces : RS232, RJ45, USB, HDMI</li>
              <li><FaShieldAlt /> Châssis en aluminium, POE/POE+</li>
              <li><FaWifi /> Wi-Fi dual-band, 4G, Bluetooth</li>
              <li>Lecture RFID : +900 tags/sec</li>
            </ul>
            <h3>Caractéristiques physiques</h3>
            <ul>
              <li><FaExpand /> Dimensions : 214 x 148 x 30 mm | Poids : 1 kg</li>
              <li>Alimentation : DC 12V, POE, POE+</li>
            </ul>
            <h3>Environnement</h3>
            <ul>
              <li><FaThermometerHalf /> -25°C à +65°C opérationnel | -40°C à +85°C stockage</li>
              <li>Humidité : 10%-95%</li>
            </ul>
          </div>
        </div>

        <div className="comparatif" data-aos="fade-up">
          <h3><FaCheckCircle /> Comparatif rapide</h3>
          <table>
            <thead>
              <tr>
                <th>Spécifications</th>
                <th>C72 Mobile</th>
                <th>URA4 Fixe</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Système</td><td>Android 11/13</td><td>Android 9</td></tr>
              <tr><td>CPU</td><td>Octa-core 2.3GHz</td><td>Octa-core 1.8GHz</td></tr>
              <tr><td>RFID</td><td>NFC optionnel</td><td>+900 tags/sec</td></tr>
              <tr><td>Batterie</td><td>8000 mAh</td><td>DC 12V / POE</td></tr>
              <tr><td>Poids</td><td>654g</td><td>1 kg</td></tr>
            </tbody>
          </table>
        </div>

        <div className="chainway-contact" data-aos="fade-up">
          <button onClick={() => window.location.href='/contact'}>Contactez-nous</button>
        </div>
      </div>
    </>
  );
}

export default Chainway;
