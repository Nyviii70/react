import "./newsecondnav.css";
import "./App.css";

import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";

import { useState } from "react";

export default function NewSecondNav() {

    const [subFeatures, setSubFeatures] = useState(false);
    const [subDoc, setSubDoc] = useState(false);

    return (
        <> 
            {/* ------------------------------NAVBAR------------------------------ */}
            <div className="secondnav-container">

                {/* ------------------------------BURGER------------------------------ */}
                <div className="secondnav-burger">
                    <button className="burger"><FaAlignJustify /></button>
                </div>

                {/* ------------------------------LOGO------------------------------ */}
                <div className="secondnav-logo">
                    <img src="https://zupimages.net/up/22/36/efql.png"/>
                </div>

                {/* ------------------------------LIST------------------------------ */}
                <div className="secondnav-button">
                    <ul className="secondnav-list">
                        <li className="secondnav-item" href="#">Home</li>
                        <li className="secondnav-item">
                            <span className="secondnav-item-features-deployable"><a onClick={() => setSubFeatures(!subFeatures)}>Features <FaChevronDown /></a></span>
                            <ul className="secondnav-subnav-features">
                                <li className={`secondnav-subnav-features-item ${subFeatures ? "open" :""}`}>Multi Dropdown</li>
                                <li className={`secondnav-subnav-features-item ${subFeatures ? "open" :""}`}>ShortCodes</li>
                                <li className={`secondnav-subnav-features-item ${subFeatures ? "open" :""}`}>SiteMap</li>
                                <li className={`secondnav-subnav-features-item ${subFeatures ? "open" :""}`}>Error Page</li>
                            </ul>
                        </li>
                        <li className="secondnav-item" href="#">Mega Menu</li>
                        <li className="secondnav-item">
                            <span className="secondnav-item-doc-deployable">Documentation <FaChevronDown /></span>
                            <ul className="secondnav-subnav-doc">
                                <li className="secondnav-subnav-doc-item">Web Doc</li>
                                <li className="secondnav-subnav-doc-item">Video Doc</li>
                            </ul>
                        </li>
                        <li className="secondnav-item" href="#">Download This Template</li>
                    </ul>
                </div>
                
                {/* ------------------------------SEARCH------------------------------ */}
                <div className="secondnav-search">
                    <a>< FaSearch /></a>
                </div>
            </div>
        </>
    )
}