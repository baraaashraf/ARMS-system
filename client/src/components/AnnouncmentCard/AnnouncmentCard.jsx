import React from "react";
import "./AnnouncmentCard.css";
import iium from "../../assets/images/iium-logo-photo.jpg";
const AnnouncmentCard = ({ title, date, desc }) => {
  return (
    <div class="card-container">
      <img class="hero-image" src={iium} />

      <main class="card-main-content">
        <a className="card-title" href="#">
          {title}
        </a>
        <h5>{date}</h5>
        <hr />
        <br />
        <p className="card-p">{desc}</p>
      </main>
    </div>
  );
};

export default AnnouncmentCard;
