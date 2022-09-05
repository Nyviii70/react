import "./secondnav.css";
import "./App.css";

import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

import { useState } from "react";

export default function SecondNav() {
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [underMenuOpen, setUnderMenuOpen] = useState(false);
    return(
        <>
        <div className="secondnav-container">
            <ul className="secondnav-lister">

                <button className="burger"><a onClick={() => setBurgerClicked(!burgerClicked)}><FaHamburger /></a></button>

                <li className="secondnav-list title"><a href="#">FOXZ</a></li>

                <div className={`secondnav-buttons ${burgerClicked ? "open" : ""}`}>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Home</a>
                        <ul className="under-secondnav-lister">
                            <li>Sous menu 1</li>
                            <li>Sous menu 2</li>
                            <li>Sous menu 3</li>
                            <li>Sous menu 4</li>
                        </ul>
                    </li>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Features <FaChevronDown /></a></li>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Mega Menu <FaChevronDown /></a></li>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Documentation <FaChevronDown /></a></li>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Download This Template</a></li>
                </div>
                
                    <li className="secondnav-list-search"><a className="secondnav-list-search" href="#">< FaSearch /></a></li>
            </ul>
        </div>
        </>
    )
}