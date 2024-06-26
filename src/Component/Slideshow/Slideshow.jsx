import React from 'react'
import image1 from '../../assets/images/img-1.jpeg'
import image2 from '../../assets/images/img-2.jpeg'
import image3 from '../../assets/images/img-3.jpeg'
import image4 from '../../assets/images/img-4.jpeg'
import '../Slideshow/SlideshowCSS.css'

function Slideshow() {
    return (
        <div id="slide-container">
            <div id="slide-first-element">
                <img class="slide-image" src={image1} />
            </div>
            <div id="slide-element-2">
                <img class="slide-image" src={image2} />
            </div>
            <div id="slide-element-3">
                <img class="slide-image" src={image3} />
            </div>
            <div id="slide-element-4">
                <img class="slide-image" src={image4} />
            </div>
        </div>
    )
}

export default Slideshow
