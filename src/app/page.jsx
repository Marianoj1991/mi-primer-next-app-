import Image from 'next/image';
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.textContainer}>
        <h1 className={styles.title} >Creative Thoughts Agency.</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas, facere inventore ducimus dignissimos doloremque eveniet quibusdam a aliquid veritatis?</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button} >Learn More</button>
          <button className={styles.button} >Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src='/brands.png' alt='Brands image' fill className={styles.brandsImg} />
        </div>
      </div>

      <div className={styles.imageCon}>
        <Image src='/hero.gif' alt='Hero Gif' fill className={styles.heroImage} />
      </div>

    </div>
  );
};

export default Home;