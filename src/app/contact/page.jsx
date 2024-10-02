import Image from 'next/image'
import styles from './contact.module.css'

export const metadata = {
  title: 'Next App Contact Page 📲',
  description: 'Contact Page'
}


export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.imgCont}>
        <Image
          className={styles.img}
          src='/contact.png'
          alt='Contact page image'
          fill
        />
      </section>
      <section className={styles.formContainer}>
        <form className={styles.form}>
          <input
            className={styles.inputForm}
            type='text'
            placeholder='Name and Surname'
          />
          <input
            className={styles.inputForm}
            type='email'
            placeholder='Email address'
          />
          <input
            className={styles.inputForm}
            type='number'
            placeholder='Phone Number (Optional)'
          />
          <textarea
            className={styles.inputForm}
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </section>
    </div>
  )
}
