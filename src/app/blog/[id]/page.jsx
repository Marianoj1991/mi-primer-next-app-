import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUserInfo from '@/components/postUserInfo/PostUserInfo'
import { Suspense } from 'react'

const getPost = async (id) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'})
  if (!resp.ok) {
    throw new Error('Something went wrong fetching data')
  }

  return resp.json()
}

export default async function SinglePostPage({ params }) {
  const { id } = params
  const post = await getPost(id)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src='https://images.pexels.com/photos/27501815/pexels-photo-27501815/free-photo-of-madera-paisaje-naturaleza-agua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='SinglePostCard'
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>{post.title}</h2>

        <div className={styles.info}>
          <div className={styles.avatarImgCont}>
            <Image
              src='https://images.pexels.com/photos/28082020/pexels-photo-28082020/free-photo-of-de-buen-tono.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              fill
              alt='Avatar single post card image'
              className={styles.imgAvatar}
            />
          </div>

          <Suspense fallback={<div>Loading...</div>}>
            <PostUserInfo userId={post.userId} />
          </Suspense>

          <div className={styles.infoText}>
            <span className={styles.infoTitle}>Published</span>
            <span>11.11.2024</span>
          </div>
        </div>

        <p className={styles.desc}>{post.body}</p>
      </div>
    </div>
  )
}
