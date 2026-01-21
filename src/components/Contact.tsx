import styles from './Contact.module.css'

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info */}
          <div className={styles.info}>
            <span className={styles.label}>Contact</span>
            <h2 className={styles.title}>Venez nous rendre visite</h2>
            <p className={styles.description}>
              Notre équipe vous accueille avec plaisir pour vous faire découvrir
              nos pains frais, viennoiseries du matin et pâtisseries maison.
            </p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Adresse</h4>
                  <p>12 Grande rue<br />08440 Lumes, France</p>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Téléphone</h4>
                  <a href="tel:+33324572976">03 24 57 29 76</a>
                </div>
              </div>

              <div className={styles.detailItem}>
                <div className={styles.detailIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:laurent.bonotti@orange.fr">laurent.bonotti@orange.fr</a>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="https://maps.app.goo.gl/7BZEgmr6gAkZMRLL8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                </svg>
                Itinéraire Google Maps
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100054585604399"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnSecondary}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Notre Facebook
              </a>
            </div>
          </div>

          {/* Map */}
          <div className={styles.mapWrapper}>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.892567844!2d4.7833!3d49.7431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47ea0a4c3e1c2b7d%3A0x3c4c4e0f9e8f9e0f!2s12%20Grande%20Rue%2C%2008440%20Lumes!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Boulangerie Bonotti"
              />
            </div>
            <div className={styles.mapOverlay}>
              <div className={styles.mapCard}>
                <h4>Boulangerie Bonotti</h4>
                <p>12 Grande rue, Lumes</p>
                <a
                  href="https://maps.app.goo.gl/7BZEgmr6gAkZMRLL8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir dans Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
