import React from 'react'
import './BenefitsItems.scss'
const BenifitsItems = (props) => {
const {imgurl = "", title, text} = props

return (
    <div className="col-2">

        <img src={imgurl}/>
        <div>
            {title}
        </div>
        <div>
            {text}
        </div>

    </div>
)
}
export default BenifitsItems
