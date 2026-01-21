import Image from 'next/image'
import styles from './Gallery.module.css'

const galleryImages = [
  {
    src: '/asset/Belle Facade.webp',
    alt: 'Façade de la Boulangerie Bonotti',
    span: 'large'
  },
  {
    src: '/asset/belle photo Patisserie 1.webp',
    alt: 'Pâtisseries artisanales',
    span: 'normal'
  },
  {
    src: '/asset/Création Pousette Patisserie.jpg',
    alt: 'Création pâtissière originale',
    span: 'normal'
  },
  {
    src: '/asset/Facade.webp',
    alt: 'Entrée de la boulangerie',
    span: 'normal'
  },
  {
    src: '/asset/Photo Chic.jpg',
    alt: 'Présentation élégante des produits',
    span: 'tall'
  }
]

const Gallery = () => {
  return (
    <section id="galerie" className={styles.gallery}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Galerie</span>
          <h2 className={styles.title}>Notre univers en images</h2>
          <p className={styles.subtitle}>
            Découvrez notre boutique, notre équipe et nos créations
            à travers ces quelques clichés.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${styles.item} ${styles[image.span]}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://www.facebook.com/profile.php?id=100054585604399"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
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
            Suivez-nous sur Facebook pour plus de photos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Gallery
