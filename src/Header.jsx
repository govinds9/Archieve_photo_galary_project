import React from "react";
import Nasa from '../src/nasa.png'

function Header(){
    return(
        <div className=" flex flex-col justify-center items-center gap-4 bg-gray-600">
            <img src={Nasa} alt="nasa logo"className="nasa-logo"></img>
            <h1 className="Header-txt text-black text-xl">NASA's Photo Archive</h1>
        </div>
    )
}

export default Header;
