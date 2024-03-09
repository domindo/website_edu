import React from 'react'
import './Course.scss'

const Course = (props) => {
    return (
        <div>
            <div className="course_homepage">
                <img className="course-background img-fluid" src={props.img}/>
                <div className="course-title">{props.title}</div>
                <div className="course-text">{props.text}</div>
                <div className="course-level">{props.level}</div>
                <div className="course-age">{props.age}</div>
                <div className="course-duration">{props.duration}</div>


            </div>

        </div>
    )
}
export default Course
