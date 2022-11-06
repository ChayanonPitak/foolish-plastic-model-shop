import Head from 'next/head'
import Navbar from '../components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOOLISH plastic model shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar searchbar={true} navauth={true}/>
      </main>

    </div>
  )
}
