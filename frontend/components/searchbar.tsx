import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Searchbar() {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const onSubmit = (e) => {
        router.route = '/'
        router.query.search = query
        router.push(router)
        e.preventDefault();
    }

    return (
        <form className='w-1/2 bg-slate-800 h-full' onSubmit={onSubmit}>
            <input
                className='w-3/4 p-1'
                type='search'
                placeholder='Search...'
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <input className='w-1/4 bg-sky-700 hover:bg-sky-400 text-white p-1' type="submit" value="Search"/>
        </form >
    )
}