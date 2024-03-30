import React from "react";
import "./About_us.css"
const about_us = () => {
  return (
    <div className="about_us">
      <h1>About Us</h1>
      <div className="about-us-desc">
        <h3>Academic Review Management System (ARMS)</h3>
        <p>
          Welcome to the Academic Review Managment System (ARMS), a cutting-edge
          platform designed to revolutionize and optimize the academic review
          process at the Kulliyah of Information and Communication Technology
          (KICT) at the Internationl Islamic University Malaysia (IIUM). ARMS is
          meticulously crafted to address the unique challenges faced by faculty
          members, adminstratros, and students in managing and tracking the
          academic review lifecycle
        </p>
      </div>
      <h1>Contact Us</h1>
      <div className="contact-us-card">
        
        <h2>Internationl Islamic University Malaysia</h2>
        <ul>
          <li>Mailing Address: <span className="contact-info">P.O. Box 10, 50728 Kuala Lumpur</span> </li>
          <li>Phone: <span className="contact-info">(+603) 6421 6421</span> </li>
          <li>Fax: <span className="contact-info">(+603) 6421 4053</span> </li>
          <li>Email Address: <span className="contact-info">arms.iium@gmail.com</span> </li>
        </ul>
      </div>
    </div>
  );
};

export default about_us;
