import React from "react";
import "./AnnouncmentCard.css";
import iium from "../../assets/images/iium-logo-photo.jpg";
const AnnouncmentCard = ({ title, date, desc }) => {
  return (
    <div className="card-container">
      <img className="hero-image" src={iium} />

      <main className="card-main-content">
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
