import BlogCard from '@/components/blogCard/BlogCard'
import styles from './blog.module.css'
// import { getPosts } from '@/lib/data'

const getPosts = async () => {
  const resp = await fetch(`http://localhost:3000/api/blog`)
  if (!resp.ok) {
    throw new Error('Something went wrong fetching data')
  }

  return resp.json()
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts ? (
        posts.map((post) => (
          <div
            key={post.id}
            className={styles.post}
          >
            <BlogCard post={post} />
          </div>
        ))
      ) : (
        <div>Hola Mundo</div>
      )}
    </div>
  )
}
