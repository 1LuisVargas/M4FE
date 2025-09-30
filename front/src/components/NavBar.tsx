import Link from "next/link";
import NavItems from "@/helpers/NavBarItems";

const NavBar = () => {
    return (
        <nav className="width-100 flex justify-between items-center">
            <ul>
                <li><Link href={NavItems.HOME}>Home</Link></li>
                <li><Link href={NavItems.DASHBOARD}>Dashboard</Link></li>
                <li><Link href={NavItems.CART}>Cart</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;