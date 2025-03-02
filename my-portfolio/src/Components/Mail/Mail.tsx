import React, { useState } from "react";
import { Box, Button, Typography, Grid, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn } from "../FramerMotion/variants"; // Ensure you have your fadeIn variant defined
import MailOutlineIcon from "@mui/icons-material/MailOutline"; // You can replace with any icon you'd like

const Mail: React.FC = () => {
  const [formData, setFormData] = useState({
    yourmail: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert("Mail sent successfully!");
        setFormData({ yourmail: "", body: "" }); // Clear form after success
      } else {
        alert("Ooops Server not started!");
        setFormData({ yourmail: "", body: "" });
      }
    } catch (error) {
      alert("Ooops Server not started!");
        setFormData({ yourmail: "", body: "" });
    }
  };

  return (
    <Box sx={{ backgroundColor: "#020b1c" }} id="mail">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <Typography
          sx={{
            color: "#fdfeff",
            display: "flex",
            justifyContent: "center",
            py: { xs: "50px", sm: "100px" },
            boxShadow: "0 0 6px rgb(41,185,82), 0 0 3px beige inset",
          }}
          variant="h4"
        >
          Get In <span style={{ color: "#ef6c00" }}> Touch</span>
        </Typography>
      </motion.div>

      <Grid
      container
        sx={{
          px: { xs: "0px", sm: "50px", md: "50px" },
          py: "10px",
          mt: "50px",
          display: "flex",
          justifyContent:"center",
          flexWrap: "wrap",
          gap: "20px",
          
        }}
      >
        {/* Mail Form */}
        <Grid xs={12} sm={8} md={8}>
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.9 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              width: "100%",
              
            }}
          >
            <Box
              sx={{
                textAlign: "center",
                backgroundColor: "#1e293b",
                borderRadius: "8px",
                padding: { xs: "15px", sm: "20px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                width: "100%",
                mb:"50px"
              }}
            >
              <Typography variant="h6" sx={{mb:"10px", color: "#fdfeff", mt: "10px" }}>
                Your Opinion
              </Typography>

              <TextField
                required
                placeholder="your mail"
                name="yourmail"
                value={formData.yourmail}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#fff",
                  marginBottom: "15px",
                }}
              />
            
              <TextField
                required
                placeholder="Message"
                name="body"
                value={formData.body}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                sx={{
                  backgroundColor: "#fff",
                  marginBottom: "20px",
                }}
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  backgroundColor: "#ffd066",
                  color: "black",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#fec544",
                    boxShadow: "0 0 5px #fec544, 0 0 15px #fec544, 0 0 30px #fec544",
                  },
                }}
              >
                Send Mail
              </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mail;
