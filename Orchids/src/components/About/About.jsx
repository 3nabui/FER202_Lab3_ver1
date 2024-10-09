import React from 'react';
import '../About/About.css'

export default function About() {
  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>Cua hang ban lan canh lon nhat Viet Nam</p>
      <p>Hotline: 0827.577.752</p>
    
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="ab-row">
        <div className="ab-column">
          <div className="about-card">
            <img src="src/assets/images/seller1.jpg" alt="Duong" style={{ width: '100%' }} />
            <div className="about-container">
              <h2>Hai Duong</h2>
              <p className="title">CEO & Founder</p>
              <p>La nguoi gioi, cham chi va tai nang</p>
              <p>duong3nana203@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="ab-column">
          <div className="about-card">
            <img src="src/assets/images/seller2.jpg" alt="Hoang" style={{ width: '100%' }} />
            <div className="about-container">
              <h2>Minh Hoang</h2>
              <p className="title">Art Director</p>
              <p>La nguoi gioi, cham chi va tai nang</p>
              <p>hoangsh@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

        <div className="ab-column">
          <div className="about-card">
            <img src="src/assets/images/seller3.jpg" alt="Mai" style={{ width: '100%' }} />
            <div className="about-container">
              <h2>Thuy Mai</h2>
              <p className="title">Designer</p>
              <p>La nguoi gioi, cham chi va tai   nang</p>
              <p>maithuy@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
