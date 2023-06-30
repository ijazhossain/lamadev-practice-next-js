import Image from 'next/image'
import styles from './page.module.css'
import bannerImg from 'public/hero.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className={styles.button}>See our works</button>
      </div>
      <div className={styles.item}>

        <Image src={bannerImg} alt="banner image" className={styles.images} />
      </div>
    </div>
  )
}
