import Image from 'next/image'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="accueil" className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/asset/Background 1.jpg"
          alt="Boulangerie Bonotti - Pains artisanaux"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.container}>
          <span className={styles.label}>Artisan Boulanger depuis des générations</span>
          <h1 className={styles.title}>
            Le goût authentique
            <br />
            <span className={styles.highlight}>du pain fait maison</span>
          </h1>
          <p className={styles.description}>
            À Lumes, nous perpétuons la tradition boulangère avec passion.
            Chaque jour, nous façonnons nos pains, viennoiseries et pâtisseries
            avec des ingrédients soigneusement sélectionnés.
          </p>
          <div className={styles.buttons}>
            <a href="#produits" className={styles.btnPrimary}>
              Découvrir nos produits
            </a>
            <a href="#contact" className={styles.btnSecondary}>
              Nous trouver
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Défiler</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}

export default Hero
