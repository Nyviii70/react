import "./newarticles.css";
import "./App.css";

import { FaCalendarAlt } from "react-icons/fa";

export default function NewArticles(){
    return(
        <>
            <div className="articles-container">
                <div className="article-left">
                    <img className="image-article-1" src="https://images.pexels.com/photos/5967868/pexels-photo-5967868.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                    <div className="text-container-article-1">
                        <a className="title-article-1">LEARN</a><br></br>
                        <a className="text-article-1">The secret to moving this ancient sphinx screening</a><br></br>
                        <a className="author-article-1"><b>BY</b> Sora Biogging Tips  </a>
                        <a className="date-article-1"> <FaCalendarAlt /> March, 17, 2016</a>
                    </div>
                </div>
                <div className="articles-right">
                    <div className="article-right-2">
                        <img className="image-article-2" src="https://images.pexels.com/photos/8977598/pexels-photo-8977598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                        <div className="text-container-article-2">
                            <a className="title-article-2">FASHION</a><br></br>
                            <a className="text-article-2">Nancy multi Chinese business woman trying</a><br></br>
                            <a className="date-article-2"><FaCalendarAlt />March, 17, 2016</a>
                        </div>
                    </div>
                    <div className="article-right-3">
                        <img className="image-article-3" src="https://images.pexels.com/photos/11495942/pexels-photo-11495942.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                            <div className="text-container-article-3">
                                <a className="title-article-3">FASHION</a><br></br>
                                <a className="text-article-3">Nancy multi Chinese business woman trying</a><br></br>
                                <a className="date-article-3"><FaCalendarAlt />March, 17, 2016</a>
                            </div>
                    </div>
                    <div className="article-right-4">
                        <img className="image-article-4" src="https://images.pexels.com/photos/3767862/pexels-photo-3767862.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                            <div className="text-container-article-4">
                                <a className="title-article-4">FASHION</a><br></br>
                                <a className="text-article-4">Nancy multi Chinese business woman trying</a><br></br>
                                <a className="date-article-4"><FaCalendarAlt />March, 17, 2016</a>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}