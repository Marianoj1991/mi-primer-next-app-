import styles from './postUserInfo.module.css'

const getUserInfo = async (userId) => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})
  if (!resp.ok) {
    throw new Error('Something went wrong fetching user info')
  }

  return resp.json()
} 

export default async function PostUserInfo({userId}) {
 
  const user = await getUserInfo(userId)

  return (
    <div className={styles.infoText}>
      <span className={styles.infoTitle}>Author</span>
      <span>{user.name}</span>
    </div>
  )
}