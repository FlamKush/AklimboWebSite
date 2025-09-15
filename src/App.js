import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Scissors, TreePine, Flower, Star, Menu, X, CheckCircle } from 'lucide-react';

const JardinierWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert(`Merci ${formData.nom} ! Votre demande a été envoyée. Nous vous recontacterons rapidement.`);
    setFormData({ nom: '', email: '', telephone: '', message: '' });
  };

  const services = [
    {
      icon: <TreePine size={48} color="#059669" />,
      title: "Élagage professionnel",
      description: "Taille et élagage d'arbres, débroussaillage, abattage sécurisé avec matériel professionnel",
      prix: "À partir de 80€"
    },
    {
      icon: <Scissors size={48} color="#059669" />,
      title: "Taille de haies",
      description: "Entretien et mise en forme de vos haies et arbustes toute l'année",
      prix: "À partir de 50€"
    },
    {
      icon: <Flower size={48} color="#059669" />,
      title: "Entretien de jardins",
      description: "Création et entretien d'espaces verts, plantation, désherbage, tondeuse",
      prix: "À partir de 35€/h"
    }
  ];

  const avantages = [
    "Devis gratuit et sans engagement",
    "Matériel professionnel dernière génération",
    "Assurance responsabilité civile",
    "Nettoyage complet après intervention",
    "Conseils personnalisés gratuits",
    "Disponible 6j/7"
  ];

  // Styles en ligne pour éviter les problèmes Tailwind
  const styles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#166534',
      color: 'white',
      padding: '1rem 0',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      zIndex: 1000
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    headerContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    nav: {
      display: 'none',
      gap: '2rem'
    },
    navDesktop: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'color 0.3s'
    },
    hero: {
      paddingTop: '5rem',
      background: 'linear-gradient(135deg, #15803d, #059669, #166534)',
      color: 'white',
      padding: '6rem 0',
      textAlign: 'center'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      lineHeight: '1.1'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      marginBottom: '2.5rem',
      maxWidth: '48rem',
      margin: '0 auto 2.5rem auto',
      lineHeight: '1.6'
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100px', // Ajustez la hauteur selon vos besoins
    },
    buttonPrimary: {
      backgroundColor: 'white',
      color: '#166534',
      padding: '1rem 2.5rem',
      borderRadius: '0.75rem',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      textDecoration: 'none',
      transition: 'all 0.3s',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    buttonSecondary: {
      border: '2px solid white',
      color: 'white',
      padding: '1rem 2.5rem',
      borderRadius: '0.75rem',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      textDecoration: 'none',
      transition: 'all 0.3s'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      maxWidth: '64rem',
      margin: '0 auto'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#86efac'
    },
    section: {
      padding: '5rem 0'
    },
    sectionGray: {
      padding: '5rem 0',
      backgroundColor: '#f9fafb'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      color: '#1f2937'
    },
    sectionSubtitle: {
      fontSize: '1.25rem',
      textAlign: 'center',
      color: '#6b7280',
      maxWidth: '32rem',
      margin: '0 auto 4rem auto'
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2.5rem'
    },
    serviceCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      transition: 'all 0.3s',
      borderTop: '4px solid #059669'
    },
    serviceIcon: {
      marginBottom: '1.5rem'
    },
    serviceTitle: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#1f2937'
    },
    serviceDescription: {
      color: '#6b7280',
      marginBottom: '1.5rem',
      lineHeight: '1.6'
    },
    servicePrix: {
      backgroundColor: '#dcfce7',
      color: '#166534',
      padding: '0.5rem 1rem',
      borderRadius: '1.5rem',
      fontWeight: '600',
      display: 'inline-block'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '4rem',
      alignItems: 'center'
    },
    aboutText: {
      fontSize: '1.125rem',
      color: '#6b7280',
      marginBottom: '1.5rem',
      lineHeight: '1.7'
    },
    garantiesBox: {
      backgroundColor: '#f0fdf4',
      padding: '2rem',
      borderRadius: '1rem'
    },
    garantiesList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    garantieItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      marginBottom: '1rem',
      fontSize: '1.125rem',
      color: '#374151'
    },
    testimonialsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    testimonialCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    starsContainer: {
      display: 'flex',
      marginBottom: '1rem'
    },
    testimonialText: {
      color: '#6b7280',
      fontStyle: 'italic',
      fontSize: '1.125rem',
      marginBottom: '1.5rem',
      lineHeight: '1.6'
    },
    contactSection: {
      padding: '5rem 0',
      backgroundColor: '#166534',
      color: 'white'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '4rem'
    },
    contactInfo: {
      marginBottom: '1.5rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem'
    },
    contactForm: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '1rem',
      color: '#1f2937'
    },
    input: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #d1d5db',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      marginBottom: '1.5rem',
      boxSizing: 'border-box'
    },
    textarea: {
      width: '100%',
      padding: '1rem',
      border: '2px solid #d1d5db',
      borderRadius: '0.75rem',
      fontSize: '1rem',
      marginBottom: '1.5rem',
      boxSizing: 'border-box',
      resize: 'vertical',
      minHeight: '120px'
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#059669',
      color: 'white',
      padding: '1rem',
      borderRadius: '0.75rem',
      border: 'none',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    footer: {
      backgroundColor: '#111827',
      color: 'white',
      padding: '3rem 0'
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginBottom: '2rem'
    },
    footerBottom: {
      borderTop: '1px solid #374151',
      paddingTop: '2rem',
      textAlign: 'center',
      color: '#9ca3af'
    },
    menuButton: {
      display: 'block',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: 'block',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid #059669'
    },
    mobileNavLink: {
      display: 'block',
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem 0',
      transition: 'color 0.3s'
    }
  };

  // Styles responsive
  const isDesktop = window.innerWidth >= 768;
  if (isDesktop) {
    styles.nav.display = 'flex';
    styles.menuButton.display = 'none';
    styles.buttonGroup.flexDirection = 'row';
    styles.heroTitle.fontSize = '4rem';
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.container}>
          <div style={styles.headerContent}>
            <div style={styles.logo}>
              <TreePine size={32} color="#86efac" />
              <div>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>Aklimbo</h1>
                <p style={{ fontSize: '0.875rem', color: '#86efac', margin: 0 }}>Votre spécialiste du jardin</p>
              </div>
            </div>
            
            <nav style={isDesktop ? styles.navDesktop : { display: 'none' }}>
              <a href="#accueil" style={styles.navLink}>Accueil</a>
              <a href="#services" style={styles.navLink}>Services</a>
              <a href="#apropos" style={styles.navLink}>À propos</a>
              <a href="#contact" style={styles.navLink}>Contact</a>
            </nav>

            <button style={isDesktop ? { display: 'none' } : styles.menuButton} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && !isDesktop && (
            <nav style={styles.mobileMenu}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="#accueil" style={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Accueil</a>
                <a href="#services" style={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#apropos" style={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>À propos</a>
                <a href="#contact" style={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" style={styles.hero}>
        <div style={styles.container}>
          <h2 style={styles.heroTitle}>
            Votre Expert en<br />
            <span style={{ color: '#86efac' }}>Jardinage & Élagage</span>
          </h2>
          <p style={styles.heroSubtitle}>
            Professionnel pour l'entretien de vos espaces verts, 
            élagage et création de jardins dans Bruxelles et ses alentoures.
          </p>
          
          <div style={styles.buttonGroup} alignItems="center">
            <a href="#contact" style={styles.buttonPrimary}>
              🌿 Devis gratuit
            </a>
            <a href="tel:+33123456789" style={styles.buttonSecondary}>
              📞 01 23 45 67 89
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.sectionGray}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={styles.sectionTitle}>Nos Services</h2>
            <p style={styles.sectionSubtitle}>
              Une gamme complète de services pour l'entretien et l'embellissement de vos espaces verts
            </p>
          </div>
          
          <div style={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} style={styles.serviceCard}>
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceDescription}>{service.description}</p>
                <div>
                  <span style={styles.servicePrix}>{service.prix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section À propos */}{/*Change cette partie avec des photos */}
      <section id="apropos" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.aboutGrid}>
            <div>
              <h2 style={{ ...styles.sectionTitle, textAlign: 'left', marginBottom: '2rem' }}>À Propos de Nous</h2>
              <p style={styles.aboutText}>
                Passionné par la nature et fort de plus de 10 ans d'expérience dans l'entretien des espaces verts, 
                je mets mon expertise au service de vos projets de jardinage et d'élagage.
              </p>
              <p style={styles.aboutText}>
                Que ce soit pour les particuliers, entreprises ou collectivités, chaque intervention est 
                réalisée avec le plus grand soin et dans le respect de l'environnement.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Clock size={24} color="#059669" />
                  <span style={{ color: '#374151', fontWeight: '600' }}>10+ ans d'expérience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={24} color="#fbbf24" />
                  <span style={{ color: '#374151', fontWeight: '600' }}>100% satisfait</span>
                </div>
              </div>

              <a href="#contact" style={{ ...styles.buttonPrimary, backgroundColor: '#059669', color: 'white', display: 'inline-block' }}>
                Contactez-nous maintenant
              </a>
            </div>
            
            <div style={styles.garantiesBox}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>Nos Garanties</h3>
              <ul style={styles.garantiesList}>
                {avantages.map((avantage, index) => (
                  <li key={index} style={styles.garantieItem}>
                    <CheckCircle size={24} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{avantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Section Contact */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.container}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ ...styles.sectionTitle, color: 'white' }}>Demandez Votre Devis Gratuit</h2>
            <p style={{ fontSize: '1.25rem' }}>Contactez-nous dès maintenant pour un devis personnalisé</p>
          </div>
          
          <div style={styles.contactGrid}>
            <div>
              <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Informations de Contact</h3>
              <div>
                <div style={styles.contactItem}>
                  <Phone size={32} color="#86efac" />
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>Téléphone</p>
                    <p style={{ fontSize: '1.125rem', margin: 0 }}>01 23 45 67 89</p>
                  </div>
                </div>
                <div style={styles.contactItem}>
                  <Mail size={32} color="#86efac" />
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>Email</p>
                    <p style={{ fontSize: '1.125rem', margin: 0 }}>contact@jardins-expert.fr</p>
                  </div>
                </div>
                <div style={styles.contactItem}>
                  <MapPin size={32} color="#86efac" />
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>Zone d'intervention</p>
                    <p style={{ fontSize: '1.125rem', margin: 0 }}>Nord-Pas-de-Calais (50km autour de Lille)</p>
                  </div>
                </div>
                <div style={styles.contactItem}>
                  <Clock size={32} color="#86efac" />
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '1.25rem', margin: '0 0 0.25rem 0' }}>Horaires</p>
                    <p style={{ fontSize: '1.125rem', margin: 0 }}>Lun-Sam : 8h-18h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.contactForm}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Formulaire de Contact</h3>
              <div>
                <input 
                  type="text" 
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  placeholder="Votre nom complet" 
                  style={styles.input}
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Votre email" 
                  style={styles.input}
                />
                <input 
                  type="tel" 
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleInputChange}
                  placeholder="Votre téléphone" 
                  style={styles.input}
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Décrivez vos besoins en détail..." 
                  style={styles.textarea}
                ></textarea>
                <button 
                  onClick={handleSubmit}
                  style={styles.submitButton}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#047857'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#059669'}
                >
                  🌿 Envoyer ma demande de devis
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <TreePine size={32} color="#86efac" />
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Jardins Expert</span>
              </div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                Votre partenaire de confiance pour tous vos travaux de jardinage, 
                élagage et entretien d'espaces verts dans le Nord-Pas-de-Calais.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Nos Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9ca3af' }}>
                <li style={{ marginBottom: '0.5rem' }}>Élagage professionnel</li>
                <li style={{ marginBottom: '0.5rem' }}>Taille de haies</li>
                <li style={{ marginBottom: '0.5rem' }}>Entretien de jardins</li>
                <li style={{ marginBottom: '0.5rem' }}>Création d'espaces verts</li>
                <li style={{ marginBottom: '0.5rem' }}>Débroussaillage</li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Contact Rapide</h4>
              <div style={{ color: '#9ca3af' }}>
                <p style={{ marginBottom: '0.75rem' }}>📞 01 23 45 67 89</p>
                <p style={{ marginBottom: '0.75rem' }}>✉️ contact@jardins-expert.fr</p>
                <p style={{ marginBottom: '0.75rem' }}>📍 Nord-Pas-de-Calais</p>
              </div>
            </div>
          </div>
          
          <div style={styles.footerBottom}>
            <p>© 2025 Jardins Expert. Tous droits réservés. | SIRET: 123 456 789 00012</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JardinierWebsite;