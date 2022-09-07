import "./newcarousel.css";
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";


export default function NewCarousel() {
    function Display({index, datas}) {
        const {image, title, text} = datas[index];
        return (
            <div className="item" style={{transform: `translate(-${currentIndex * 100}%)`}}>
                <div className="left-element">
                    <div><img className="item-image" src={image} /></div>
                </div>
                <div className="right-element">
                    <div className="item-title"><a>{title}</a></div>
                    <div className="item-text"><a>{text}</a></div>
                </div>
            </div>
        )
    }
    const datas = [
        {
            id: 1,
            image: "https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "LEARN",
            text: "The secret to moving this ancient sphinx screening",
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "BEAUTY",
            text: "Thie billionaire Phila thropist read to learn more and cityn",
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "BUSINESS",
            text: "She bought the Home the full same year she married",
        },
        {
            id: 4,
            image: "https://images.pexels.com/photos/4582618/pexels-photo-4582618.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "LEARN",
            text: "The secret to moving this ancient sphinx screening",
        },
        {
            id: 5,
            image: "https://images.pexels.com/photos/13431328/pexels-photo-13431328.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "BEAUTY",
            text: "Thie billionaire Phila thropist read to learn more and cityn",
        },
        {
            id: 6,
            image: "https://images.pexels.com/photos/5533417/pexels-photo-5533417.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "BUSINESS",
            text: "She bought the Home the full same year she married",
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfiniteScroll = () => {
        if (currentIndex === datas.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval)
    })
    return (
        <div className="content">
            <div className="main-container">
                {datas.map((item, index) => (
                    <Display key={datas.id} index={index} datas={datas}/>
                ))}
            </div>
        </div>
    );
}



// --------------------------------------SAVER--------------------------------------



// import "./newcarousel.css";
// import "./App.css";

// import { useState } from "react";
// import { useEffect } from "react";


// export default function NewCarousel() {
//     function Display({index, datas}) {
//         const {image, title, text} = datas[index];
//         return (
//             <div className="item" style={{transform: `translate(-${currentIndex * 100}%)`}}>
//                 <div className="left-element">
//                     <div><img className="item-image" src={image} /></div>
//                 </div>
//                 <div className="right-element">
//                     <div className="item-title"><a>{title}</a></div>
//                     <div className="item-text"><a>{text}</a></div>
//                 </div>
//             </div>
//         )
//     }
//     const datas = [
//         {
//             id: 1,
//             image: "https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "LEARN",
//             text: "The secret to moving this ancient sphinx screening",
//         },
//         {
//             id: 2,
//             image: "https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "BEAUTY",
//             text: "Thie billionaire Phila thropist read to learn more and cityn",
//         },
//         {
//             id: 3,
//             image: "https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "BUSINESS",
//             text: "She bought the Home the full same year she married",
//         },
//         {
//             id: 4,
//             image: "https://images.pexels.com/photos/4582618/pexels-photo-4582618.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "LEARN",
//             text: "The secret to moving this ancient sphinx screening",
//         },
//         {
//             id: 5,
//             image: "https://images.pexels.com/photos/13431328/pexels-photo-13431328.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "BEAUTY",
//             text: "Thie billionaire Phila thropist read to learn more and cityn",
//         },
//         {
//             id: 6,
//             image: "https://images.pexels.com/photos/5533417/pexels-photo-5533417.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "BUSINESS",
//             text: "She bought the Home the full same year she married",
//         }
//     ];
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const carouselInfiniteScroll = () => {
//         if (currentIndex === datas.length-1) {
//             return setCurrentIndex(0)
//         }
//         return setCurrentIndex(currentIndex+1)
//     }

//     useEffect(() => {
//         const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
//         return () => clearInterval(interval)
//     })
//     return (
//         <div className="content">
//             <div className="main-container">
//                 {datas.map((item, index) => (
//                     <Display key={datas.id} index={index} datas={datas}/>
//                 ))}
//             </div>
//         </div>
//     );
// }



// --------------------------------------SAVER--------------------------------------



// import "./newcarousel.css";
// import "./App.css";

// import { useState } from "react";
// import { useEffect } from "react";

// export default function NewCarousel() {
//     const data = [
//         {
//             image: "https://images.pexels.com/photos/9318382/pexels-photo-9318382.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "LEARN",
//             text: "The secret to moving this ancient sphinx screening",
//         },
//         {
//             image: "https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "BEAUTY",
//             text: "Thie billionaire Phila thropist read to learn more and cityn",
//         },
//         {
//             image: "https://images.pexels.com/photos/11590268/pexels-photo-11590268.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//             title: "BUSINESS",
//             text: "She bought the Home the full same year she married",
//         },
//     ];
//         const [currentIndex, setCurrentIndex] = useState(0)
//     const carouselInfiniteScroll = () => {
//         if (currentIndex === data.length-1) {
//             return setCurrentIndex(0)
//         }
//         return setCurrentIndex(currentIndex+1)
//     }


//     useEffect(() => {
//         const interval = setInterval(() => { carouselInfiniteScroll()}, 3000)
//         return () => clearInterval(interval)
//     })
//     return (
//         <div className="carousel-container">
//             {data.map((item, index) => {
//                 return <div
//                 className="carousel-item"
//                 style ={{transform: `translate(-${currentIndex * 100}%)`}}
//                 key={index}><img className="item-image" src={item.image}/>
//                     <div className="right-element">
//                         <a className="item-title">{item.title}</a><br></br>
//                         <a className="item-text">{item.text}</a>
//                     </div>
//                 </div>
//             })}
//         </div>
//     )

// }

