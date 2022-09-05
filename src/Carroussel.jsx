import "./carroussel.css";
import "./App.css";


export default function Cards() {
    return (
        <>
        <div className="main-container">
            <div className="carroussel-content">
                <div className="carroussel-container-1">
                    <div className="left-element-1">
                        <img className="card-image-1" src="https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />
                    </div>
                    <div className="right-element-1">
                        <div className="card-title-1"><a>LEARN</a></div>
                        <div className="card-text-1">The secret to moving this ancient sphinx screening</div>
                    </div>
                </div>
                        <div className="carroussel-container-2">
                    <div className="left-element-2">
                    <img className="card-image-2" src="https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="2" />
                    </div>
                    <div className="right-element-2">
                        <div className="card-title-2"><a>BEAUTY</a></div>
                        <div className="card-text-2">Thie billionaire Phila thropist read to learn more and cityn</div>
                    </div>
                </div>
                        <div className="carroussel-container-3">
                    <div className="left-element-3">
                    <img className="card-image-3" src="https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="3" />
                    </div>
                    <div className="right-element-3">
                        <div className="card-title-3"><a>BUSINESS</a></div>
                        <div className="card-text-3">She bought the Home the full same year she married</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
