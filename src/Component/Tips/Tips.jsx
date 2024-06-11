import React from 'react';
import './Tips.css'; // Ensure you create this CSS file for styling

const EyeTips = () => {
  return (
    <div>
      <div className='hero-image-container'>
        {/* <img src="https://images.pexels.com/photos/7163354/pexels-photo-7163354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Eye Care" className='hero-image' /> */}
      </div>
      <div className='eye-tips-container'>
        <div className='hero-container'>
          <h1 id='eye-tips-title'>Eye Care Tips</h1>
          <p className='eye-tips-desc'>Here are some essential tips to keep your eyes healthy and comfortable.</p>
        </div>
        <div className='tips-content'>
          <img src="https://st.depositphotos.com/1637787/2579/i/450/depositphotos_25792959-stock-photo-visual-field-test.jpg" alt="Eye Care" className='eye-tips-img' />
          <div className='tips-info'>
            <h2>Top Tips for Healthy Eyes</h2>
            <ul>
              <li>Get regular eye exams to detect any issues early.</li>
              <li>Maintain a balanced diet rich in vitamins A, C, and E.</li>
              <li>Wear sunglasses to protect your eyes from UV rays.</li>
              <li>Take breaks during screen time to reduce eye strain.</li>
              <li>Ensure proper lighting while reading or working.</li>
              <li>Stay hydrated to maintain eye moisture.</li>
              <li>Practice good hygiene, especially if you wear contact lenses.</li>
            </ul>
          </div>
        </div>
        <div className='articles-container'>
          <h2>Popular Journal Articles</h2>
          <div className='articles'>
            <article>
              <h3>Exploring the role of the ocular surface in the lung-eye axis:...</h3>
              <p>References and abstracts from MEDLINE/PubMed (National Library of Medicine)</p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38768774/" target="_blank">Read more</a>
            </article>
            <article>
              <h3>Fostering the unleashing potential of nanocarriers-mediated delivery of ocular therapeutics</h3>
              <p>References and abstracts from MEDLINE/PubMed (National Library of Medicine)</p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38703931/" target="_blank">Read more</a>
            </article>
            <article>
              <h3>Differential Impact of 0.01% and 0.05% Atropine Eyedrops on Ocular Surface...</h3>
              <p>References and abstracts from MEDLINE/PubMed (National Library of Medicine)</p>
              <a href="https://pubmed.ncbi.nlm.nih.gov/38625083/" target="_blank">Read more</a>
            </article>
            <h3>EyeCare--</h3>
            <a href="https://www.nei.nih.gov/learn-about-eye-health/nei-for-kids/healthy-vision-tips" target='_blank' className='see-more'>See more articles</a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EyeTips;
