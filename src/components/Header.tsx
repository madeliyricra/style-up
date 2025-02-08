import Link from "next/link"
import { openSans } from "@/config/fonts"
import { IoCartOutline } from "react-icons/io5"

import { CATEGORIES, MENUS, NAME } from "@/utils/constant"

export const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <section className="grid grid-cols-[auto_1fr_auto] gap-10 p-4 items-center max-w-7xl mx-auto">
                <Link href={"/"}>
                    <span
                        className={`${openSans.className} antialiased font-bold`}
                    >
                        {NAME}
                    </span>
                </Link>
                <nav className="flex gap-4 justify-center">
                    {MENUS.map((menu, index) => (
                        <Link key={index} href={menu.link}>
                            {menu.name}
                        </Link>
                    ))}
                    {CATEGORIES.map((category, index) => (
                        <Link key={index} href={category.link}>
                            {category.name}
                        </Link>
                    ))}
                </nav>
                <article className="flex justify-end gap-4">
                    <IoCartOutline className="text-2xl" />
                </article>
            </section>
        </header>
    )
}
