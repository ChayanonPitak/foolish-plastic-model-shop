import { useRouter } from 'next/router'

import Head from 'next/head'
import Navbar from '../../components/navbar'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Product() {
    const router = useRouter()
    const { id } = router.query

    const [orderQuantity, setOrderQuantity] = useState(0);

    return (
        <div>
            {id && <div>
                <Head>
                    <title>FOOLISH plastic model shop</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Navbar searchbar={true} navauth={true} />
                    <div className="mx-60 bg-slate-300 flex flex-wrap pt-20">
                        <div className='w-1/2 pr-4'>
                            <img className='w-full h-96 object-cover pb-7'src='https://cataas.com/cat'/>
                            <div className='text-2xl'> Product detail </div>
                            <hr className='w-full border-black'/>
                            <div className='text-xl'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi tempora, at modi est repellendus veritatis magnam numquam, ratione tenetur ipsum sint. Est sit odit blanditiis iste voluptas, beatae optio cum. </div>
                        </div>
                        <div className='w-1/2 pl-4'>
                            <div className='text-4xl'> Product name </div>
                            <div className='text-2xl pb-20'> Product vender </div> 
                            <div className='h-10 flex flex-no-wrap mb-5'>
                                <FontAwesomeIcon icon={faDollarSign} className='h-full'/>
                                <div className='w-5'/>
                                <div className='text-2xl'> Price </div> 
                            </div>
                            <div className='h-10 flex flex-no-wrap mb-1'>
                                <div className='text-2xl'> Quantity </div> 
                                <div className='w-5'/>
                                <input type="number" min={1} max={999} onChange={e => setOrderQuantity(parseInt(e.target.value))} className='p-1'/>
                            </div>
                            <div className='text-m pb-20'> Quantity in stock {orderQuantity} </div> 
                            <button className='w-full h-20 bg-green-900 hover:bg-green-600 text-white p-5 flex flex-no-wrap justify-center' type="button">
                                <FontAwesomeIcon icon={faCartPlus} className='h-full'/>
                                <div className='w-5'/>
                                <div className='text-5xl'> Add to cart </div> 
                                </button>
                        </div>
                    </div>
                </main>
            </div>}
            {!id && <div>
                <Head>
                    <title>FOOLISH plastic model shop</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Navbar searchbar={true} navauth={true} />
                    <div className="text-4xl">NOT FOUND</div>
                    <div className="text-2xl">Return to <Link className="text-blue-700" href="/">Home</Link></div>
                </main>
            </div>}
        </div>
    )
}
