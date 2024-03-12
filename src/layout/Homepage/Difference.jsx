import React from 'react'
import './Difference.scss'

const listDifferences = [
    {
        imgurl: "src/assets/images/focused.png",
        title: 'Forcused attention',
        text: "Every child is unique, and so is their learning style. We ensure personalized attention " +
            "with small class sizes and one-to-one lessons, empowering each student to shine.",
    },
    {
        imgurl: "src/assets/images/transformative.png",
        title: 'Transformative learning',
        text: "Our proprietary curriculum is designed to ignite your child's critical thinking, creativity, " +
            "and problem-solving abilities, transforming them into confident tech innovators."
    },
    {
        imgurl: "src/assets/images/advantage.png",
        title: 'International advantage',
        text: "Broaden your child's horizons! TechTrain's courses not only sharpen tech " +
            "skills, but also enhance specific English communication skills, preparing your child for a globalized, tech-driven future.",

    },
    {
        imgurl: "src/assets/images/individual_study.png",
        title: 'Individual study pathways',
        text: "At TechTrain, we don't believe in 'one size fits all'. Our teachers prepare study pathways for every student, " +
            "around their passions and goals, to nurture growth and independence.",
    },
    {
        imgurl: "src/assets/images/student_centered.png",
        title: 'Student-centric approach',
        text: "TechTrain is committed to the needs and goals of our students. Our comprehensive curriculum spans a range of topics " +
            "and platforms, putting students and parents at the core of the learning journey.",
    },

]

export const Difference = () => {
    return (
        <div className="section-difference">
            <h1 className='header-difference text-center '>Why parents choose TechTrain</h1>
            <div className='block-difference container d-flex flex-wrap flex-row '>
                {listDifferences.map((difference, index) => {
                    return (
                        <div className="card-block col-2 d-flex flex-column  align-items-center " key={index}>
                            <img className="background-difference d-inline-block " src={difference.imgurl}/>
                            <div className="title-difference text-center ">
                                <strong className="">{difference.title}</strong>
                            </div>
                            <div className="text-difference text-center align-self-center">{difference.text}</div>
                        </div>
                    )
                })
                }
            </div>
            <button>Experience a FREE trial</button>
        </div>

    )
}
