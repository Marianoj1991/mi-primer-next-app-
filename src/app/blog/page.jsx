import BlogCard from '@/components/blogCard/BlogCard'
import styles from './blog.module.css'

const getPosts = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  if (!resp.ok) {
    throw new Error('Something went wrong fetching data')
  }

  return resp.json()
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  )
}
