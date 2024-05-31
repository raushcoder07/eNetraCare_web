import React from 'react'

const Contact = () => {
  return (
    <div className="xyz">
         <main>
            <h1>Contact Us</h1>
            <form >

            <div>
                    <label >Name</label>
                    <input type="text" required placeholder="Acb"/>   
                    
                </div>
     

                <div>
                    <label >Email</label>
                    <input type="email" required placeholder="xyz@gamil.com"/>   
                    
                </div>

                <div>
                    <label >Message</label>
                    <input type="text" required placeholder="Tell us about your vision............."/>   
                    
                </div>

                <button type='submit'>Send</button>





            </form>
         </main>
    </div>
  )
}

export default Contact