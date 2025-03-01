import Grid from '@mui/material/Unstable_Grid2';
import aboutbg from '../../Images/about_hero.jpeg'
import { Box, Button, Typography } from '@mui/material';
import {useState} from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../FramerMotion/variants'

const About = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleDownload = () => {
      // Triggering download
      const link = document.createElement('a');
      link.href = '/cv/updated_cv.pdf';  // Path to your CV
      link.download = 'Saiful_CV.pdf'; // Name that will appear when downloaded
      link.click();
    };
  return (


    <Box sx={{backgroundColor:'#020b1c'}} id='about'>
       <motion.div
      variants={fadeIn("down",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
    >
      <Typography sx={{color:' #fdfeff',display:'flex',justifyContent:'center',py:{xs:'50px',sm:'100px'},boxShadow:'0 0 6px rgb(41,185,82), 0 0 3px beige inset',fontFamily:''}}variant='h4'>About <span style={{color:'#ef6c00'}}> Me</span></Typography>
      </motion.div>
      
    <Grid container sx={{alignItems:'center',marginX:'25px'}} > 


   
    <Grid sm={6} md={4} sx={{
            display: { xs: "flex", sm: "flex" },
            justifyContent: "center",
            height: "100%",
            width: "100%",
            mx: "auto",
          }}>
    <motion.div
      variants={fadeIn("right",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
    >
<img src={`${aboutbg}`} alt="" style={{margin:'30px 0px 30px 0px',width:'90%',height:'87%',borderRadius:"5%"}}/>
</motion.div>

    </Grid>


    <Grid sm={6} md={6} sx={{paddingLeft:'15px'}}>

{/* Animated text from simple typewriter */}

    <motion.div
      variants={fadeIn("up",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
    >
    <h1 style={{ paddingTop: '5rem',  fontWeight: 'bold',color:'white',lineHeight:'50px'}}>
       Hello there <br /> I'm <span style={{ color: '#ef6c00', fontWeight: 'normal' }}> Saiful Kabir Chowdhury</span>
      </h1>

      <Box>
        <h4 style={{color:'white', fontWeight:'normal'}}> a passionate and experienced full stack web developer. With a strong foundation in both front-end and back-end technologies, I have the ability to craft entire web applications that not only look great but also function seamlessly.</h4>
        
      </Box>

      <Button onClick={handleDownload} variant="contained" sx={{display:'flex',justifyContent:'right' ,backgroundColor:'#ffd066',color:'black',my:'50px',fontWeight:'bold'}}
      
      style={{
        backgroundColor: isHovering ? '#fec544': '#ffd066',
        
        boxShadow:isHovering ?'0 0 5px #fec544, 0 0 15px #fec544,0 0 30px #fec544':'none',
        borderRadius:'50px',
        color:isHovering?'white':'black'
      }}
      onMouseEnter={()=>setIsHovering(true)}      //React hovering effect for navbar item problem solved from stackoverflow
      onMouseLeave={()=>setIsHovering(false)}
      >Download CV</Button>
    </motion.div>
    </Grid>
    

   </Grid>
   </Box>
  )
}

export default About