import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <section className={styles.logo}>
        Lamadev
      </section>
      <section className={styles.text}>
        Lama creative thougths agency &copy; All rights reserved.
      </section>
    </footer>
  )
}