import { AnnouncementSchema } from "../models/dashboard/announcement.model.js";

const addAnnouncement = async (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const newAnnouncement = new AnnouncementSchema({
      title,
      content,
      image,
    });

    await newAnnouncement.save();

    res.status(201).json({
      message: "Announcement added successfully",
      announcement: newAnnouncement,
    });
  } catch (error) {
    console.error("Error adding announcement:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the announcement" });
  }
};

const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await AnnouncementSchema.find();
    res.status(200).json(announcements);
  } catch (error) {
    console.error("Error fetching announcements:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching announcements" });
  }
};

export { addAnnouncement, getAllAnnouncements };
