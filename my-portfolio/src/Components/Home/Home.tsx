import Grid from '@mui/material/Unstable_Grid2';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import pf1 from '../../Images/home_hero.png';
import pf2 from '../../Images/home_bg.jpg';
import { Box, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {useState} from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../FramerMotion/variants'

const Home = () => {
  const [isHovering, setIsHovering] = useState(-1);
  //const icons = [<FacebookIcon/>, <GitHubIcon/>, <LinkedInIcon/>,<InstagramIcon/>];

  const icons=[
    {
      icon:(
        <FacebookIcon/>
      ),
      href:"https://www.facebook.com/",
      style:{
        boxShadow:'2px 2px 2px 2px #1877f2',
      }
    },
    {
      icon:(
        <GitHubIcon/>
      ),
      href:"https://github.com/",
      style:{
        boxShadow:'2px 2px 2px 2px #e6edf3',
      }
    },
    {
      icon:(
        <LinkedInIcon/>
      ),
      href:"https://www.facebook.com/",
      style:{
        boxShadow:'2px 2px 2px 2px #0a66aa',
      }
    },
    {
      icon:(
        <InstagramIcon/>
      ),
      href:"https://www.facebook.com/",
      style:{
        boxShadow:'2px 2px 2px 2px #fb5343 ',
      }
    }
  ]


//    const Customstyle={color: isHovering ? 'blue': '#fec544',
// backgroundColor:isHovering ? 'white': 'black',
// border:isHovering ?'1px solid #fff8e1': 'none',
// boxShadow:isHovering ?'1px 1px ':'none',
// borderRadius:isHovering ?'50px':'none',}

    
  return (
   <Box style={{backgroundImage:`url(${pf2})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}} sx={{pb:{xs:'50px'},py:'40px'}} id='home'>
    <Grid container sx={{alignItems:'center',marginX:'25px'}} >   
    <Grid sm={6} md={8}>

{/* Animated text from simple typewriter */}

    <motion.h1 
    variants={fadeIn("right",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
    style={{ paddingTop: '5rem',  fontWeight: 'normal',color:'white',lineHeight:'80px'}}>
       Hey I'm <br /> <span style={{fontWeight: 'bold',color:'white',fontSize:'40px' }}>Saiful Kabir Chowdhury</span> <br />a{' '}
        <span style={{ color: '#ef6c00', fontWeight: 'normal' }}>                          
          
          <Typewriter
            words={['Developer', 'Quick Learner', 'CSE Student']}
            loop={false}
            cursor
            
            typeSpeed={100}
            deleteSpeed={100}
            
            
          />
        </span>
      </motion.h1>
<Box>


{icons.map(({icon,href,style},index:number) => (
              <Button href={href} sx={{color:isHovering==index ? '#fec544' :'#fdfeff',marginLeft:{sm:'30px'}}}
              style={style}
              onMouseEnter={()=>setIsHovering(index)}      //React hovering effect for navbar item problem solved from stackoverflow
              onMouseLeave={()=>setIsHovering(-1)}>
              {icon}
              </Button>
))}
</Box>
     
    </Grid>
    <Grid sm={6} md={4} sx={{display:{xs:'none',sm:'flex'},justifyContent:'center',}}>
    <motion.div
      variants={fadeIn("left",0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false,amount:0.7}}
    >
<img src={`${pf1}`} alt="" style={{marginTop:'50px',backgroundColor:'grey',width:'100%',height:'auto'}}/>
</motion.div>

    </Grid>

   </Grid>
   </Box>
  )
  }

export default Home