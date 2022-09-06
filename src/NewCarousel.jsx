import "./newcarousel.css";
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

import { PropTypes } from "prop-types";


export default function NewCarousel() {
    const data = [
        {
            id: 1,
            image: <img src="https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="1" />,
            title: "LEARN",
            text: "The secret to moving this ancient sphinx screening",
        },
        {
            id: 2,
            image: <img src="https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="2" />,
            title: "BEAUTY",
            text: "Thie billionaire Phila thropist read to learn more and cityn",
        },
        {
            id: 3,
            image: <img src="https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="3" />,
            title: "BUSINESS",
            text: "She bought the Home the full same year she married",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval)
    })
    return (
            <div className="container">
                {data.map((item, index) => {
                    return <h1 className="item" style={{transform: `translate(-${currentIndex *100}%)`}} key={index}>{item}</h1>
                })}
            </div>
    );
}

{/* <div className="container">
{datas.map((data, i) => (
    <NewCarousel key={data.id} index={i} datas={datas} setCurrentIndex={setCurrentIndex} />
))}
</div> */}