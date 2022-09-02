import "./articles.css";
import "./App.css";

import { FaCalendarAlt } from "react-icons/fa";

export default function Articles(){
    return(
    <div className="articles-content">
        <div className="articles-main-container">
            <ul className="articles-lister">
                <li className="articles-1">
                    <img className="image-articles-1" src="https://images.pexels.com/photos/5967868/pexels-photo-5967868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                    <div className="container-articles-1">  
                        <a className="title-articles-1">LEARN</a><br></br>
                        <a className="text-articles-1">The secret to moving this ancient sphinx screening</a><br></br>
                        <a className="author-articles-1"><b>BY</b> Sora Biogging Tips  </a>
                        <a className="date-articles-1"> <FaCalendarAlt /> March, 17, 2016</a>
                    </div>  
                </li>
                <div className="other-articles-container">
                    <li className="articles-2">
                        <img className="image-articles-2" src="https://images.pexels.com/photos/8977598/pexels-photo-8977598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                        <div className="container-articles-2">
                            <a className="title-articles-2">FASHION</a><br></br>
                            <a className="text-articles-2">Nancy multi Chinese business woman trying</a><br></br>
                            <a className="date-articles-2"><FaCalendarAlt />March, 17, 2016</a>
                        </div>
                    </li>
                    <li className="articles-3">
                    <img className="image-articles-3" src="https://images.pexels.com/photos/11495942/pexels-photo-11495942.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                    <div className="container-articles-3">
                        <a className="title-articles-3">BEAUTY</a><br></br>
                        <a className="text-articles-3">The billionaire Philan thropist read to learn more</a><br></br>
                        <a className="date-articles-3"><FaCalendarAlt />March, 17, 2016</a>
                    </div>
                    </li>
                    <li className="articles-4">
                    <img className="image-articles-4" src="https://images.pexels.com/photos/3767862/pexels-photo-3767862.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                    <div className="container-articles-4">
                        <a className="title-articles-4">FASHION</a><br></br>
                        <a className="text-articles-4">EarlY tourist choices to the sea of Maldives</a><br></br>
                        <a className="date-articles-4"><FaCalendarAlt />March, 17, 2016</a>
                    </div>
                    </li>
                </div>
            </ul>
        </div>
        </div>
    )
}