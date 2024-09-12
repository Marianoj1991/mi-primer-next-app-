'use client'

import { useState } from 'react'
import styles from './links.module.css'
import Navlink from './navlink/Navlink'

const links = [
  {
    title: 'Homepage',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
]

export default function Links() {
  const [isOpen, setIsOpen] = useState(false)

  const session = true
  const isAdmin = true

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink
            item={link}
            key={link.title}
          />
        ))}
        {session ? (
          <>
            {isAdmin && <Navlink item={{ title: 'Admin', path: '/admin' }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <Navlink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button onClick={() => setIsOpen((prev) => !prev)} className={styles.menuButton}>Menu</button>
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink
              item={link}
              key={link.title}
            />
          ))}
        </div>
      )}
    </div>
  )
}
