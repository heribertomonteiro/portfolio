"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Projetos", href: "/projects" },
    { name: "Serviços", href: "/services" },
    { name: "Contato", href: "/contact" },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link href={link.href} key={index} className={`${link.href === pathname ? 'text-accent border-b-2 border-accent' : 'text-white'} capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
}

export default Nav