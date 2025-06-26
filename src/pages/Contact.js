import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis.';
    if (!formData.email.trim()) {
      newErrors.email = 'L’email est requis.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresse email invalide.';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          alert(data.success);
          setFormData({
            nom: '',
            email: '',
            telephone: '',
            sujet: '',
            message: '',
          });
        } else {
          alert(data.error || 'Une erreur est survenue.');
        }
      } catch (err) {
        console.error('Erreur:', err);
        alert('Erreur de communication avec le serveur.');
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contactez-nous</h2>

          <div className="form-group">
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} />
            {errors.nom && <span className="error">{errors.nom}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="telephone">Téléphone</label>
            <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="sujet">Sujet</label>
            <input type="text" name="sujet" value={formData.sujet} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
