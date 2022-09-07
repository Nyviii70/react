import "./secondnav.css";
import "./App.css";

import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

import { useState } from "react";

export default function SecondNav() {
    const [burgerClicked, setBurgerClicked] = useState(false);
    const [featureUnderMenuOpen, setFeatureUnderMenuOpen] = useState(false);
    const [underMenuOpen, setUnderMenuOpen] = useState(false);
    return(
        <>
        <div className="secondnav-container">
            <ul className="secondnav-lister">

                <button className="burger"><a onClick={() => setBurgerClicked(!burgerClicked)}><FaHamburger /></a></button>

                <li className="secondnav-list title"><a href="#">FOXZ</a></li>

                <div className={`secondnav-buttons ${burgerClicked ? "open" : ""}`}>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Home</a></li>
                    <li className="secondnav-list list"><a className="secondnav-list-a" onMouseOver={() => setFeatureUnderMenuOpen(!featureUnderMenuOpen)} href="#">Features <FaChevronDown /></a></li>
                        <ul className={`features-under-secondnav-lister ${featureUnderMenuOpen ? "open" : ""}`}>
                            <li className="features-under-secondnav-list features-under-list"><a className="features-under-secondnav-list-a" href="#">Multi Dropdown</a></li>
                            <li className="features-under-secondnav-list features-under-list"><a className="features-under-secondnav-list-a" href="#">ShortCodes</a></li>
                            <li className="features-under-secondnav-list features-under-list"><a className="features-under-secondnav-list-a" href="#">SiteMap</a></li>
                            <li className="features-under-secondnav-list features-under-list"><a className="features-under-secondnav-list-a" href="#">Error Page</a></li>
                        </ul>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Mega Menu <FaChevronDown /></a></li>
                    <li className="secondnav-list list"><a className="secondnav-list-a" onMouseOver={() => setUnderMenuOpen(!underMenuOpen)} href="#">Documentation <FaChevronDown /></a></li>
                        <ul className={`doc-under-secondnav-lister ${underMenuOpen ? "open" : ""}`}>
                            <li className="doc-under-secondnav-list doc-under-list"><a className="doc-under-secondnav-list-a" href="#">Web Doc</a></li>
                            <li className="doc-under-secondnav-list doc-under-list"><a className="doc-under-secondnav-list-a"href="#">Video Doc</a></li>
                        </ul>
                    <li className="secondnav-list list"><a className="secondnav-list-a" href="#">Download This Template</a></li>
                </div>
                
                    <li className="secondnav-list-search"><a className="secondnav-list-search" href="#">< FaSearch /></a></li>
            </ul>
        </div>
        </>
    )
}