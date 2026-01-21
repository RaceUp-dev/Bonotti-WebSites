import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo et description */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>Bonotti</span>
              <span className={styles.logoSubtext}>Boulangerie Artisanale</span>
            </Link>
            <p className={styles.description}>
              Artisan boulanger-pâtissier à Lumes depuis des générations.
              Des produits faits maison avec passion et savoir-faire traditionnel.
            </p>
            <div className={styles.social}>
              <a
                href="https://www.facebook.com/profile.php?id=100054585604399"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles.socialLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Navigation</h4>
            <ul className={styles.linksList}>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#produits">Nos Produits</a></li>
              <li><a href="#a-propos">Notre Histoire</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Produits */}
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Nos Spécialités</h4>
            <ul className={styles.linksList}>
              <li>Pains traditionnels</li>
              <li>Viennoiseries</li>
              <li>Pâtisseries</li>
              <li>Gâteaux sur commande</li>
              <li>Spécialités maison</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contact}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <address className={styles.address}>
              <div className={styles.contactItem}>
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>12 Grande rue<br />08440 Lumes</span>
              </div>

              <div className={styles.contactItem}>
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href="tel:+33324572976">03 24 57 29 76</a>
              </div>

              <div className={styles.contactItem}>
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
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <a href="mailto:laurent.bonotti@orange.fr">laurent.bonotti@orange.fr</a>
              </div>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Boulangerie Bonotti. Tous droits réservés.
          </p>
          <p className={styles.madeWith}>
            Fait avec savoir-faire artisanal à Lumes
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
