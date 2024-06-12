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
        // <div className="col-xl-3  mb-5">
        //     <div className="bg-white rounded d-flex flex-column align-items-center py-4 px-3">
        //         <img src="https://bootstrapious.com/i/snippets/sn-team/teacher-4.jpg" alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm text-center" />
        //         <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
        //         <ul className="social mb-0 list-inline mt-3">
        //             <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-facebook-f"></i></a></li>
        //             <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a></li>
        //             <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a></li>
        //             <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a></li>
        //         </ul>
        //     </div>
        // </div>
        <div className='card-container'>
            <div className="card-text-container">
                <h3 className="card-name">{name}</h3>
                <p className="card-designation"> <em>{designation}</em></p>
                <p className="card-qualification">{qualification}</p>
                <p className="work-status">{workStatus}</p>
                <p className="work-experience">{workExperience}</p>
                <p className="card-research">{research}</p>
            </div>
            <div className="card-img-container">
                <img src={imgSrc} className='card-profile-photo' />
            </div>
        </div>


    )
}

export default Card
