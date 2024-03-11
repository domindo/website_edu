import React from 'react'
import './Benefits.scss'

import BenifitsItems from "../../components/BenifitsItems.jsx";

const listItems = [
    {
        imgurl: "src/assets/images/globals_skill.png",
        title: 'Global Skill',
        text: 'Fostering teamwork and cultural understanding for a connected world. ',
    },
    {
        imgurl: "src/assets/images/tech_power.png",
        title: 'Tech power',
        text: 'Applying hands-on tech skills to thrive in the digital era. ',
    },
    {
        imgurl: "src/assets/images/english_boost.png",
        title: 'English boost',
        text: 'Building confidence in communication. Introducing specialized tech vocabulary. ',
    },
    {
        imgurl: "src/assets/images/problem_solving.png",
        title: 'Creative problem-solving',
        text: 'Harnessing creativity and leveraging  tech tools for problem-solving. ',
    },
    {
        imgurl: "src/assets/images/communication.png",
        title: 'Communication and collaboration',
        text: 'Promoting the essential human skills for successful projects. ',
    },


]
const Benefits = () => {
    return (
        <div>
            <h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Shaping tomorrow's tech-savvy global citizens
            </h1>
            <div>
                <div>
                    At TechTrain, we go beyond simply teaching coding. We strive to cultivate lifelong curiosity and innovative thinking in children. Our unique STEAM & Creative tech curriculum combines technical learning, topic-specific English skills, critical thinking and collaboration.
                    We provide our learners with the tools to succeed in a future shaped by constant technological change.
                </div>
                <div>
                    <div className="d-flex flex-row flex-wrap">
                        {listItems.map((item, index) => {
                            return <BenifitsItems key={index}
                                                  imgurl = {item.imgurl}
                                                  title = {item.title}
                                                  text = {item.text} />

                        })}

                    </div>
                </div>
            </div>

            </div>
    )
}
export default Benefits
