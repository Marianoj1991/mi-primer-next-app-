"use client"
import Link from "next/link";

const Error = () => {
  return (
    <div>
      <h2>Sorry, the page your are looking for does not exist</h2>
      <Link href={'/'}>Go to home</Link>
    </div>
  )
}

export default Error