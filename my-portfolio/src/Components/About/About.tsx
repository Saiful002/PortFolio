import Grid from '@mui/material/Unstable_Grid2';
import aboutbg from '../../Images/about_hero.jpeg'
import { Box, Button, Typography } from '@mui/material';
import {useState} from 'react';

const About = () => {
    const [isHovering, setIsHovering] = useState(false);
  return (


    <Box sx={{backgroundColor:'#020b1c'}} id='about'>
      <Typography sx={{color:' #fdfeff',display:'flex',justifyContent:'center',py:{xs:'50px',sm:'100px'},boxShadow:'0 0 6px rgb(41,185,82), 0 0 3px beige inset',fontFamily:''}}variant='h4'>About <span style={{color:'#ef6c00'}}> Me</span></Typography>
      
    <Grid container sx={{alignItems:'center',marginX:'25px'}} > 



    <Grid sm={6} md={6} sx={{display:{xs:'flex',sm:'flex'},justifyContent:'center',}}>

<img src={`${aboutbg}`} alt="" style={{margin:'50px 0px 50px 0px',width:'100%',height:'auto'}}/>


    </Grid>


    <Grid sm={6} md={6} sx={{paddingLeft:'15px'}}>

{/* Animated text from simple typewriter */}

    <h1 style={{ paddingTop: '5rem',  fontWeight: 'bold',color:'white',lineHeight:'50px'}}>
       Hello there <br /> I'm <span style={{ color: '#ef6c00', fontWeight: 'normal' }}> Saiful Kabir Chowdhury</span>
      </h1>

      <Box>
        <h4 style={{color:'white'}}> a passionate and experienced full stack web developer. With a strong foundation in both front-end and back-end technologies, I have the ability to craft entire web applications that not only look great but also function seamlessly.</h4>
        
      </Box>

      <Button variant="contained" sx={{display:'flex',justifyContent:'right' ,backgroundColor:'#ffd066',color:'black',my:'50px',fontWeight:'bold'}}
      
      style={{
        backgroundColor: isHovering ? '#fec544': '#ffd066',
        
        boxShadow:isHovering ?'0 0 5px #fec544, 0 0 15px #fec544,0 0 30px #fec544':'none',
        borderRadius:'50px',
        color:isHovering?'white':'black'
      }}
      onMouseEnter={()=>setIsHovering(true)}      //React hovering effect for navbar item problem solved from stackoverflow
      onMouseLeave={()=>setIsHovering(false)}
      >Download CV</Button>
    </Grid>
    

   </Grid>
   </Box>
  )
}

export default About