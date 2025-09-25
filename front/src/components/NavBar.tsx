import Link from "next/link";
import NAVITEMS from "@/helpers/NavBarItems";

const NavBar = () => {
    return (
        <nav className="width-100 flex justify-between items-center">
            <ul>
                <li><Link href={NAVITEMS.HOME}>Home</Link></li>
                <li><Link href={NAVITEMS.DASHBOARD}>Dashboard</Link></li>
                <li><Link href={NAVITEMS.CART}>Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;