import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Link href="/favorites">
        <h1>Home</h1>
      </Link>
    </main>
  )
}
