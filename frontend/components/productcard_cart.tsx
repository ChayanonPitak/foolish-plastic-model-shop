import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserToken from "../classes/userToken";

type ProductProps = {
    code: string;
    cartId: number;
    order?: number;
    img?: string;
};

export default function ProductCart({ code, cartId, order, img }: ProductProps) {
    var [token, setToken] = useState('')

    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') setToken(UserToken.getToken())
    },[])

    const [product,setProduct]: any = useState()
    
    useEffect(() => {
        fetch(`http://localhost:8000/product/${code}`).then((res) => res.json()).then((json) => setProduct(json))
    }, [])

    const decrease = async () => {
        await fetch(`http://localhost:8000/decrease?token=${token}&productCode=${code}`, {method: 'DELETE',mode:'cors'})
        router.reload()
    }

    const remove = async () => {
        await fetch(`http://localhost:8000/cart/remove-from-cart?token=${token}&productCode=${code}`, {method: 'DELETE',mode:'cors'})
        router.reload()
    }

    const add = async () => {
        await fetch(`http://localhost:8000/cart/add-to-cart?token=${token}&productCode=${code}&quantity=1`, {method: 'POST',mode:'cors'})
        router.reload()
    }
    return (
        <div>
            {product && <div className="w-full p-7 flex space-x-4 justify-between">
                <div className="flex space-x-4 justify-start">
                    <div className=" w-30 h-24 ring-2 ring-black"><img className="object-scale-down w-full h-full" src="https://static.wixstatic.com/media/2cd43b_6332b492c4ea4c1991bbb15b4f76343a~mv2.png/v1/fill/w_320,h_197,q_90/2cd43b_6332b492c4ea4c1991bbb15b4f76343a~mv2.png" /></div>
                    <div>
                        <p>{product.productName}</p>
                        <p>${product.buyPrice}/piece</p>
                        <p>Total: {order * product.buyPrice}</p>
                    </div>
                </div>
                <div className="space-y-2 ">
                    <div className="flex space-x-4">
                        <button className='w-8 h-8 bg-red-500 hover:bg-red-200 text-white p-1' onClick={decrease}>-</button>
                        <p>Order: {order}</p>
                        <button className='w-8 h-8 bg-green-700 hover:bg-green-400 text-white p-1' onClick={add}>+</button>
                    </div>
                    <div className="flex justify-end">
                        <button className='w-16 h-8 bg-red-700 hover:bg-red-600 text-white p-1' onClick={remove}>Delete</button>
                    </div>
                </div>

            </div>}
        </div>
        
    )
}
