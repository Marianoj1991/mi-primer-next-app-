'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NavigationPage() {

  const router = useRouter()

  const handleClick = () => {
    router.replace('/')
  }

  return (
    <>
      <Link
        href='/'
        prefetch={true}
      >
        page
      </Link>
      <button onClick={handleClick}>press here</button>
    </>
  )
}
