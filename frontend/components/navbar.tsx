import Searchbar from "./searchbar"
import NavAuth from "./navauth"
import Link from 'next/link'

type NavbarProps = {
  searchbar?: boolean;
  navauth?: boolean;
};

export default function Navbar({searchbar, navauth}: NavbarProps) {
  return (
    <div className="w-full bg-slate-800 h-min p-7 flex justify-between">
        <Link href="/" className="text-3xl text-white">Foolish Shop </Link>
        {searchbar ? <Searchbar/> : <div className='w-1/2 h-full'/>}
        {navauth ? <NavAuth/> : <div className='w-1/6 h-full'/>}
    </div>
  )
}