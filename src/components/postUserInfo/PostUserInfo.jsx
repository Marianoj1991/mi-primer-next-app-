import { getUser } from '@/lib/data'
import styles from './postUserInfo.module.css'
import Image from 'next/image'

// const getUserInfo = async (userId) => {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})
//   if (!resp.ok) {
//     throw new Error('Something went wrong fetching user info')
//   }

//   return resp.json()
// }

export default async function PostUserInfo({ userId }) {
  // WITH AN API
  // const user = await getUserInfo(userId)

  // WITHOUT AN API

  const user = await getUser(userId)

  return (
    <>
      <div className={styles.avatarImgCont}>
        <Image
          src={user.img ? user.img : './noavatar.png'}
          fill
          alt='Avatar single post card image'
          className={styles.imgAvatar}
        />
      </div>
      <div className={styles.infoText}>
        <span className={styles.infoTitle}>Author</span>
        <span>{user?.userName}</span>
      </div>
    </>
  )
}
