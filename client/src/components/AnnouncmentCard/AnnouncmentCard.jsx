import React from "react";
import "./AnnouncmentCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const AnnouncmentCard = ({ title, date, content, image, isAdmin }) => {
  return (
    <div className="card-container">

      {isAdmin && <FontAwesomeIcon className="anon-trash" icon={faCircleXmark} />}
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
