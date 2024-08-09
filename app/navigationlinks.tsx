'use client';

import Link from "next/link";
import Image from "next/image";

class LinkType {
    name: string = "";
    address: string = "";
}

function NavigationLink(link : LinkType) {
    return (
        <div className="flex flex-row text-2xl text-center items-center h-20 max-w-80 p-2 landscape:text-left">
            <Link href={link.address} className="flex flex-row items-center" >
                {link.name}
            </Link>
        </div>
    );
}

export function NavigationLinks() {
    const links : LinkType[] = [
        {
            name: "Profile",
            address: "/"
        },
        {
            name: "Hobbies",
            address: "/hobbies"
        },
        {
            name: "Skills",
            address: "/skills"
        },
        {
            name: "Projects",
            address: "/projects"
        },
        {
            name: "Achievements",
            address: "/achievements"
        }
    ];

    const linkItems = links.map((link) => {
        return NavigationLink(link);
    });

    return (
        <div className="flex justify-center bg-gray-900 w-full max-w-full h-20 landscape:flex-col landscape:w-64 landscape:h-full">
            {linkItems}
        </div>
    );
}
