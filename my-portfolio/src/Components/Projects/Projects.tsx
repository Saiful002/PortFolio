import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box,Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/variants";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import firebase from "../../Images/firebase.svg";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.png";
import ts from "../../Images/typescript.jpg";
import nextjs from "../../Images/nextjs.png";
import msql from "../../Images/msql.png";
import Modal from "@mui/material/Modal";
type Project = {
    name: string;
  description: string;
  technologies: {icon: string }[];
  github: string;
  live: string;
};

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

const projects: Project[] = [
  {
    name: "GUB_IDPC_2025",
    description: "The GUB IDPC 2025 website is designed to serve as the official platform for the International Debate & Programming Contest 2025 at Green University of Bangladesh. This website provides comprehensive information about the event, including schedules, sponsors, FAQs, and contact details, ensuring participants have easy access to all necessary updates.A key feature of the platform is the student registration system, allowing participants to seamlessly sign up for the competition. Built with Next.js and Tailwind CSS, the website ensures a smooth and responsive user experience across all devices. The intuitive navigation system, featuring interactive dropdown menus for both desktop and mobile users, enhances accessibility and ease of use.",
    technologies: [
      { icon: `${nextjs}` },
      { icon: `${msql}` },
      { icon: `${express}` },
    ],
    github: "https://github.com/Saiful002/GUB_IDPC_2025",
    live: "https://gub-idpc-2025.vercel.app/",
  },
  {
    name: "Portfolio",
    description: "Welcome to my portfolio website, a showcase of my skills, projects, and experience as a full-stack web developer. Built with Next.js and Tailwind CSS, it features a clean, responsive design with dynamic animations, a dark/light mode toggle, and an intuitive UI. The project section highlights my top works with live previews, GitHub links, and technology stack icons, making it easy to explore my expertise. Designed for seamless navigation, it also includes contact and social links for networking. This portfolio reflects my passion for modern web technologies, UI/UX design, and efficient coding, offering a professional and engaging experience. 🚀",
    technologies: [
      { icon: `${ts}` },
      { icon: `${msql}` },
      { icon: `${express}` },
    ],
    github: "https://github.com/Saiful002/PortFolio",
    live: "#",
  },
  {
    name: "Round Trip",
    description: "Round Trip is a comprehensive travel website built with TypeScript, MongoDB, Express.js, and Firebase Authentication. The platform allows users to seamlessly plan and book their trips, offering a user-friendly interface and efficient backend operations.Using TypeScript, the website ensures strong typing and scalability for better maintainability. The MongoDB database handles dynamic data storage, allowing users to access and save their travel itineraries, booking details, and preferences efficiently. Express.js powers the server-side logic, providing a fast and reliable connection between the front-end and the database.",
    technologies: [
      { icon: `${ts}` },
      { icon: `${mongodb}` },
      { icon: `${express}` },
      { icon: `${firebase}` },
    ],
    github: "https://github.com/Saiful002/Round-Trip",
    live: "#",
  },

];

const Projects: React.FC = () => {
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const [isHovering, setIsHovering] = useState(false);
  return (
    <Box sx={{ backgroundColor: "#020b1c" }} id="projects">
       <motion.div
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <Typography
                sx={{
                  color: " #fdfeff",
                  display: "flex",
                  justifyContent: "center",
                  py: { xs: "50px", sm: "100px" },
                  boxShadow: "0 0 6px rgb(41,185,82), 0 0 3px beige inset",
                  fontFamily: "",
                }}
                variant="h4"
              >
                Pro<span style={{ color: "#ef6c00" }}>jects</span>
              </Typography>
            </motion.div>

            <Grid sx={{ px: { xs: "0px", sm: "50px", md: "50px" }, py: "10px", m: "0px", display: "flex", flexWrap: "wrap", gap: "20px" }}>
  {projects.map((project, index) => (
    <Grid  xs={12} sm={6} md={4} key={index}>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.9 }}
        style={{
          display: "flex",
          flexDirection: "column", // Default for small screens
          justifyContent: "space-between",
          height: "100%",
          width: "100%", // Ensure it takes full width
        }}
      >
        <Box sx={{
          textAlign: "center",
          backgroundColor: "#1e293b",
          borderRadius: "8px",
          padding: { xs: "15px", sm: "20px" }, // Adjust padding for xs and larger screens
          display: "flex",
          flexDirection: "column", // Keep the content in a column layout
          justifyContent: "space-between",
          height: "100%",
          width: "100%", // Ensure the card takes up full width
        }}>
          {/* <img src={project.image} alt={project.name} style={{ width: "100%", borderRadius: "8px" }} /> */}
          <Typography variant="h6" sx={{ color: "#fdfeff", mt: "10px" }}>{project.name}</Typography>
          <Typography variant="body2" sx={{ textAlign: 'left', color: "#cbd5e1", my: "10px" }}>
            {project.description}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px", my: "10px" }}>
            {project.technologies.map((tech, idx) => (
              <img key={idx} src={tech.icon} alt="Tech" style={{ width: "40px", height: "40px" }} />
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", mt: "10px" }}>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <LaunchIcon sx={{ color: "white", fontSize: 30 }} />
            </a>
          </Box>
        </Box>
      </motion.div>
    </Grid>
  ))}
</Grid>



<div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            display: "flex",
            justifyContent: "right",
            backgroundColor: "#ffd066",
            color: "black",
            my: "50px",
            fontWeight: "bold",
          }}
          style={{
            backgroundColor: isHovering ? "#fec544" : "#ffd066",

            boxShadow: isHovering
              ? "0 0 5px #fec544, 0 0 15px #fec544,0 0 30px #fec544"
              : "none",
            borderRadius: "50px",
            color: isHovering ? "white" : "black",
          }}
          onMouseEnter={() => setIsHovering(true)} //React hovering effect for navbar item problem solved from stackoverflow
          onMouseLeave={() => setIsHovering(false)}
        >
          Discover More
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{ ...style, width: { xs: "70%", sm: "50%", md: "auto" } }}
            style={{ backgroundColor: "#033d58", color: "white" }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Detailed about my work
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, textAlign: "left" }}
            >
             Please visit:   <a href="https://github.com/Saiful002?tab=repositories" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ color: "white",fontSize: 30,alignItems:'center' }} />
            </a>
            </Typography>
          </Box>
        </Modal>
      </div>



    </Box>
  );
};

export default Projects;