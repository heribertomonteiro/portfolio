"use client"


import { usePathname } from "next/navigation"
import { CiMenuFries } from "react-icons/ci"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import Link from "next/link"

const links = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/about" },
    { name: "Projetos", href: "/projects" },
    { name: "Serviços", href: "/services" },
    { name: "Contato", href: "/contact" },
]

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger>
            <SheetTitle><CiMenuFries className="text-[32px] text-accent cursor-pointer" /></SheetTitle>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl text-white">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Heriberto<span className="text-accent">.</span></h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8 text-white">
                {links.map((link) => {
                    return <Link key={link.name} href={link.href} className={`${link.href === pathname && 'text-accent border-b-2 border-accent' } text-xl capitalize transition-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
        </SheetContent>
    </Sheet>
}

export default MobileNav