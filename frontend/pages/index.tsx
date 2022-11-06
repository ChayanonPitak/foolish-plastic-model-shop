import Head from 'next/head'
import Navbar from '../components/navbar'
import ProductCard from '../components/productcard'

export default function Home() {
  const items: JSX.Element[] = []
  for (let i = 0; i<5; i++) {
    items.push(<ProductCard name = {"Ford Mustang"} price ={100*i} stock ={i}/>)
  }

  return (
    <div>
      <Head>
        <title>FOOLISH plastic model shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar searchbar={true} navauth={true}/>
        <div className="w-full flex flex-wrap" >        
          {items}
        </div>
      </main>
    </div>
  )
}
