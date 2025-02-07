import { MENUS } from "@/config/data";
import { openSans } from "@/config/fonts"
import Link from "next/link"

import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <section className="grid grid-cols-[auto_1fr_auto] gap-10 p-4 items-center max-w-7xl mx-auto">
                <Link href={'/'}>
                    <span className={`${openSans.className} antialiased font-bold`}>StyleUp</span>
                </Link>
                <nav className="flex gap-4 justify-center">
                    {MENUS.map((menu, index) => (
                        <Link key={index} href={menu.link}>{menu.name}</Link>
                    ))}
                </nav>
                <article className="flex justify-end gap-4">
                    <IoSearchOutline className="text-2xl" />
                    <Link href={'/cart'}>
                        <IoCartOutline className="text-2xl" />
                    </Link>
                </article>
            </section>
        </header>
    )
}