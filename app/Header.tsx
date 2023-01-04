import Link from "next/link";
import React from "react";

function Header() {
    return(
        <header className="p-5 bg-blue-500">
            <Link href="/" className="px-2 py-1 bg-white text-vlue-500 rounded-lg">
                Home
            </Link>
            </header>
    )
}

export default Header;