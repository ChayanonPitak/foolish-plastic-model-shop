import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import UserToken from '../classes/userToken'

export default function NavAuth() {
    var [token, setToken] = useState('')
    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') setToken(UserToken.getToken())
    }, [])
    
    const logOut = () =>{
        UserToken.setToken('')
        router.reload()
    } 

    return (
        <div className='w-1/6 h-full'>
            { !token && 
                <div className="flex justify-end">
                    <Link href="/login">
                        <button className='w-full bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Log in</button>
                    </Link> 
                    <div className='w-1'></div>
                    <Link href="/register">
                        <button className='w-full bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Register</button>
                    </Link> 
                </div>
            }
            { token && 
                <div className="flex ">
                    <Link href="/cart">
                        <button className='max-w-md bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Cart</button>
                    </Link> 
                    <div className='w-1'></div>
                    <Link href="/account">
                        <button className='max-w-md bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Account</button>
                    </Link> 
                    <div className='w-1'></div>
                    <button className='max-w-md bg-sky-700 hover:bg-sky-400 text-white p-1' type="button" onClick={logOut}>Log out</button>
                </div>
            }
        </div>
    )
}