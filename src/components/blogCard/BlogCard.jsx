import Image from 'next/image'
import styles from './blogCard.module.css'
import Link from 'next/link'

export default function BlogCard({post}) {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgCont}>
          <Image
            src='https://images.pexels.com/photos/15442329/pexels-photo-15442329/free-photo-of-mascota-sentado-rock-roca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Post card'
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>12/10/2024</span>
      </div>
      <div className={styles.bottom}>
        <h2>{post.title}</h2>
        <p className={styles.desc} >{post.body}</p>
        <Link href={`/blog/${post.id}`}>
          <button className={styles.button}>READ MORE</button>
        </Link>
      </div>
    </div>
  )
}