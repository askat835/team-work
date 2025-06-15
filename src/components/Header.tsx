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
// import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/sanjyra.png';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useDispatch, useSelector } from 'react-redux';
import {type RootState } from '../store/store';
import { openModal, logout } from '../store/action';

const pages = [
  { name: 'Главная', path: '/' },
  { name: 'национальные блюда', path: '/Product' },
  { name: 'О компании', path: '/Companies' },
  { name: 'Корзина', path: '/Basket' },
  { name: 'Контакты', path: '/Contact' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenLoginModal = () => {
    dispatch(openModal());
    handleCloseNavMenu();
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('loggedIn');
    handleCloseUserMenu();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="Санжыра логотипи"
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: 60,
              mr: 2,
            }}
          />
          <RestaurantIcon style={{ color: 'brown' }} />

          {/* Мобилдик меню */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    navigate(page.path);
                    handleCloseNavMenu();
                  }}
                  sx={{ justifyContent: 'center' }}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
              {!isLoggedIn && (
                <MenuItem
                  onClick={handleOpenLoginModal}
                  sx={{ justifyContent: 'center', fontWeight: 'bold', color: 'brown' }}
                >
                  Кирүү
                </MenuItem>
              )}
            </Menu>
          </Box>

          {/* Десктоп меню */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: '80px',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  navigate(page.path);
                  handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  color: 'brown',
                  display: 'block',
                  fontWeight: 'bold',
                }}
              >
                {page.name}
              </Button>
            ))}

            {!isLoggedIn && (
              <Button
                onClick={handleOpenLoginModal}
                sx={{
                  my: 2,
                  color: 'brown',
                  display: 'block',
                  fontWeight: 'bold',
                }}
              >
                вход
              </Button>
            )}
          </Box>

          {/* Киргенден кийин профиль и Logout */}
          {isLoggedIn && (
            <Box sx={{ flexGrow: 0, marginLeft: 'auto' }}>
              <Tooltip title="Профилди ачуу">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
                  <Avatar
                    alt="User"
                    src="/static/images/avatar/2.jpg"
                    sx={{
                      border: '2px solid brown',
                      width: 40,
                      height: 40,
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{
                  mt: '45px',
                  '& .MuiMenu-paper': {
                    backgroundColor: 'white',
                    borderRadius: 2,
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                  },
                }}
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleLogout}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: 'brown',
                      fontWeight: 'bold',
                    }}
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;



// import * as React from 'react';
// // Redux dispatch үчүн
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
// import { useNavigate } from 'react-router-dom';
// import Logo from '../assets/sanjyra.png';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import {  useDispatch } from 'react-redux';
// // import type { RootState } from '../store/store';

// // Бул жерде сенин Redux экшн:
// import { openModal } from '../store/action';

// const pages = [
//   { name: 'Главная', path: '/' },
//   { name: 'национальные блюда', path: '/Product' },
//   { name: 'О компании', path: '/Companies' },
//   { name: 'Корзина', path: '/Basket' },
//   { name: 'Контакты', path: '/Contact' }
// ];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   // const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   // Кнопка "Кирүү" басканда модал ачуу үчүн функция
//   const handleOpenLoginModal = () => {
//     dispatch(openModal());
//     handleCloseNavMenu();
//   };

//   return (
//     <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box
//             component="img"
//             src={Logo}
//             alt="Санжыра логотипи"
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               height: 60,
//               mr: 2,
//             }}
//           />
//           <RestaurantIcon style={{ color: 'brown' }} />

//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             {/* Логотиптеги текст керек болсо */}
//           </Typography>

//           {/* Мобильдик меню */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem
//                   key={page.name}
//                   onClick={() => {
//                     navigate(page.path);
//                     handleCloseNavMenu();
//                   }}
//                   sx={{ justifyContent: 'center' }}
//                 >
//                   <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
//                 </MenuItem>
//               ))}
//               {/* Мобильдик менюга Кирүү баскычы */}
//               <MenuItem
//                 onClick={handleOpenLoginModal}
//                 sx={{ justifyContent: 'center', fontWeight: 'bold', color: 'brown' }}
//               >
//                 Кирүү
//               </MenuItem>
//             </Menu>
//           </Box>

//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>

//           {/* Десктоп меню */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: 'none', md: 'flex' },
//               justifyContent: 'center',
//               gap: '80px',
//             }}
//           >
//             {pages.map((page) => (
//               <Button
//                 key={page.name}
//                 onClick={() => {
//                   navigate(page.path);
//                   handleCloseNavMenu();
//                 }}
//                 sx={{
//                   my: 2,
//                   color: 'brown',
//                   display: 'block',
//                   fontWeight: 'bold',
//                 }}
//               >
//                 {page.name}
//               </Button>
//             ))}

//             {/* Десктоп менюга Кирүү баскычы */}
//             <Button
//               onClick={handleOpenLoginModal}
//               sx={{
//                 my: 2,
//                 color: 'brown',
//                 display: 'block',
//                 fontWeight: 'bold',
//               }}
//             >
//               вход 
//             </Button>
//           </Box>

//           {/* Профиль сүрөт жана меню */}
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Профилди ачуу">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
//                 <Avatar
//                   alt="M"
//                   src="/static/images/avatar/2.jpg"
//                   sx={{
//                     border: '2px solid brown',
//                     width: 40,
//                     height: 40,
//                   }}
//                 />
//               </IconButton>
//             </Tooltip>

//             <Menu
//               sx={{
//                 mt: '45px',
//                 '& .MuiMenu-paper': {
//                   backgroundColor: 'white',
//                   borderRadius: 2,
//                   boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
//                 },
//               }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem
//                   key={setting}
//                   onClick={handleCloseUserMenu}
//                   sx={{
//                     justifyContent: 'center',
//                     '&:hover': {
//                       backgroundColor: 'rgba(165, 42, 42, 0.1)',
//                     },
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       textAlign: 'center',
//                       color: 'brown',
//                       fontWeight: 'bold',
//                     }}
//                   >
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default ResponsiveAppBar;
