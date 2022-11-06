import { useEffect, useState } from 'react';
import Head from 'next/head'
import Navbar from '../../components/navbar';
import Link from 'next/link';
import UserToken from '../../classes/userToken';

export default function Login() {
    var [token, setToken] = useState('')

    useEffect(() => {
        if (typeof window !== 'undefined') setToken(UserToken.getToken())
    }, [])

    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isOtpRequest, setIsOtpRequest] = useState(false)
    const [otp, setOtp] = useState('')

    const onSubmit = () => {
        if (otp !== '111111') setError('Incorrect OTP')
        else alert(`Register with ${name} ${email} ${username} ${password} ${otp}`)
    }
    return (
        <div>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!token &&
                <div>
                    <Navbar searchbar={true} />
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <form onSubmit={onSubmit} className="items-center bg-white shadow-md rounded m-4 px-8 pt-6 pb-8 g-1">
                            <div className={`bg-red-200 text-xl ${error.length > 0 ? `p-5` : ``}`}>{error}</div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    E-mail
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Username
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    OTP
                                </label>
                                <div className='flex'>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="OTP" onChange={e => setOtp(e.target.value)} disabled={!isOtpRequest} />
                                    <button type='button' onClick={() => setIsOtpRequest(true)}>Request OTP</button>
                                </div>
                            </div>
                            <input className='text-4xl w-full bg-sky-700 hover:bg-sky-400 text-white p-5' type="submit" value="Register" />
                            <div>Already have an account? <Link className="text-blue-700" href="/login">Log in</Link></div>
                        </form>
                    </div>
                </div>
            }
            {token &&
                <div>
                    <Navbar searchbar={true} navauth={true}/>
                    <div className="pt-20 mx-60 text-4xl">You are already logged in</div>
                    <div className="mx-60 text-2xl">Return to <Link className="text-blue-700" href="/">Home</Link></div>
                </div>
            }
        </div>

    )
}
