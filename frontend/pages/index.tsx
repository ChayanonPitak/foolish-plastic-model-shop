import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOOLISH plastic model shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
      </main>

    </div>
  )
}
