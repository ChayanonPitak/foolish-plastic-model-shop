import Link from 'next/link'
import { useEffect } from 'react'
import UserToken from '../classes/userToken'

export default function NavAuth() {
    var token:string

    useEffect(() => {
        if (typeof window !== 'undefined') token = UserToken.getToken()
    }, [])
    

    return (
        <div className='w-1/6 h-full'>
            { !token && 
                <Link href="/login">
                    <button className='w-full bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Log in</button>
                </Link> 
            }
            { token && 
                <div className="flex">
                    <Link href="/cart">
                        <button className='max-w-md bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Cart</button>
                    </Link> 
                    <div className='w-1'></div>
                    <Link href="/account">
                        <button className='max-w-md bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Account</button>
                    </Link> 
                </div>
            }
        </div>
    )
}