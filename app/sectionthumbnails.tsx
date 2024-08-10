'use client';

import {links} from "./navigationlinks"
import { usePathname } from "next/navigation";

export function SectionThumbnails() {
    const pathname = usePathname();
    let icon = "error";

    for (const link of links) {
        if (pathname === link.address) {
            icon = link.icon;
            break;
        }
    }

    return (
        <div className="flex flex-row overflow-clip h-full w-full justify-center items-center gap-[6vw] landscape:flex-col landscape:gap-[10vh]">
            <div className="material-symbols-outlined text-center text-white content-center text-[20vh] min-h-[20vh] min-w-[20vh] landscape:min-h-[20vw] landscape:min-w-[20vw] landscape:text-[20vw]">
                {icon}
            </div>
        </div>
    );
}
