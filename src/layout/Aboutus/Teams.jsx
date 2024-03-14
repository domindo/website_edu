import React from 'react'
import './Teams.scss'

const Teams = (props) => {
    const {imagesUrl = "", name = "", role = "", location = "", detail = ""} = props
    return (

        <div className="team_member">
            <div className="left_group">
                <img className="avatar_member" src={imagesUrl}></img>
                <div className="member_name">
                    <strong>{name}</strong>
                </div>
                <div className="member_detail">
                    <div className="member_role">{role}</div>
                    <div className="member_location"><em>{location}</em></div>
                </div>
            </div>
            <div className="right_group">{detail}</div>
        </div>


    )
}
export default Teams
