import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Products />
      <About />
      <Gallery />
      <Contact />
    </div>
  )
}
