import React from 'react'
import './BenefitsItems.scss'

const BenifitsItems = (props) => {
    const {imgurl = "", title, text} = props

    return (
        <div className="benefits-item d-flex flex-column  align-items-center">

            <img className="item-background" src={imgurl}/>
            <div className="item-group d-flex flex-column align-items-center justify-content-center">
                <div className="item-title text-center">
                    {title}
                </div>
                <div className="item-text">
                    {text}
                </div>
            </div>


        </div>
    )
}
export default BenifitsItems
