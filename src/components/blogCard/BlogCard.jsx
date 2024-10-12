import Image from 'next/image'
import styles from './blogCard.module.css'
import Link from 'next/link'

export default function BlogCard({post}) {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgCont}>
          <Image
            src={post.img}
            alt='Post card'
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}> {post.createdAt.toString().slice(4,16)} </span>
      </div>
      <div className={styles.bottom}>
        <h2>{post.title}</h2>
        <p className={styles.desc} >{post.body}</p>
        <Link href={`/blog/${post._id}`}>
          <button className={styles.button}>READ MORE</button>
        </Link>
      </div>
    </div>
  )
}