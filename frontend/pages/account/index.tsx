import { useEffect, useState } from 'react';
import Head from 'next/head'
import Navbar from '../../components/navbar';
import UserToken from '../../classes/userToken';
import Link from 'next/link';

export default function Login() {
    var token: string

    useEffect(() => {
        if (typeof window !== 'undefined') token = UserToken.getToken()
    }, [])

    const [error, setError] = useState('')
    const [contactName, setContactName] = useState('')
    const [phone, setPhone] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [postalCode, setPostalCode] = useState(0)

    const onSubmit = () => {
        alert(`Edit with ${contactName} ${phone} ${customerName} ${address1} ${address2} ${country} ${city} ${state} ${postalCode}`)
    }
    return (
        <div>
            {token &&
                <div>
                    <Head>
                        <title>Edit</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Navbar searchbar={true} />
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <form onSubmit={onSubmit} className="items-center bg-white shadow-md rounded m-4 px-8 pt-6 pb-8 g-1">
                            <div className={`bg-red-200 text-xl ${error.length > 0 ? `p-5` : ``}`}>{error}</div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Contact name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Contact name" onChange={e => setContactName(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Phone number
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" placeholder="Phone number" onChange={e => setPhone(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Customer name
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Customer name" onChange={e => setCustomerName(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Address line 1
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Address line 1" onChange={e => setAddress1(e.target.value)} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Address line 2
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Address line 2" onChange={e => setAddress2(e.target.value)} />
                            </div>
                            <div className='flex mb-4'>
                                <div className='mr-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        Country
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Country" onChange={e => setCountry(e.target.value)} />
                                </div>
                                <div className='mx-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        City
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="City" onChange={e => setCity(e.target.value)} />
                                </div>
                                <div className='ml-1'>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                        State
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="State" onChange={e => setState(e.target.value)} />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Postal code
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Postal code" onChange={e => setPostalCode(parseInt(e.target.value))} />
                            </div>
                            <input className='text-xl w-full bg-sky-700 hover:bg-sky-400 text-white p-2' type="submit" value="edit" />
                        </form>
                    </div>
                </div>
            }
            {!token &&
                <div>
                    <Head>
                        <title>Forbidden</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <div className="mx-60 text-2xl pt-5">Please <Link className="text-blue-700" href="/login">Log in</Link> to access the page</div>
                </div>
            }
        </div>
    )
}
