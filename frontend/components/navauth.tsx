import Link from 'next/link'

export default function NavAuth() {

    return (
        <div className='w-1/6 h-full'>
            <Link href="/login">
                <button className='w-full bg-sky-700 hover:bg-sky-400 text-white p-1' type="button">Log in</button>
            </Link>
        </div>
    )
}