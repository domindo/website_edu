import React from 'react'
import './Programs.scss'

import Course from "../../components/Course.jsx";


const listExplores = [
    {
        imgurl: 'src/assets/images/typingclub_hp.png',
        title: 'STEAM Discovery',
        text: "Jump-start your child's tech journey with our STEAM Discovery Program, designed to foster" +
            "basic computer and block coding skills in an engaging online environment.",
        level: 'beginner',
        age: '5-11',
        duration: '24 weeks ',
        durationText: '(3*8-week courses)',
    },
    {
        imgurl: "src/assets/images/scratch_hp.png",
        title: 'Tech Discovery',
        text: "Broaden your child's tech horizon with our Tech Discovery Program, offering a comprehensive introduction " +
            "to coding fundamentals, machine learning concepts, and 3D design platforms.",
        level: 'beginner',
        age: '5-11',
        duration: '16 weeks ',
        durationText: '(2*8-week courses)',
    },
    {
        imgurl: "src/assets/images/gdev_hp.png",
        title: 'GDevelop Game Design World',
        text: "Propel your child's game development skills to new heights with our GDevelop Game Design World Program," +
            "offering a hands-on approach to 2D game design with user-friendly GDevelop software.",
        level: 'beginner/intermediate',
        age: '8-15',
        duration: '24 weeks',
        durationText: '(3*8-week courses)',
    },
    {
        imgurl: "src/assets/images/roblox_hp.png",
        title: 'Roblox Game Design World',
        text: "Transform your child into a game designer with our Roblox Game Design World Program, blending coding, 3D design, " +
            "and project planning in the dynamic environment of Roblox Studio.",
        level: 'beginner/intermediate',
        age: '8-15',
        duration: '24 weeks',
        durationText: '(3*8-week courses)',
    },
    {
        imgurl: "src/assets/images/blender_hp.png",
        title: '3D Design Adventure',
        text: 'Discover real-world 3D design with our 3D Design Adventure Program, allowing students to' +
            ' create complex models using advanced tools like Blender and Python coding.',
        level: 'beginner/intermediate',
        age: '8-15',
        duration: '24 weeks ',
        durationText: '(3*8-week courses)',
    },
    {
        imgurl: "src/assets/images/python_hp.png",
        title: 'AI & Game Adventure',
        text: "Unleash your child's creativity with our AI & Game Adventure Program, where coding, game design, and machine " +
            "learning concepts combine to forge the game creators of the future.",
        level: 'beginner/intermediate',
        age: '8-15',
        duration: '24 weeks ',
        durationText: '(3*8-week courses)',
    }
]

const Programs = () => {
    return (
        <div className="highlight_program container-fluid">
            <div className="describe_program">
                <h1 className="title_describe">
                    Explore six diverse Programs
                </h1>
                <div className="text_describe">
                    Dive into block-based coding, 3D design, game development, programming, AI & machine learning.
                    Each TechTrain Program offers a unique tech adventure for curious young minds.
                </div>
            </div>
            <div className="container d-flex flex-row flex-wrap ">

                    {listExplores.map((explore, index) => {
                        return <Course key={index}
                                       imgurl={explore?.imgurl}
                                       title={explore?.title}
                                       text={explore?.text}
                                       level={explore?.level}
                                       age={explore?.age}
                                       duration={explore?.duration}
                                       durationText={explore?.durationText}
                        />
                    })}


            </div>


        </div>
    )
}
export default Programs
