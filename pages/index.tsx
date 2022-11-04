import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {


  return (
    <div className={`${styles.col}`}>
      <Head>
        <title>Impowered App</title>
        <meta name="description" content="Empowering entrepreneurs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={`${styles.row}`}>
          
      </header>

      <main className={`${styles.col}`}>
        <section className={`${styles.row}`}>

        </section>
      </main>

      <footer className={`${styles.col}`}>
        
      </footer>
    </div>
  )
}
