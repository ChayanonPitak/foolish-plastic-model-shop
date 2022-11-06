import Head from 'next/head'
import Navbar from '../components/navbar'
import ProductCard from '../components/productcard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOOLISH plastic model shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar searchbar={true} navauth={true}/>
        <ProductCard name = {"Test"} price ={100} stock ={1}/>
      </main>

    </div>
  )
}
