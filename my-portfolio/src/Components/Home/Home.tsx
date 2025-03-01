import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import pf1 from "../../Images/picofme.png";
import pf2 from "../../Images/home_bg.jpg";
import { Box, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/variants";

const Home = () => {
  const [isHovering, setIsHovering] = useState(-1);
  //const icons = [<FacebookIcon/>, <GitHubIcon/>, <LinkedInIcon/>,<InstagramIcon/>];

  const icons = [
    {
      icon: <FacebookIcon />,
      href: "https://www.facebook.com/caudhuri.saheba.255136/",
      style: {
        boxShadow: "2px 2px 2px 2px #1877f2",
      },
    },
    {
      icon: <GitHubIcon />,
      href: "https://github.com/Saiful002",
      style: {
        boxShadow: "2px 2px 2px 2px #e6edf3",
      },
    },
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/saiful-kabir-chowdhury-a58a57353/",
      style: {
        boxShadow: "2px 2px 2px 2px #0a66aa",
      },
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/_saiful_kabir/",
      style: {
        boxShadow: "2px 2px 2px 2px #fb5343 ",
      },
    },
  ];

  //    const Customstyle={color: isHovering ? 'blue': '#fec544',
  // backgroundColor:isHovering ? 'white': 'black',
  // border:isHovering ?'1px solid #fff8e1': 'none',
  // boxShadow:isHovering ?'1px 1px ':'none',
  // borderRadius:isHovering ?'50px':'none',}

  return (
    <Box
      style={{
        backgroundImage: `url(${pf2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      sx={{ pb: "80px", pt: "40px" }}
      id="home"
    >
      <Grid container sx={{ alignItems: "center", marginX: "25px" }}>
        <Grid sm={6} md={6} sx={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
          {/* Animated text from simple typewriter */}

          <motion.h1
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            style={{
              paddingTop: "5rem",
              fontWeight: "normal",
              color: "white",
              lineHeight: "80px"
            }}
          >
            Hey I'm <br />{" "}
            <span
              style={{ fontWeight: "bold", color: "white", fontSize: "40px" }}
            >
              Saiful Kabir Chowdhury
            </span>{" "}
            <br />a{" "}
            <span style={{ color: "#ef6c00", fontWeight: "normal" }}>
              <Typewriter
                words={["Developer", "Quick Learner", "CSE Student"]}
                loop={false}
                cursor
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
          </motion.h1>
          <Box>
            {icons.map(({ icon, href, style }, index: number) => (
              <Button
              target="_blank"
                href={href}
                sx={{
                  color: isHovering == index ? "#fec544" : "#fdfeff",
                  marginLeft: { xs: "15px",md:'50px' },
                }}
                style={style}
                onMouseEnter={() => setIsHovering(index)} //React hovering effect for navbar item problem solved from stackoverflow
                onMouseLeave={() => setIsHovering(-1)}
              >
                {icon}
              </Button>
            ))}
          </Box>
        </Grid>
        <Grid
          sm={6}
          md={4}
          sx={{
            display: { xs: "flex", sm: "flex" },
            justifyContent: "center",
            height: "100%",
            width: "100%",
            mx: "auto",
          }}
        >
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src={`${pf1}`}
              alt=""
              style={{
                margin: "100px 0px 0px 0px",
                width: "100%",
                height: "85%",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
