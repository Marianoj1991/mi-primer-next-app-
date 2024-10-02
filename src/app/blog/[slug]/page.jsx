import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUserInfo from '@/components/postUserInfo/PostUserInfo'
import { Suspense } from 'react'
import { getPostById } from '@/lib/data'

// const getPost = async (id) => {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache: 'no-store'})
//   if (!resp.ok) {
//     throw new Error('Something went wrong fetching data')
//   }

//   return resp.json()
// }

export default async function SinglePostPage({ params }) {
  const { slug } = params
  // DATA WITHOUT AN API
  const post = await getPostById(slug)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={post.img}
          fill
          className={styles.image}
          alt='Post img'
        />
      </div>
      <div className={styles.information}>
        <h2 className={styles.title}>{post?.title}</h2>

        <div className={styles.info}>

          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUserInfo userId={post?.userId} />
            </Suspense>
          )}

          <div className={styles.infoText}>
            <span className={styles.infoTitle}>Published</span>
            <span>{post.createdAt.toString().slice(0,16)}</span>
          </div>
        </div>

        <p className={styles.desc}>{post?.body}</p>
      </div>
    </div>
  )
}
