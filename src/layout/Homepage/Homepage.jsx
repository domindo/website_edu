import React from 'react'
import './Homepage.scss'


const Homepage = () => {
    return (
        <div className="container-fluid">

            <div className="background-img red ">
                <img src=""/>

            </div>


            <div className="detail z-2 col-5 ">
                <div className="row ">
                    <h1> Tech leaders of tomorrow start here</h1>
                    <p>TechTrain offers expert-led STEAM & Creative tech learning to equip students (5-17 years)
                        with the future skills they will need to thrive. Our tailored approach nurtures tech fluency,
                        creativity, critical thinking, and targeted English proficiency. The TechTrain Curriculum covers
                        6 diverse Programs and 9 real-world platforms, ensuring an essential jumpstart into the digital
                        world of tomorrow.</p>
                    <p>
                        Give your child the best possible start - experice the TechTrain difference for FREE today.
                    </p>

                    <div className="col">
                        <button type="button" className="btn btn-danger col-5">
                            Discover TechTrain
                        </button>
                        <button type="button " className="btn btn-light col-5">
                            Explore Programs
                        </button>
                    </div>

                </div>

            </div>


        </div>)
}
export default Homepage;

