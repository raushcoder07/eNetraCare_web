import React from 'react';
import '../App.css'; // Import your CSS file for styling

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Daniella C.",
      review: "I want to take this time on my own to write a review for them because they deserve it hands down!! They are a true example of greatness! The entire office! This office goes over and beyond to accommodate and help their patients with everything. Every question, every concern, every issue and every fear if that. When it comes to appointments they do EVERYTHING they can to get their patient in and happy with an appointment with the doctor they want to see. They have done it for me every single time! I’ve actually had a few emergencies within the past few months and they moved around the entire schedule to fit me in on that day if not the following day depending on the issue. They are incredible. I want to take this time to acknowledge Dr. Jay, Dr Swati, Magda. It’s not often you get to go to a doctors offic over and beyond.",
      rating: 5
    },
    {
      name: "Steven B.",
      review: "I made an appointment over a month ago. I have insurance with a 35.00 co pay. When I showed up I was informed if I need a prescription for glasses there is a 50.00 additional charge not covered by insurance. I have been going for checkups for many years, never charged for prescription. I was informed new policy started June. I believe I should have been informed of any changes in the costs when I set up the appointment. Crazy to charge for a prescription. Why am I going to the doctor? The receptionist was very unfriendly in trying to explain the change. I informed them that I will be changing doctors and left. I know they moved and I guess have to be deceptive in their billing practice to cover the cost of the move.",
      rating: 5
    },
    {
      name: "Mica M.",
      review: "Last week I went to this place for the first time for an eye check and it was by far my best experience with eye doctors / offices. The staff was friendly and explained everything I needed to know regarding what was & wasn’t covered by my insurance, what each test was for, and what I could do in regards to protecting my eyes in this age of damaging screens. They are also multilingual which was a plus for me as now I can bring my family here. (I know they speak english & spanish and an Indian language, but I couldn’t say which one)",
      rating: 4
    },
    {
      name: "Carolina C.",
      review: "I have been a patient of Dr. Swati Parekh and her husband Dr. Jai Parekh for more than 12 years, my experience in the office is very rewarding. I am aware that the doctor is a very busy doctor, everyone wants appointments with Parekh’s doctors, but I don’t care, I wait the necessary time for my appointment with them. The best doctors are the busiest, I would not change them for the world and I recommend them to the 100%.",
      rating: 5
    },
    {
      name: "Krishna P.",
      review: "I always have the best experience every time I come here! The staff is extremely polite and all of the doctors that work here are friendly! Not only do they explain the procedures well, but they also take the time to make sure that I understood what was going on. My family is also well taken care of here and I will definitely recommend this place to all of my friends and family! I am very impressed with the service that I was provided with!",
      rating: 4
    },
  ];

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="star">&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials-heading">What Our Patients Say</h2>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <div className="testimonial-rating">
            {renderStars(testimonial.rating)}
          </div>
          <p className="testimonial-review">"{testimonial.review}"</p>
          <p className="testimonial-author">- {testimonial.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
