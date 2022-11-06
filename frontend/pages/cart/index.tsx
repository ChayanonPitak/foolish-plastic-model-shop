import Head from 'next/head'
import Navbar from '../../components/navbar'
import ProductCart from '../../components/productcard_cart'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCartPlus, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'
import UserToken from '../../classes/userToken'
import Link from 'next/link'

export default function Home() {
    var token:string

    useEffect(() => {
        if (typeof window !== 'undefined') token = UserToken.getToken()
    }, [])
    
    const items: JSX.Element[] = []
    for (let i = 0; i < 10; i++) {
        items.push(<ProductCart name={"Ford Mustang"} price={100 * i} order={i} />)
    }

    const checkout = () => {}

    return (
        <div>
            <Head>
                <title>Cart</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar searchbar={false} navauth={true} />

                {token && <div className="mx-60 flex pt-20">
                    <div className="w-2/3 pr-2 flex flex-row flex-wrap " >
                        {items}
                    </div>
                    <div className="w-1/3 p-2 border border-black h-36">
                        <div className='h-10 flex flex-no-wrap mb-5'>
                            <FontAwesomeIcon icon={faDollarSign} className='h-full' />
                            <div className='w-5' />
                            <div className='text-2xl'> Total Price {100000}</div>
                        </div>
                        <hr className='w-full border-black'/>
                        <button className='w-full h-14 bg-green-900 hover:bg-green-600 text-white p-3 mt-2 flex flex-no-wrap justify-center' type="button" onClick={checkout}>
                            <FontAwesomeIcon icon={faCreditCard} className='h-full'/>
                            <div className='w-5'/>
                            <div className='text-xl'> Add to cart </div> 
                        </button>
                    </div>
                </div>}
                {!token &&
                    <div className="text-2xl">Please <Link className="text-blue-700" href="/login">Log in</Link> to view the cart</div>
                }

            </main>
        </div>
    )
}
