import mongoose from "mongoose";
import dotenv from "dotenv";
import { Internship } from "./src/models/Internship.js";

dotenv.config();

const internships = [
  {
    title: "Python Backend Intern",
    company: "TechNova Solutions",
    location: "Chennai",
    duration: "3 months",
    stipend: "₹15,000/month",
    skills: ["Python", "FastAPI", "MongoDB", "REST API"],
    applyUrl: "https://example.com/apply/python-backend",
    active: true
  },
  {
    title: "Java Software Developer Intern",
    company: "CodeSphere Technologies",
    location: "Bangalore",
    duration: "6 months",
    stipend: "₹20,000/month",
    skills: ["Java", "Spring Boot", "MySQL", "REST API"],
    applyUrl: "https://example.com/apply/java-developer",
    active: true
  },
  {
    title: "React Frontend Developer Intern",
    company: "WebCraft Labs",
    location: "Remote",
    duration: "3 months",
    stipend: "₹12,000/month",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    applyUrl: "https://example.com/apply/react-frontend",
    active: true
  },
  {
    title: "Node.js Backend Intern",
    company: "CloudBridge Technologies",
    location: "Hyderabad",
    duration: "4 months",
    stipend: "₹18,000/month",
    skills: ["Node.js", "Express", "MongoDB", "JavaScript"],
    applyUrl: "https://example.com/apply/node-backend",
    active: true
  },
  {
    title: "AI / Machine Learning Intern",
    company: "AI Future Labs",
    location: "Remote",
    duration: "6 months",
    stipend: "₹25,000/month",
    skills: ["Python", "Machine Learning", "TensorFlow", "Data Science"],
    applyUrl: "https://example.com/apply/ml-intern",
    active: true
  },
  {
    title: "Cybersecurity Intern",
    company: "SecureNet Systems",
    location: "Pune",
    duration: "3 months",
    stipend: "₹15,000/month",
    skills: ["Cybersecurity", "Linux", "Networking", "Python"],
    applyUrl: "https://example.com/apply/cybersecurity",
    active: true
  },
  {
    title: "Full Stack Developer Intern",
    company: "InnovateHub",
    location: "Chennai",
    duration: "6 months",
    stipend: "₹22,000/month",
    skills: ["React", "Node.js", "MongoDB", "JavaScript"],
    applyUrl: "https://example.com/apply/fullstack",
    active: true
  },
  {
    title: "Data Science Intern",
    company: "DataMind Analytics",
    location: "Bangalore",
    duration: "4 months",
    stipend: "₹18,000/month",
    skills: ["Python", "Pandas", "SQL", "Machine Learning"],
    applyUrl: "https://example.com/apply/data-science",
    active: true
  }
];

async function seed() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tech_bridge"
    );

    console.log("MongoDB connected");

    await Internship.deleteMany({});

    await Internship.insertMany(internships);

    console.log(`${internships.length} internships inserted successfully.`);

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();