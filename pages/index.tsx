import Head from 'next/head'
import styles from '../styles/Main.module.css'

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

      <main className={`${styles.row} ${styles.container}`}>
        <section className={`${styles.col} ${styles.oneThird}`}>
          <div className={`${styles.card}`}>
            <header>
              <h4>Test Card One</h4>
            </header>
            <main>
              <p>Lorum Ipsum . . .</p>
            </main>
          </div>
        </section>
        <section className={`${styles.col} ${styles.oneThird}`}>
          <div className={`${styles.card}`}>
            <header>
              <h4>Test Card Two</h4>
            </header>
            <main>
              <p>Lorum Ipsum . . .</p>
            </main>
          </div>
        </section>
        <section className={`${styles.col} ${styles.oneThird}`}>
          <div className={`${styles.card}`}>
            <header>
              <h4>Test Card Three</h4>
            </header>
            <main>
              <p>Lorum Ipsum . . .</p>
            </main>
          </div>
        </section>
      </main>

      <footer className={`${styles.col}`}>
        
      </footer>
    </div>
  )
}
