import React from 'react';
import './Info.css'


const Information = () => {
  return (
    <div className="Information">
      <h1>Common Eye Disorders</h1>
      <div className="EyeDisorder">
        <h2>Cataracts</h2>
        <img src="https://d31g6oeq0bzej7.cloudfront.net/Assets/image/webp/c8748b5c-908c-4b13-a4d7-0e7a48c09050.webp" alt="Cataracts" />
        <p>
          Cataracts are a common eye condition characterized by clouding of the lens of the eye. This cloudiness can impair vision and lead to blurred or dim vision, difficulty seeing at night, sensitivity to light, and seeing halos around lights. 
          <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts">Learn more </a>
        </p>
      </div>
      <div className="EyeDisorder">
        <h2>Glaucoma</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Acute_angle_closure_glaucoma.JPG/1280px-Acute_angle_closure_glaucoma.JPG" alt="Glaucoma" />
        <p>
          Glaucoma refers to a group of eye conditions that damage the optic nerve, typically due to increased pressure within the eye. This damage can result in gradual vision loss and, if left untreated, may lead to blindness. 
          <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma">Learn more</a>
        </p>
      </div>
      <div className="EyeDisorder">
        <h2>Macular Degeneration</h2>
        <img src="https://d31g6oeq0bzej7.cloudfront.net/Assets/image/webp/9bea2237-5f7b-4a70-81f5-e3604b4df4d9.webp" alt="Macular Degeneration" />
        <p>
          Macular degeneration is a progressive eye disease affecting the macula, leading to gradual loss of central vision. It is a common cause of vision loss in people over 50 years old and can make it difficult to read, drive, or recognize faces. 
          <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/age-related-macular-degeneration">Learn more</a>
        </p>
      </div>
      <div className="EyeDisorder">
        <h2>Diabetic Retinopathy</h2>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB761ESrOE6yEHrBqfcD0E8AqKpa_E-cuhCw&s" alt="Diabetic Retinopathy" />
        <p>
          Diabetic retinopathy is a complication of diabetes that affects the blood vessels in the retina. It can cause vision loss or blindness if left untreated. People with diabetes should have regular eye exams to detect and manage diabetic retinopathy. 
          <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/diabetic-retinopathy">Learn more </a>
        </p>
      </div>
      <div className="EyeDisorder">
        <h2>Conjunctivitis (Pink Eye)</h2>
        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2024/03/28/18/33/pink-eye-4252444-8col-001.jpg" alt="Conjunctivitis" />
        <p>
          Conjunctivitis, also known as pink eye, is inflammation of the conjunctiva—the thin layer covering the white part of the eye and the inner surface of the eyelids. It can cause redness, itching, discharge, and a gritty feeling in the eyes. 
          <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/conjunctivitis-pink-eye">Learn more </a>
        </p>
      </div>
    </div>
  );
};

export default Information;
