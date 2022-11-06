import { useCallback, useRef, useState } from 'react'

export default function Searchbar() {
    const searchRef = useRef(null)
    const [query, setQuery] = useState('')

    const onChange = useCallback((e) => {
        setQuery(e.target.value)
    }, [])

    const onSubmit = () => alert(`Searching ${query}`)

    return (
        <form className='w-1/2 bg-slate-800 h-full' ref={searchRef} onSubmit={onSubmit}>
            <input
                className='w-3/4 p-1'
                type='search'
                placeholder='Search...'
                value={query}
                onChange={onChange}
            />
            <input className='w-1/4 bg-sky-700 hover:bg-sky-400 text-white p-1' type="submit" value="Search"/>
        </form >
    )
}