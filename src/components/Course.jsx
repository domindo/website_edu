import React from 'react'
import './Course.scss'

const Course = (props) => {
    const {imgurl = "", title, text, level, age, duration, durationText} = props
    return (
        <div className="flex-wrap align-items-center justify-content-center col-4 d-flex flex-column">
            <a className="course_container">
                <img className="course_background " src={imgurl}/>
                <div className="course_group ">
                    <div className="course_title">{title}</div>
                    <div className="course_text">{text}</div>
                    <div style={{marginTop: "20px"}}>
                        <div className="course-level">
                            <img className="icons-images" src="./src/assets/images/levels_icon.png"/>
                            <div className="detail-description"> Level: {level} </div>

                        </div>
                        <div className="course-level">
                            <img className="icons-images" src="./src/assets/images/ages_icon.png"/>
                            <div className="detail-description"> Ages: {age} </div>
                        </div>
                        <div className="course-level">
                            <img className="icons-images" src="./src/assets/images/duration_icon.png"/>
                            <div className="detail-description">
                                Duration: {duration}
                                <br/>
                                {durationText}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="button_course">
                    <button className="learn_more">Learn more</button>
                </div>
            </a>



        </div>
    )
}
export default Course
