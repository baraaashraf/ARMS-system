import "./Announcement.css";
import AnnouncmentCard from "../AnnouncmentCard/AnnouncmentCard";
import { useState, useEffect } from "react";
import AnnouncmentModal from "./AnnouncmentModal";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/dashboard/announcements"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setAnnouncements(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, [announcements]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Announcements</h3>
        <AnnouncmentModal />
      </div>
      <div className="announcement-container">
        {announcements.map((anon) => (
          <AnnouncmentCard
            key={anon._id}
            title={anon.title}
            date={anon.createdAt.split("T")[0]}
            content={anon.content}
            image={`http://localhost:5000/${anon.image}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Announcement;
