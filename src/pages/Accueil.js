import React from 'react'; 
import './Accueil.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import videoBackground from '../media/iloq.mp4';
import energieImg from '../media/services/energie.jpg';
import ictImg from '../media/services/ict.jpg';
import outsourcingImg from '../media/services/outsourcing.jpg';
import securiteImg from '../media/services/cybersecurite.jpg';
import digitalisationImg from '../media/services/digitalisation.jpg';
import accademyImg from '../media/services/accademy.jpg';
import partner1 from '../media/partenaire/partenaire1.jpg';
import partner2 from '../media/partenaire/partenaire2.jpg';
import partner3 from '../media/partenaire/partenaire3.jpg';
import partner4 from '../media/partenaire/partenaire4.jpg';
import partner5 from '../media/partenaire/partenaire5.jpg';
import partner6 from '../media/partenaire/partenaire6.jpg';
import partner7 from '../media/partenaire/partenaire7.jpg';
import partner8 from '../media/partenaire/partenaire8.jpg';
import partner9 from '../media/partenaire/partenaire9.jpg';



AOS.init();

function Accueil() {
  const services = [
    { name: 'Énergie Renouvelable', image: energieImg, link: '/services/energie' },
    { name: 'ICT', image: ictImg, link: '/services/ict' },
    { name: 'OUTSOURCING', image: outsourcingImg, link: '/services/outsourcing' },
    { name: 'CYBERSÉCURITÉ PHYSIQUE', image: securiteImg, link: '/services/SecurityPhysique' },
    { name: 'DIGITALISATION', image: digitalisationImg, link: '/services/digitalisation' },
    { name: 'ACCADEMY', image: accademyImg, link: '/services/academy' },
  ];

const partenaires = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9];

  const testimonials = [
    { name: 'Amine R.', image: 'https://randomuser.me/api/portraits/men/32.jpg', comment: "Un service de qualité exceptionnelle, je recommande vivement AzureGroup !", rating: 5 },
    { name: 'Sofia L.', image: 'https://randomuser.me/api/portraits/women/44.jpg', comment: "Une équipe professionnelle et à l'écoute, résultat impeccable !", rating: 4 },
    { name: 'Youssef M.', image: 'https://randomuser.me/api/portraits/men/58.jpg', comment: "Très satisfait du service reçu. Rapidité et efficacité au top.", rating: 5 },
    { name: 'Imane K.', image: 'https://randomuser.me/api/portraits/women/68.jpg', comment: "Un accompagnement personnalisé et une expertise remarquable.", rating: 5 },
    { name: 'Nabil Z.', image: 'https://randomuser.me/api/portraits/men/15.jpg', comment: "Très bon service après-vente. Je referai appel à eux.", rating: 4 },
    { name: 'Fatima E.', image: 'https://randomuser.me/api/portraits/women/12.jpg', comment: "Merci à toute l’équipe, projet livré à temps et conforme !", rating: 5 },
    { name: 'Khalid T.', image: 'https://randomuser.me/api/portraits/men/23.jpg', comment: "Une entreprise sérieuse avec des solutions innovantes.", rating: 5 },
    { name: 'Leila B.', image: 'https://randomuser.me/api/portraits/women/33.jpg', comment: "Service client très réactif et compétent, je recommande !", rating: 4 }
  ];

  return (
    <div className="accueil-container">
      {/* Hero Section */}
<section className="accueil-slider">
  <video className="video-background" autoPlay muted loop playsInline>
    <source src={videoBackground} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>


      {/* About Section */}
<section className="accueil-description framed-text left-aligned" data-aos="fade-up">
  <h1>Bienvenue chez AzureGroup:</h1>
  <p>
    Azure Group est un cabinet de conseil spécialisé dans la transformation digitale et la transition énergétique. Il accompagne les entreprises et institutions dans la conception et la mise en œuvre de solutions innovantes alliant technologie, durabilité et performance.
  </p>
  <p>
    Ses domaines d’expertise couvrent :
    <br />
    ♻️ les énergies renouvelables,
    <br />
    ♻️ la cybersécurité physique,
    <br />
    ♻️ les systèmes intelligents,
    <br />
    ♻️ les solutions digitales sur mesure.
  </p>
  <p>
    Azure Group opère sous la raison sociale Azure Networks Company International, société à dimension internationale dédiée au développement de projets à fort impact technologique et énergétique.
  </p>
</section>

      {/* Services Section */}
<section className="accueil-services" data-aos="fade-up">
  <div className="services-overlay">
    <h2>Nos Services</h2>
    <div className="services-grid">
      {services.map((service, index) => (
        <Link
          to={service.link}
          key={index}
          className="service-card"
          data-aos="zoom-in"
          data-aos-delay={`${index * 100}`}
        >
          <img src={service.image} alt={service.name} />
          <div className="service-name">{service.name}</div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="avis-clients" data-aos="fade-up">
        <h2>Avis Clients</h2>
        <div className="avis-grid">
          {testimonials.map((avis, idx) => (
            <div className="avis-card" key={idx}>
              <img src={avis.image} alt={avis.name} />
              <div className="avis-name">{avis.name}</div>
              <div className="stars">{'★'.repeat(avis.rating)}{'☆'.repeat(5 - avis.rating)}</div>
              <p>{avis.comment}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="accueil-separator"></div>

      {/* Partners Section */}
      <section className="accueil-partenaires" data-aos="fade-up">
        <h2>Nos Partenaires</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          loop
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partenaires.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="partner-logo">
                <img src={logo} alt={`Partenaire ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

export default Accueil;
