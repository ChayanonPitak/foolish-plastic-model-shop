import Head from 'next/head'
import Navbar from '../../components/navbar'
import ProductCart from '../../components/productcard_cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCartShopping, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import UserToken from '../../classes/userToken'
import Link from 'next/link'

export default function Home() {
    const [token, setToken] = useState('')

    const [products, setProducts] = useState([])

    useEffect(() => {
        if (typeof window !== 'undefined') setToken(UserToken.getToken())
    },[])

    useEffect(() => {
        fetch(`http://localhost:8000/cart?token=${token}`).then((res) => res.json()).then((json) =>{setProducts(json)})
    },[token])
    
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        const items: JSX.Element[] = []
        products.forEach((product, i) => {
            items.push(<ProductCart key={i} code={product.productCode} cartId={product.id} order={product.quantity}/>)})
        setCartItems(items)
    },[products])


    const checkout = () => {}

    return (
        <div>
            <Head>
                <title>Cart</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar searchbar={false} navauth={true} />
                <div className='mx-60 w-full pt-5 flex flex-no-wrap justify-start h-24'>
                    <FontAwesomeIcon icon={faCartShopping} className='h-full'/>
                    <div className='w-5'/>
                    <div className='text-4xl h-full'> Your cart </div> 
                </div>

                {token && <div className="mx-60 flex pt-5">
                    <div className="w-2/3 pr-2 flex flex-row flex-wrap " >
                        {cartItems.length == 0 && 
                            <div>
                                <div className="text-2xl pt-5">You don't have any items in the cart <Link className="text-blue-700" href="/">Find Some!</Link></div>
                            </div>}
                        {cartItems}
                    </div>
                    <div className="w-1/3 p-2 border border-black h-36">
                        <div className='h-10 flex flex-no-wrap mb-5'>
                            <FontAwesomeIcon icon={faDollarSign} className='h-full' />
                            <div className='w-5' />
                            <div className='text-2xl'> Total Price {0}</div>
                        </div>
                        <hr className='w-full border-black'/>
                        <button className='w-full h-14 bg-green-900 hover:bg-green-600 disabled:bg-gray-600 text-white p-3 mt-2 flex flex-no-wrap justify-center' type="button" onClick={checkout} disabled={products.length<=0}>
                            <FontAwesomeIcon icon={faCreditCard} className='h-full'/>
                            <div className='w-5'/>
                            <div className='text-xl'> Checkout </div> 
                        </button>
                    </div>
                </div>}
                {!token &&
                    <div className="mx-60 text-2xl pt-5">Please <Link className="text-blue-700" href="/login">Log in</Link> to view the cart</div>
                }

            </main>
        </div>
    )
}
