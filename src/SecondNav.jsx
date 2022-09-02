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
        {/* <div className="secondnav-container"> */}
        <div className={`secondnav-container ${burgerClicked ? "open" : ""}`}>
            <ul className="secondnav-lister">

                <button className="burger"><a onClick={() => setBurgerClicked(!burgerClicked)}><FaHamburger /></a></button>

                <li className="secondnav-list title"><a href="#">FOXZ</a></li>

                <div className="secondnav-buttons">
                    <li className="secondnav-list"><a className="secondnav-list-a" href="#">Home</a></li>
                    <li className="secondnav-list"><a onClick={() => setUnderMenuOpen(!underMenuOpen)} className="secondnav-list-a" href="#">Features <FaChevronDown /></a>
                        <ul className={`under-secondnav-lister ${underMenuOpen ? "open" : ""}`}>
                            <li className="under-secondnav-list"><a href="#">Multi dropdown</a></li>
                            <li className="under-secondnav-list"><a href="#">Shortcodes</a></li>
                            <li className="under-secondnav-list"><a href="#">SiteMap</a></li>
                            <li className="under-secondnav-list"><a href="#">Error Page</a></li>
                        </ul>
                    </li>
                    <li className="secondnav-list"><a className="secondnav-list-a" href="#">Mega Menu <FaChevronDown /></a></li>
                    <li className="secondnav-list"><a className="secondnav-list-a" href="#">Documentation <FaChevronDown /></a></li>
                    <li className="secondnav-list"><a className="secondnav-list-a" href="#">Download This Template</a></li>
                </div>
                
                    <li className="secondnav-list-search"><a className="secondnav-list-search" href="#">< FaSearch /></a></li>
            </ul>
        </div>
        </>
    )
}



// -----------------------------------------------------SAVER-----------------------------------------------------

// import "./secondnav.css";
// import "./App.css";

// import { FaSearch } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// import { FaHamburger } from "react-icons/fa";

// import { useState } from "react";

// export default function SecondNav() {
//     const [underMenuOpen, setUnderMenuOpen] = useState(false);
//     return(
//         <>
//         <div className="secondnav-container">
//             <ul className="secondnav-lister">

//                 <button className="burger"><FaHamburger /></button>

//                 <li className="secondnav-list title"><a href="#">FOXZ</a></li>

//                 <div className="secondnav-buttons">
//                     <li className="secondnav-list"><a className="secondnav-list-a" href="#">Home</a></li>
//                     <li className="secondnav-list"><a onClick={() => setUnderMenuOpen(!underMenuOpen)} className="secondnav-list-a" href="#">Features <FaChevronDown /></a>
//                         <ul className={`under-secondnav-lister ${underMenuOpen ? "open" : ""}`}>
//                             <li className="under-secondnav-list"><a href="#">Multi dropdown</a></li>
//                             <li className="under-secondnav-list"><a href="#">Shortcodes</a></li>
//                             <li className="under-secondnav-list"><a href="#">SiteMap</a></li>
//                             <li className="under-secondnav-list"><a href="#">Error Page</a></li>
//                         </ul>
//                     </li>
//                     <li className="secondnav-list"><a className="secondnav-list-a" href="#">Mega Menu <FaChevronDown /></a></li>
//                     <li className="secondnav-list"><a className="secondnav-list-a" href="#">Documentation <FaChevronDown /></a></li>
//                     <li className="secondnav-list"><a className="secondnav-list-a" href="#">Download This Template</a></li>
//                 </div>
                
//                     <li className="secondnav-list-search"><a className="secondnav-list-search" href="#">< FaSearch /></a></li>
//             </ul>
//         </div>
//         </>
//     )
// }





// --------------------------AFFICHAGE MENU AU CLICK DU BURGER BUTTON--------------------------


{/* <div className={`secondnav-container ${burgerOpen ? "open" : ""}`}>
<ul className="secondnav-lister">
    <button className="burger" onClick={() => setBurgerOpen(!burgerOpen)}><FaHamburger /></button>
    <li className="secondnav-list title"><a href="#">FOXZ</a></li>
    <div className="secondnav-buttons">
        <li className="secondnav-list"><a className="secondnav-list-a" href="#">Home</a></li>
        <li className="secondnav-list"><a onClick={() => setUnderMenuOpen(!underMenuOpen)} className="secondnav-list-a" href="#">Features <FaChevronDown /></a>
            <ul className={`under-secondnav-lister ${underMenuOpen ? "open" : ""}`}>
                <li className="under-secondnav-list"><a href="#">Multi dropdown</a></li>
                <li className="under-secondnav-list"><a href="#">Shortcodes</a></li>
                <li className="under-secondnav-list"><a href="#">SiteMap</a></li>
                <li className="under-secondnav-list"><a href="#">Error Page</a></li>
            </ul>
        </li>
        <li className="secondnav-list"><a className="secondnav-list-a" href="#">Mega Menu <FaChevronDown /></a></li>
        <li className="secondnav-list"><a className="secondnav-list-a" href="#">Documentation <FaChevronDown /></a></li>
        <li className="secondnav-list"><a className="secondnav-list-a" href="#">Download This Template</a></li>
    </div>
        <li className="secondnav-list-search"><a className="secondnav-list-search" href="#">< FaSearch /></a></li>
</ul>
</div> */}
