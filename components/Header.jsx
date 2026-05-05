import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

//components
import Nav from "@/components/Nav"
import MobileNav from "@/components/MobileNav"

const Header = () => {
    return (
    <header className="py-8 xl:py-12 text-white">
        
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link href="/">
                <h1 className="text-4xl font-semibold">Heriberto <span className="text-accent">.</span></h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Contate-me</Button>
                </Link>
            </div>

            {/* Mobile Nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
)
}

export default Header