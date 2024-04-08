import "./Announcement.css";
import AnnouncmentCard from "../AnnouncmentCard/AnnouncmentCard";
const Announcement = () => {
  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Announcements</h3>
      </div>
      <div className="announcement-container">
        <AnnouncmentCard
          title="AQAC SCHEDULE MEETING YEAR 2024"
          date="18 February 2024"
          desc="Amended AQAC Meeting Schdeule 2024"
        />
        <AnnouncmentCard
          title="The Sejahtera Academic Framework (SAF)"
          date="21 January 2024"
          desc="The sejahtera academic framework humanising education for rahmatan"
        />

        <AnnouncmentCard
          title="The Sejahtera Academic Framework (SAF)"
          date="21 January 2024"
          desc="The sejahtera academic framework humanising education for rahmatan"
        />
      </div>
    </div>
  );
};

export default Announcement;
