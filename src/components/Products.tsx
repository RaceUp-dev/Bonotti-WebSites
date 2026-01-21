import Image from 'next/image'
import styles from './Products.module.css'

const products = [
  {
    id: 1,
    name: 'Pains Traditionnels',
    description: 'Baguettes croustillantes, pains de campagne, pains spéciaux aux céréales. Fabriqués chaque jour avec des farines sélectionnées.',
    image: '/asset/Travail boulanger.jpg',
    features: ['Fermentation lente', 'Farines françaises', 'Cuisson au four à sole']
  },
  {
    id: 2,
    name: 'Viennoiseries',
    description: 'Croissants pur beurre, pains au chocolat, brioches dorées. Le petit déjeuner parfait préparé dès l\'aube.',
    image: '/asset/Photo Chic.jpg',
    features: ['Beurre AOP', 'Feuilletage maison', 'Cuisson du matin']
  },
  {
    id: 3,
    name: 'Pâtisseries',
    description: 'Tartes aux fruits de saison, éclairs, mille-feuilles et créations originales. L\'art de la gourmandise.',
    image: '/asset/belle photo patisserie.webp',
    features: ['Fruits frais', 'Crèmes maison', 'Décors artisanaux']
  },
  {
    id: 4,
    name: 'Gâteaux sur Commande',
    description: 'Anniversaires, mariages, baptêmes. Des créations personnalisées pour vos moments les plus précieux.',
    image: '/asset/Gateaux 18 ans.jpg',
    features: ['Sur mesure', 'Personnalisation', 'Livraison possible']
  }
]

const Products = () => {
  return (
    <section id="produits" className={styles.products}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Nos Créations</span>
          <h2 className={styles.title}>Des produits artisanaux<br />faits avec passion</h2>
          <p className={styles.subtitle}>
            Chaque jour, nous sélectionnons les meilleurs ingrédients pour vous offrir
            des produits d'exception, fidèles à la tradition boulangère.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <article key={product.id} className={styles.card} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.imageOverlay}></div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.name}</h3>
                <p className={styles.cardDescription}>{product.description}</p>
                <ul className={styles.features}>
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Envie d'une commande spéciale ?</p>
          <a href="#contact" className={styles.ctaButton}>
            Contactez-nous
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
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
