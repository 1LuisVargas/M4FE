import Link from "next/link";
import NavItems from "@/helpers/NavBarItems";

const NavBar = () => {
    return (
        <nav className="p-4 bg-slate-600">
            <ul className="flex gap-4">
                <li className="font-bold"><Link href={NavItems.HOME}>Home</Link></li>
                <li className="font-bold"><Link href={NavItems.DASHBOARD}>Dashboard</Link></li>
                <li className="font-bold"><Link href={NavItems.CART}>Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;