import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Button, Typography } from "@mui/material";
import html from "../../Images/html5.svg";
import react from "../../Images/react.svg";
import java from "../../Images/java.svg";
import js from "../../Images/javascript.svg";
import firebase from "../../Images/firebase.svg";
import nodejs from "../../Images/nodejs.png";
import express from "../../Images/express.png";
import mongodb from "../../Images/mongodb.png";
import css from "../../Images/css3.svg";
import c from "../../Images/c.png";
import git from "../../Images/git.svg";
import ts from "../../Images/typescript.jpg";
import nextjs from "../../Images/nextjs.png";
import msql from "../../Images/msql.png";
import php from "../../Images/php.png";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/variants";

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

const Skills = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isHovering, setIsHovering] = useState(false);

  const technologies = [
    {
      name: "HTML5",
      percentage: "80%",
      src: `${html}`,
      style: {
        backgroundColor: "#ff6c39",
        boxShadow: "0 0 5px #ff6c39, 0 0 15px #ff6c39,0 0 30px #ff6c39",
      },
    },
    {
      name: "CSS3",
      percentage: "50%",
      src: `${css}`,
      style: {
        backgroundColor: "#1f62ae",
        boxShadow: "0 0 5px #1f62ae, 0 0 15px #1f62ae,0 0 30px #1f62ae",
      },
    },
    {
      name: "JAVASCRIPT",
      percentage: "60%",
      src: `${js}`,
      style: {
        backgroundColor: "#f0db4f",
        boxShadow: "0 0 5px #f0db4f, 0 0 15px #f0db4f,0 0 30px #f0db4f",
      },
    },
    {
      name: "REACT",
      percentage: "50%",
      src: `${react}`,
      style: {
        backgroundColor: "#00d8ff",
        boxShadow: "0 0 5px #00d8ff, 0 0 15px #00d8ff,0 0 30px #00d8ff",
      },
    },
    {
      name: "TYPESCRIPT",
      percentage: "65%",
      src: `${ts}`,
      style: {
        backgroundColor: "#007acd",
        boxShadow: "0 0 5px #007acd, 0 0 15px #007acd,0 0 30px #007acd",
      },
    },
    {
      name: "PHP",
      percentage: "30%",
      src: `${php}`,
      style: {
        backgroundColor: "#777bb3",
        boxShadow: "0 0 5px #777bb3, 0 0 15px #777bb3,0 0 30px #777bb3",
      },
    },
    {
      name: "C",
      percentage: "40%",
      src: `${c}`,
      style: {
        backgroundColor: "#293693",
        boxShadow: "0 0 5px #293693, 0 0 15px #293693,0 0 30px #293693",
      },
    },
    {
      name: "JAVA",
      percentage: "40%",
      src: `${java}`,
      style: {
        backgroundColor: "#5382a1",
        boxShadow: "0 0 5px #5382a1, 0 0 15px #5382a1,0 0 30px #5382a1",
      },
    },
    {
      name: "NEXTJS",
      percentage: "50%",
      src: `${nextjs}`,
      style: {
        backgroundColor: "black",
        boxShadow: "0 0 5px black, 0 0 15px black,0 0 30px black",
      },
    },
    {
      name: "NODEJS",
      percentage: "40%",
      src: `${nodejs}`,
      style: {
        backgroundColor: "#3f9832",
        boxShadow: "0 0 5px #3f9832, 0 0 15px #3f9832,0 0 30px #3f9832",
      },
    },
    {
      name: "ExpressJs",
      percentage: "50%",
      src: `${express}`,
      style: {
        backgroundColor: "black",
        boxShadow: "0 0 5px gray, 0 0 15px gray,0 0 30px gray",
      },
    },
    {
      name: "MYSQL",
      percentage: "50%",
      src: `${msql}`,
      style: {
        backgroundColor: "#bd844a",
        boxShadow: "0 0 5px #bd844a, 0 0 15px #bd844a,0 0 30px #bd844a",
      },
    },
    {
      name: "MONGODB",
      percentage: "50%",
      src: `${mongodb}`,
      style: {
        backgroundColor: "#402f1f",
        boxShadow: "0 0 5px #402f1f, 0 0 15px #402f1f,0 0 30px #402f1f",
      },
    },
    {
      name: "FIREBASE",
      percentage: "60%",
      src: `${firebase}`,
      style: {
        backgroundColor: "#ffa000",
        boxShadow: "0 0 5px #ffa000, 0 0 15px #ffa000,0 0 30px #ffa000",
      },
    },
    {
      name: "GIT",
      percentage: "55%",
      src: `${git}`,
      style: {
        backgroundColor: "#e35449",
        boxShadow: "0 0 5px #e35449, 0 0 15px #e35449,0 0 30px #e35449",
      },
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#020b1c" }} id="skills">
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
          Ski<span style={{ color: "#ef6c00" }}>lls</span>
        </Typography>
        <Typography
          sx={{ color: "white", textAlign: "center", marginY: "50px" }}
          variant="h6"
        >
          The Technologies I am Worked With
        </Typography>
      </motion.div>

      <Grid
        container
        rowGap={{ xs: 4, sm: 4, md: 4 }}
        sx={{ mx: { xs: "30px", sm: "50px", md: "50px" }, py: "20px" }}
      >
        {technologies.map(({ name, percentage, src, style }, index: number) => (
          <Grid xs={12} sm={6} md={4} key={index}>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <img
                src={src}
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                }}
                alt=""
              />

              <div
                style={{
                  width: "95%",
                  backgroundColor: "#ddd",
                  marginTop: "5px",
                }}
              >
                <div
                  style={{
                    ...style,
                    textAlign: "right",
                    color: "white",
                    width: `${percentage}`,
                    fontSize: "15px",
                  }}
                >
                  {name} {percentage}
                </div>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* MODAL PART */}

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
            sx={{ ...style, width: { xs: "100%", sm: "50%", md: "auto" } }}
            style={{ backgroundColor: "#033d58", color: "white" }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Detailed Skills
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, textAlign: "left" }}
            >
              As a computer science student I have also applicable knowledge
              about core concepts of Structured Programming, Data Structure,
              Object Oriented Programming, Algorithm and so on.
              <br />
              <br />
              Besides I also have good Communication and Presentation skills.
            </Typography>
          </Box>
        </Modal>
      </div>
    </Box>
  );
};

export default Skills;
