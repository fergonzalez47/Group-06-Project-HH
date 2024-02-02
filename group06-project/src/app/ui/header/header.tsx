import  Link from "next/link"
import Image from "next/image"
import NavLinks from "./nav-links"

export default function Header() {

    return <header>
        <nav className="grid-colums">
            <Link href="/">
                <Image src="/logo.webp"
                    width={150}
                    height={150}
                    alt="Logo for the Site Handcrafted Haven"
                />
            </Link>
            <div>
                <NavLinks/>
            </div>
  
        </nav>
    </header>
}