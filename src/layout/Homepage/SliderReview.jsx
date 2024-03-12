import React from "react";
import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './SliderReview.scss'

const listReview = [
    {
        images: "src/assets/images/nhan.png",
        name: "Nhan",
        text: "STUDENT",
        quote: 'Students need to start by creating their 3D world, and then they should make the code to make each part work. ' +
            'If I could study it one more time, I would write more scripts and create more games. Roblox Studio is really fun! ',


    },
    {
        images: "src/assets/images/armaan.jpeg",
        name: "ARMAAN",
        text: 'STUDENT',
        quote: "I like studying at TechTrain because I can learn to code and there are teachers there to help us." +
            " We can also share our programs and work with other people."
    },

    {
        images: "src/assets/images/ngoc_anh.jpeg",
        name: "Ms. Ngoc Anh",
        text: 'PARENT',
        quote: "These days, technology is so important to understand. I'm really happy that Minh is learning " +
            "coding with TechTrain courses."
    },
    {
        images: "src/assets/images/vasco.png",
        name: "Vasco",
        text: 'STUDENT',
        quote: "Hope you guys join the Roblox courses at TechTrain, it's so fun."
    },
    {
        images: "src/assets/images/ms_thuy.jpeg",
        name: "Ms. Thuy",
        text: 'PARENT',
        quote: "I feel really satisfied with this project, Minh achieved such great results."
    },
    {
        images: "src/assets/images/chenxin.jpeg",
        name: "Chenxin",
        text: 'STUDENT',
        quote: "I think learning technology will help me in any job I have, no matter what job it is."
    }
]
const SliderReview = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="section-carousel container-fluid">
            <div className="carousel-background">
                <h1 className="title-review text-center"> Hear from happy TechTrain parents and students</h1>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {listReview.map((review, index) => {
                        return (
                            <Carousel.Item key={index}>

                                <div className="carousel-items ">
                                    <img src={review.images} className="carousel-photos " alt="..."/>

                                    <h5 className="name-review">{review.name}</h5>
                                    <div className="text-review">{review.text}</div>
                                    <div className="line-review"></div>
                                    <div className="quote-review">{review.quote}</div>

                                </div>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>

            </div>
        </div>

    )
}
export default SliderReview
