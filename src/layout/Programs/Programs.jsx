import React from 'react'
import './Programs.scss'

import Course from "../../components/Course.jsx";


const course_py = {
    imgurl: 'http://placekitten.com/g/64/64',
    title: 'AI & Game Adventure',
    text: 'Unleash your child\'s creativity with our AI &amp; Game Adventure Program, where coding, ' +
        'game design, and machine learning concepts combine to forge the game creators of the future.',
    level: 'beginener/intermediate',
    age: '8-15',
    duration: '24 weeks (3*8-week courses)'
}

const course_blender = {
    imgurl: "http://placekitten.com/g/64/64",
    title: '3D Design Adventure',
    text: 'Discover real-world 3D design with our 3D Design Adventure Program, allowing students to' +
        ' create complex models using advanced tools like Blender and Python coding.',
    level: 'beginener/intermediate',
    age: '8-15',
    duration: '24 weeks (3*8-week courses)'
}

const Programs = () => {
    return (
        <div className="highlight-program container-fluid">
            <div className="describe-program">
                <h1 >
                    Explore six diverse Programs
                </h1>
                <div>
                    Dive into block-based coding, 3D design, game development, programming, AI & machine learning.
                    Each TechTrain Program offers a unique tech adventure for curious young minds.
                </div>
            </div>
            <div className="program-block vh-100">
                <Course
                imgurl={course_py.imgurl}
                title={course_py.title}
                text={course_py.text}
                level={course_py.level}
                age={course_py.age}
                duration={course_py.duration}
                />
                <Course
                    imgurl={course_blender.imgurl}
                    title={course_blender.title}
                    text={course_blender.text}
                    level={course_blender.level}
                    age={course_blender.age}
                    duration={course_blender.duration} />

            </div>


        </div>
    )
}
export default Programs
