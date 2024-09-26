'use client'
import Image from "next/image";

import styles from './about.module.css'
import { useParams, useSearchParams } from "next/navigation";

export default function AboutPage() {
  const params = useParams()
  const searchParams = useSearchParams()

  console.log('PARAMS: ', params)
  console.log('SEARCH-PARAMS: ', searchParams.get('q'))

  return (
    <div className={styles.container}>
      <section className={styles.textCon}>
        <h3 className={styles.aboutTitle}>About Agency</h3>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.text}>
          We create digilta ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission. We&apos;re
          wordl&apos;s. Our Special Team best consulting & finance solution
          provider. Wide range of web adn software development services.
        </p>
        <article className={styles.dataContainer}>
          <div className={styles.data}>
            <h4>10 K+</h4>
            <p>Year of experience</p>
          </div>
          <div className={styles.data}>
            <h4>234 K+</h4>
            <p>People reached</p>
          </div>
          <div className={styles.data}>
            <h4>5 K+</h4>
            <p>Services and plugins</p>
          </div>
        </article>
      </section>
      <section className={styles.imgCon}>
        <Image
          src='/about.png'
          alt="About page'png"
          fill
          className={styles.img}
        />
      </section>
    </div>
  )
}