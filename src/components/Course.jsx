import React from 'react'
import './Course.scss'

const Course = (props) => {
    const {imgurl = "", title, text, level, age, duration} = props
    return (
        <div className="course_homepage col-4">
            <img className="course-background img-fluid" src={imgurl}/>
            <div className="course-title">{title}</div>
            <div className="course-text">{text}</div>
            <div>
                <div className="course-level">
                    <img src="./src/assets/images/levels_icon.png"/>
                    Level: {level}
                </div>
                <div className="course-age">
                    <img src="./src/assets/images/ages_icon.png"/>
                    Ages: {age}</div>
                <div className="course-duration">
                    <img src="./src/assets/images/duration_icon.png"/>
                    Duration: {duration}</div>
            </div>
            <button>Learn more</button>
        </div>
    )
}
export default Course
