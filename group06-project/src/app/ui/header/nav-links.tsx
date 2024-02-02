"use client";
// import { dataHeader } from "./header.data"
import { usePathname } from 'next/navigation';
import Link from "next/link"
import clsx from 'clsx';
    
const dataHeader = [
    {
        id: 1,
        name: "Catalog",
        href: "#catalog"
    },
    {
        id: 1,
        name: "Sellers",
        href: "#sellers"
    },
    {
        id: 1,
        name: "About Us",
        href: "#about"
    },

]
export default function  NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {dataHeader.map((link) => {
                
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                    
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}