import { useRouter } from 'next/router'

import Head from 'next/head'
import Navbar from '../../components/navbar'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import UserToken from '../../classes/userToken'

export default function Product() {
    var [token, setToken] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') setToken(UserToken.getToken())
    }, [])

    const router = useRouter()
    const { id } = router.query

    const [orderQuantity, setOrderQuantity] = useState(0);

    const [image, setImage] = useState('');
    useEffect(() => {
        fetch("https://nekos.moe/api/v1/random/image?nsfw=false").then((res) => res.json()).then((json) => {setImage(json.images[0].id)})
    }, [])

    const [product, setProduct]: any = useState();
    useEffect(() => {
        fetch(`http://localhost:8000/product/${id}`).then((res) => res.json()).then((json) => {setProduct(json)})
    }, [])

    const addToCart = () => {
        fetch(`http://localhost:8000/cart/add-to-cart?token=${token}&productCode=${id}&quantity=${orderQuantity}`, {method: 'POST',mode:'cors'})
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                if (json.error) return
                else if (json.status === 'OK') router.push('/cart')
            })
    }

    return (
        <div>
            {id && product && <div>
                <Head>
                    <title>{product.productName} - Foolish shop</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Navbar searchbar={true} navauth={true} />
                    <div className="mx-60 flex flex-wrap pt-20">
                        <div className='w-1/2 pr-4'>
                            <img className='w-full h-96 object-cover pb-7'src={`https://nekos.moe/image/${image}`}/>
                            <div className='text-2xl'> Product detail </div>
                            <hr className='w-full border-black'/>
                            <div className='text-xl'>{product.productDescription}</div>
                        </div>
                        <div className='w-1/2 pl-4'>
                            <div className='text-4xl'>{product.productName}</div>
                            <div className='text-2xl pb-20'> {product.productVendor}</div> 
                            <div className='h-10 flex flex-no-wrap mb-5'>
                                <FontAwesomeIcon icon={faDollarSign} className='h-full'/>
                                <div className='w-5'/>
                                <div className='text-2xl'> {product.buyPrice}$ </div> 
                            </div>
                            <div className='h-10 flex flex-no-wrap mb-1'>
                                <div className='text-2xl'> Quantity </div> 
                                <div className='w-5'/>
                                <input type="number" min={product.quantityInStock > 0 ? 1 : 0} max={product.quantityInStock} onChange={e => setOrderQuantity(parseInt(e.target.value))} disabled={product.quantityInStock <= 0} className='shadow appearance-none border rounded max-w-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
                            </div>
                            <div className='text-m pb-20'> Quantity in stock {product.quantityInStock} </div> 
                            {token && product.quantityInStock > 0 && <button className='w-full h-20 bg-green-900 hover:bg-green-600 disabled:bg-gray-600 text-white p-5 flex flex-no-wrap justify-center' onClick={addToCart} type="button" disabled={orderQuantity<=0}>
                                <FontAwesomeIcon icon={faCartPlus} className='h-full'/>
                                <div className='w-5'/>
                                <div className='text-5xl'> Add to cart </div> 
                            </button>}
                            {token && product.quantityInStock <= 0 && <button className='w-full h-20 bg-gray-600  text-white p-5 flex flex-no-wrap justify-center' type="button" disabled={orderQuantity<=0}>
                                <div className='text-5xl'> Out of stock</div> 
                            </button>}
                            
                        </div>
                    </div>
                </main>
            </div>}
            {(!id || !product) && <div>
                <Head>
                    <title>FOOLISH plastic model shop</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <Navbar searchbar={true} navauth={true} />
                    <div className="pt-20 mx-60 text-4xl">NOT FOUND</div>
                    <div className="mx-60 text-2xl">Return to <Link className="text-blue-700" href="/">Home</Link></div>
                </main>
            </div>}
        </div>
    )
}
