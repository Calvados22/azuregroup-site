import './Footer.css';
import logo from '../media/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Address */}
        <div className="footer-section">
          <img
            src={logo}
            alt="AzureGroup Logo"
            className="footer-logo"
          />
          <h4 className="footer-title">Localisation</h4>
          <p>29 Bd de Narjane, Mohammédia 28830</p>
          <a
            href="https://maps.app.goo.gl/KfG2dqvYqFcPW9ay8"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Voir sur Google Maps
          </a>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4 className="footer-title">Contact</h4>
          <p>Téléphone : +212 6 12 34 56 78</p>
          <p>Email : contact@azuregroup.com</p>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h4 className="footer-title">Nos Services</h4>
          <ul className="footer-list">
            <li><a href="/services/outsourcing">Outsourcing</a></li>
            <li><a href="https://www.azureenregy.ma">Énergie Renouvelable</a></li>
            <li><a href="/services/digitalisation">Digitalisation</a></li>
            <li><a href="/services/ict">Infrastructure ICT</a></li>
            <li><a href="/services/SecurityPhysique">Sécurité Physique</a></li>
            <li><a href="/services/academy">Academy</a></li>
          </ul>
              <a href="/contact" className="contact-button1">Contactez-nous</a>        </div>
      </div>

      {/* Google Maps */}
      <div className="footer-map">
        <iframe
          title="AzureGroup Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d848.0572600145405!2d-7.391679600000001!3d33.6965564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63dc7fe108ba5%3A0x3a01393c64014b71!2s29%20Bd%20de%20Narjane%2C%20Mohamm%C3%A9dia%2028830!5e0!3m2!1sfr!2sma!4v1717082160535!5m2!1sfr!2sma"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        En partenariat avec des experts internationaux, nous servons les grands comptes en offrant un support à distance pour les utilitaires et les entreprises commerciales.
      </div>
    </footer>
  );
}

export default Footer;
