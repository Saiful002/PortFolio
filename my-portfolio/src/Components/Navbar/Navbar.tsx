import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import {useState} from 'react';
import nav_logo from '../../Images/nav-logo.jpg';
import { Link } from 'react-scroll';
interface Props {

    window?: () => Window;
  }
  
  const drawerWidth = 240;
 // const navItems = ['Home', 'About', 'Resume','Portfolio','Contact'];

 const navItems=[
  {
    item:'Home',
    href:"#home"
  },

  {
    item:'About',
    href:"#about"
  },
  {
    item:'Skills',
    href:"#skills"
  },
  {
    item:'Projects',
    href:"#projects"
  },
  {
    item:'Contact',
    href:"#mail"
  },
 ]

const Navbar:any = (props: Props) => {
  const [isHovering, setIsHovering] = useState(-1);
      
    
        const { window } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);
      
        const handleDrawerToggle = () => {
          setMobileOpen((prevState) => !prevState)};
        
//Responsive drawer

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',py:'5px' }}>
          <img width={'90px'} height={'80px'} src={nav_logo} alt="" />
          <Divider />
          <List sx={{mx:'50px'}}>
            {navItems.map(({item,href}) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} href={href}>
                  
                  {item}
                  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );
    
      const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <AppBar component="nav">
      
        <Toolbar sx={{ display: 'flex'}} style={{backgroundColor:'black',opacity:'0.8'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        <Grid sm={4}>
        <Box
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },py:'5px' }}
          >
            <img width={'90px'} height={'80px'} src={nav_logo} alt="" />
          </Box>
        </Grid>
          <Grid sm={8}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}
          
           >
            {navItems.map(({item,href},index:number) => (
              <Button href={href}  key={item} sx={{color:'#fdfeff'}}
              style={{
                color: isHovering==index ? '#fec544' :'#fdfeff',//
              }}
              onMouseEnter={()=>setIsHovering(index)}      //React hovering effect for navbar item problem solved from stackoverflow
              onMouseLeave={()=>setIsHovering(-1)}>
              {item}
              </Button>
            ))}
          </Box>
          </Grid>
          
        </Toolbar>
        
      </AppBar>
     




      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },textAlign:"center"
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
    </Box>
    </Grid>
  )
}

export default Navbar;