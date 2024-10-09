import React from 'react';
import '../Contact/Contact.css'
export default function Contact() {
  return (
    <div className="ct-container">
      <div className="contact-top">
        <h2>Contact Us</h2>
        <p>Swing by for a cup of coffee, or leave us a message:</p>
      </div>
      <div className="ct-row">
        <div className="img">
            <img src='src/assets/images/vuonlan.jpg' alt="News 1" className="news-image" />
        </div>
        <div className="ct-column">
          <form action="/action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
            
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
            
            <label htmlFor="city">City</label>
            <select id="city" name="city">
              <option value="hochiminh">HoChiMinh</option>
              <option value="hanoi">HaNoi</option>
              <option value="danang">DaNang</option>
            </select>
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." style={{ height: '170px' }}></textarea>
            
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}