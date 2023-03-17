import React from "react";

const Header =()=>{
    return(
        <div className="header w-full flex p-4 bottom-1 items-center" style={{borderBottom:'2px solid white'}}>
            <div className="logo text-white text-3xl">We don't have a logo</div>
            <nav className="ml-auto">
                <ul className="text-white text-2xl flex ml-auto">
                    <li className="p-2 m-2">We</li>
                    <li className="p-2 m-2">You</li>
                    <li className="p-2 m-2">Others</li>
                </ul>
            </nav>

        </div>
    )
}
export default Header