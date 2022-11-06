import Searchbar from "./searchbar"
import NavAuth from "./navauth"

export default function Navbar() {
  return (
    <div className="w-full bg-slate-800 h-min p-7 flex justify-between">
        <a className="text-3xl text-white" href="."> Foolish Shop </a>
        <Searchbar/>
        <NavAuth/>
    </div>
  )
}
