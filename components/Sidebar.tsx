"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    return(
        <div className="">
            <div>
                <Link href="/dashboard" className="flex items-center pl-3 md-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image src="/logo.png" fill alt="logo"/>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;