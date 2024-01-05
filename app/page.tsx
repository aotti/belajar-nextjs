import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1> Homepage </h1>
      <br />
      <Link href="/posts"> Post Page </Link>
      <br />
      <Link href="/albums"> Album Page </Link>
    </>
  )
}
