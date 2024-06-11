import React from 'react'
import ServicesBox from './ServicesBox'

const Services = () => {
  return (
    // <!-- Service 4 - Bootstrap Brain Component -->
    <section className="bg-light py-5 py-xl-8">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7">
            <h3 className="fs-6 mb-2 text-secondary text-center text-uppercase">What We Do?</h3>
            <h2 className="display-6 mb-3 text-center"><strong> We are giving you perfect solutions with our proficient services.</strong></h2>
            <p className="mb-5 text-center" style={{fontSize:'1.3rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dignissimos dolorum saepe repellat laudantium ipsum et doloremque rem nulla vel amet fuga aliquam optio minus ut sed officia mollitia ducimus consequatur laborum ipsam dicta labore?</p>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
          </div>
        </div>
      </div>
    
      <ServicesBox />
    </section>  )
}

export default Services