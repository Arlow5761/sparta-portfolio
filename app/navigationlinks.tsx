'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";

class LinkType {
    name: string = "";
    address: string = "";
    icon: string = "";
}

export const links : LinkType[] = [
    {
        name: "Profile",
        address: "/",
        icon: "account_circle"
    },
    {
        name: "Hobbies",
        address: "/hobbies",
        icon: "celebration"
    },
    {
        name: "Skills",
        address: "/skills",
        icon: "handyman"
    },
    {
        name: "Projects",
        address: "/projects",
        icon: "work"
    },
    {
        name: "Achievements",
        address: "/achievements",
        icon: "trophy"
    }
];

function NavigationLink(link : LinkType) {
    const pathname = usePathname();
    let style = "flex flex-row text-lg justify-center text-center items-center h-20 w-40 p-2 gap-2 landscape:text-left landscape:w-full";
    let textStyle = "flex flex-row items-center gap-2";

    if (pathname === link.address) {
        style = style + " bg-white"
        textStyle = textStyle + " text-black"
    };

    return (
        <Link key={link.name} href={link.address} className={textStyle}>
            <div className={style}>
                <span className="material-symbols-outlined text-xl">{link.icon}</span>
                {link.name}
            </div>
        </Link>
    );
}

export function NavigationLinks() {
    const linkItems = links.map(NavigationLink);

    return (
        <div className="flex justify-center flex-wrap flex-grow bg-gray-900 w-full max-w-full h-fit landscape:flex-col landscape:flex-nowrap landscape:w-64 landscape:h-full">
            {linkItems}
        </div>
    );
}
