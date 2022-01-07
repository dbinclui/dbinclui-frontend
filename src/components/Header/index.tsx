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
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../svgs/logo';
import './styles.css';
import AccessibilityTypography from '../../components/AccessibilityTypography';

export interface HeaderProps {}

export interface MenuItemsInterface {
  title: string;
  href: string;
}

export const MenuItems: MenuItemsInterface[] = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: 'SOBRE',
    href: '/sobre',
  },
  {
    title: 'AJUDA',
    href: '/ajuda',
  },
  {
    title: 'CONTATO',
    href: '/contato',
  },
  {
    title: 'AVALIAR O APP',
    href: '/avaliar-app',
  },
  {
    title: 'LOGIN',
    href: '/login',
  },
];

export const Header: React.FC<HeaderProps> = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const navigate = useNavigate();

  const handleChangePage = (
    target: React.MouseEvent<HTMLElement>['currentTarget'],
  ) => {
    setAnchorElNav(target);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      role="header"
      position="static"
      className="app-header"
      elevation={0}
    >
      <Container>
        <Toolbar disableGutters className="toolbar">
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Logo />
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
              {MenuItems.map((item, key) => (
                <MenuItem key={key}>
                  <Typography
                    textAlign="center"
                    color="black"
                    className="menu-item-mobile"
                    component={Link}
                    to={item.href}
                  >
                    <AccessibilityTypography>
                      {item.title}
                    </AccessibilityTypography>
                  </Typography>
                </MenuItem>
              ))}
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

          <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
            className="box-links"
          >
            {MenuItems.map((item, key) => (
              <Button
                key={key}
                className="menu-item-desktop"
                component={Link}
                to={item.href}
                onClick={({ currentTarget }: React.MouseEvent<HTMLElement>) =>
                  handleChangePage(currentTarget)
                }
              >
                <AccessibilityTypography>{item.title}</AccessibilityTypography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Administrador">
              <IconButton sx={{ p: 0 }} onClick={() => navigate('admin')}>
                <Avatar src="/broken-image.jpg" />
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
                <AccessibilityTypography textAlign="center"></AccessibilityTypography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
