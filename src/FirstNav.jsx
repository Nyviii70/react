import "./firstnav.css";
import "./App.css";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

export default function FirstNav() {
    return(
            <div className="firstnav-container">
                <div className="firstnav-content">
                    <div className="firstnav-left-elements">
                        <ul className="firstnav-left-lister">
                            <li className="firstnav-left-list"><a href="#">Home</a></li>
                            <li className="firstnav-left-list"><a href="#">About</a></li>
                            <li className="firstnav-left-list"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="firstnav-right-elements">
                        <ul className="firstnav-right-lister">
                            <li className="firstnav-right-list"><a href="#"><FaSkype /></a></li>
                            <li className="firstnav-right-list"><a href="#"><FaPinterest /></a></li>
                            <li className="firstnav-right-list"><a href="#"><FaInstagram /></a></li>
                            <li className="firstnav-right-list"><a href="#"><FaTwitter /></a></li>
                            <li className="firstnav-right-list"><a href="#"><FaFacebook /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}



// --------------------------------SAVER--------------------------------



// import "./firstnav.css";
// import "./App.css";

// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaPinterest } from "react-icons/fa";
// import { FaSkype } from "react-icons/fa";

// export default function FirstNav() {
//     return(
//             <div className="firstnav-container">
//                 <div className="firstnav-content">
//                     <div className="firstnav-left-elements">
//                         <ul className="firstnav-left-lister">
//                             <li className="firstnav-left-list"><a href="#">Home</a></li>
//                             <li className="firstnav-left-list"><a href="#">About</a></li>
//                             <li className="firstnav-left-list"><a href="#">Contact</a></li>
//                         </ul>
//                     </div>
//                     <div className="firstnav-right-elements">
//                         <ul className="firstnav-right-lister">
//                             <li className="firstnav-right-list"><a href="#"><FaSkype /></a></li>
//                             <li className="firstnav-right-list"><a href="#"><FaPinterest /></a></li>
//                             <li className="firstnav-right-list"><a href="#"><FaInstagram /></a></li>
//                             <li className="firstnav-right-list"><a href="#"><FaTwitter /></a></li>
//                             <li className="firstnav-right-list"><a href="#"><FaFacebook /></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//     )
// }