import Head from 'next/head'
import Navbar from '../components/navbar'
import ProductCard from '../components/productcard'
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
        <div className='flex'>        
          <ProductCard name = {"Ford Mustang"} price ={100} stock ={1}/>
          <ProductCard name = {"Ford Mustang"} price ={100} stock ={1}/>
        </div>
      </main>
    </div>
  )
}
