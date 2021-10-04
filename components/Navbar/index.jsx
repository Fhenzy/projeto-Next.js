import { AppBar, Toolbar, Box } from '@mui/material';
import Image from 'next/image'
import Logo from '../../public/logo.jpg'
// import { makeStyles } from '@material-ui/styles';

/*const useStyles = makeStyles({
    rooot: {
        background: '#f00000',
    },
  });
  */

const Navbar = () => {
  // const classes = useStyles();

    return (    
        <AppBar sx={{background: '#f00000'}} >
          <Box sx={{display: 'flex', justifyContent: 'center',}} >
           <Toolbar sx={{width: 140}}>
            <Image src={Logo} alt="logo" />
            </Toolbar>
            </Box>
        </AppBar>
     
    )
}
export default Navbar;