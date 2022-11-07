import Head from 'next/head'
import { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import ProductCard from '../components/productcard'

export default function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/product").then((res) => res.json()).then((json) => {console.log(json); setProducts(json) })
    }, [])


    const items: JSX.Element[] = []
    for (const product of products) {
        items.push(<ProductCard code={product.productCode} name={product.productName} price={product.buyPrice} stock={product.quantityInStock}/>)
    }

    return (
        <div>
            <Head>
                <title>FOOLISH plastic model shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar searchbar={true} navauth={true} />
                <div className=" flex flex-wrap my-10 justify-center" >
                    {items}
                </div>
            </main>
        </div>
    )
}
