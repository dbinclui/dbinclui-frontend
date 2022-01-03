import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Logo from '../svgs/logo';
import './styles.css';

export interface HeaderProps {}

export interface MenuItemsInterface{
  title: string,
  href: string
}

export const MenuItems:MenuItemsInterface[] = [{
  title: 'HOME',
  href: '/'
},
{
  title: 'SOBRE',
  href: '/sobre'
},
{
  title: 'AJUDA',
  href: '/ajuda'
},
{
  title: 'CONTATO',
  href: '/contato'
},
{
  title: 'AVALIAR O APP',
  href: '/avaliar-app'
},
{
  title: 'LOGIN',
  href: '/login'
}];

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className="app-header" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="toolbar">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Logo/>
          </Typography>

          {/*MENU HAMBURGUER*/}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {MenuItems.map((item, key) => <MenuItem key={key} to={item.href} component={Link}>
                <Typography textAlign="center" color="black" className="button-teste">
                  {item.title}
                </Typography>
                </MenuItem>)}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Logo />
          </Typography>


          {/*MENU DESKTOP*/}
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="box-links">
              {MenuItems.map((item, key) => <Button key={key} href={item.href} onClick={handleCloseNavMenu}>{item.title}</Button>)}
            
          </Box>
          

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={false}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"></Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;

// import { Link, Grid, Container, IconButton } from '@mui/material';
// import React from 'react';
// import './styles.css';
// import Logo from '../svgs/logo';
// import PersonIcon from '@mui/icons-material/Person';

// export interface HeaderProps {}

// export const Header: React.FC<HeaderProps> = (): JSX.Element => {
//   return (
//     <header className="dbinclui-header">
//       <Container>
//         <Grid container className="grid-container-header">
//           <Grid item>
//             <Link
//               className="nav-logo"
//               underline="hover"
//               color="inherit"
//               href="/"
//             >
//               <Logo />
//             </Link>
//           </Grid>
//           <div className="mobile-menu">
//             <div className="line-1"></div>
//             <div className="line-2"></div>
//             <div className="line-3"></div>
//           </div>
//           <Grid item>
//             <nav className="nav-links">
//               <Link
//                 className="nav-item"
//                 underline="hover"
//                 color="#ffffff"
//                 href="/"
//               >
//                 HOME
//               </Link>
//               <Link
//                 className="nav-item"
//                 underline="hover"
//                 color="#ffffff"
//                 href="/sobre"
//               >
//                 SOBRE
//               </Link>
//               <Link
//                 className="nav-item"
//                 underline="hover"
//                 color="#ffffff"
//                 href="/ajuda"
//               >
//                 AJUDA
//               </Link>
//               <Link
//                 className="nav-item"
//                 underline="hover"
//                 color="#ffffff"
//                 href="/contato"
//               >
//                 CONTATO
//               </Link>
//               <Link
//                 className="nav-item"
//                 underline="hover"
//                 color="#ffffff"
//                 href="/avaliar"
//               >
//                 AVALIAR O APP
//               </Link>
//               <Link
//                 className="nav-item"
//                 underline="hover"
//                 color="#ffffff"
//                 href="/login"
//               >
//                 LOGIN
//               </Link>
//             </nav>
//           </Grid>
//           <Grid item>
//             <div className="account-action">
//               <IconButton color="primary">
//                 <PersonIcon />
//               </IconButton>
//             </div>
//           </Grid>
//         </Grid>
//       </Container>
//     </header>
//   );
// };

// export default Header;
