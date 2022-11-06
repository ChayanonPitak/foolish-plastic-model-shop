import Searchbar from "./searchbar"
import NavAuth from "./navauth"

type NavbarProps = {
  searchbar?: boolean;
  navauth?: boolean;
};

export default function Navbar({searchbar, navauth}: NavbarProps) {
  return (
    <div className="w-full bg-slate-800 h-min p-7 flex justify-between">
        <a className="text-3xl text-white" href="."> Foolish Shop </a>
        {searchbar ? <Searchbar/> : null}
        {navauth ? <NavAuth/> : null}
    </div>
  )
}