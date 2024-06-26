import React from 'react'
import abhay from './images/AbhayPic.jpg'

function Card({
    name,
    designation,
    qualification,
    workStatus,
    workExperience,
    research,
    imgSrc
}) {
    return (
        <div className='card-container'>
            <div className="card-text-container">
                <h3 className="card-name">{name}</h3>
                <p className="card-designation"> <em>{designation}</em></p>

                <p className="card-qualification card-profile-desc">{qualification}</p>
                <p className="work-status card-profile-desc">{workStatus}</p>
                <p className="work-experience card-profile-desc">{workExperience}</p>
                <p className="card-research card-profile-desc">{research}</p>
            </div>
            <div className="card-img-container">
                <img src={imgSrc} className='card-profile-photo' />
            </div>
        </div>


    )
}

export default Card
