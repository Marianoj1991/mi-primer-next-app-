import Link from "next/link"

export default function NotFound() {
  return (
    <div>
      <h2>Sorry, the page you are lookgin for does not exist</h2>
      <Link href={'/'} >Go to home</Link>
    </div>
  )
}