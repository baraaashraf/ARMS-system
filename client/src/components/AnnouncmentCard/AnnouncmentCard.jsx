import React from "react";
import "./AnnouncmentCard.css";
import iium from "../../assets/images/iium-logo-photo.jpg";
const AnnouncmentCard = ({ title, date, content, image }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={image} />

      <main className="card-main-content">
        <a className="card-title" href="#">
          {title}
        </a>
        <h5 className="card-p">{date}</h5>
        <hr />
        <br />
        <p className="card-p">{content}</p>
      </main>
    </div>
  );
};

export default AnnouncmentCard;
