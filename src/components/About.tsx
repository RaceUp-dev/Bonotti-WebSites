import Image from 'next/image'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="a-propos" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Images */}
          <div className={styles.images}>
            <div className={styles.imageMain}>
              <Image
                src="/asset/Laurent et son équipe.jpg"
                alt="Laurent Bonotti et son équipe"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.imageSecondary}>
              <Image
                src="/asset/Equipe.jpg"
                alt="L'équipe de la boulangerie Bonotti"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>+30</span>
              <span className={styles.badgeText}>ans de passion</span>
            </div>
          </div>

          {/* Content */}
          <div className={styles.content}>
            <span className={styles.label}>Notre Histoire</span>
            <h2 className={styles.title}>
              Un savoir-faire passionné,
              <br />une excellence artisanale
            </h2>
            <div className={styles.text}>
              <p>
                Au cœur de Lumes, la Boulangerie Bonotti est née d'une passion commune
                pour l'art de la boulangerie artisanale. Chaque matin, bien avant l'aube,
                nous préparons avec soin nos pains, viennoiseries et pâtisseries.
              </p>
              <p>
                Notre philosophie est simple : des ingrédients de qualité, des techniques
                éprouvées, et une passion inébranlable pour le travail bien fait. Nous croyons
                que le bon pain raconte une histoire, celle de la patience, du respect des
                traditions et de l'amour du métier.
              </p>
              <p>
                Laurent Bonotti et son équipe vous accueillent avec le sourire pour
                vous faire découvrir leurs créations. Venez partager notre passion
                pour les saveurs authentiques.
              </p>
            </div>

            <div className={styles.values}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4>Qualité</h4>
                  <p>Ingrédients soigneusement sélectionnés</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div>
                  <h4>Passion</h4>
                  <p>L'amour du métier depuis toujours</p>
                </div>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4>Tradition</h4>
                  <p>Recettes transmises avec fidélité</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
