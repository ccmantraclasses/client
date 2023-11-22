import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate, useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';

import HeaderDialog from 'src/components/header-dialog';

import { HEADER } from './config-layout';

// ----------------------------------------------------------------------

export default function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const lgUp = useResponsive('up', 'lg');

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navlinks = [
    { id: 1, label: 'Home', location: '/' },
    { id: 2, label: 'About', location: '/about-us' },
    { id: 3, label: 'Courses', location: '/courses' },
    { id: 3, label: 'Lectures', location: '/lectures' },
    { id: 4, label: 'Gallery', location: '/gallery' },
    { id: 5, label: 'Contact', location: '/contact' },
    // { id: 6, label: 'Reviews', location: '/reviews' },
  ];

  const handleNavigation = (tempLocation) => {
    try {
      navigate(tempLocation);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 'none',
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(lgUp && {
            width: '100%',
            height: HEADER.H_DESKTOP,
          }),
        }}
      >
        <Toolbar
          sx={{
            height: 1,
            px: { lg: 5 },
          }}
        >
          <Link href="/">
            <img src="/assets/ccmantralogo.png" alt="ccmantra" width={55} height={55} />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            alignItems="center"
            spacing={7}
            mr={5}
            sx={{ display: { lg: 'flex', sm: 'none', xs: 'none' } }}
          >
            {navlinks.map((nl) => (
              <Link
                key={nl.id}
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  ...(nl.id === 1 && {
                    bgcolor: '#E9204F',
                    p: 1,
                    color: 'white',
                    borderRadius: 1,
                  }),
                }}
                onClick={() => handleNavigation(nl.location)}
              >
                <Typography
                  color="black"
                  fontFamily="Poppins"
                  fontWeight={pathname === nl.location ? 700 : 500}
                  sx={{
                    ...(nl.id === 1 && {
                      color: 'white',
                    }),
                    ':hover': {
                      color: 'black',
                      textDecoration: 'underline',
                      textUnderlineOffset: 3,
                    },
                  }}
                >
                  {nl.label}
                </Typography>
              </Link>
            ))}
          </Stack>
          {/* <Button
          sx={{
            bgcolor: '#E9204F',
            color: 'white',
            fontFamily: 'Poppins',
            width: 100,
            ml: 2,
            ':hover': {
              transform: 'scale(1.05)',
              bgcolor: '#5A4BDA',
            },
          }}
        >
          Register
        </Button> */}
          <IconButton
            sx={{ display: { lg: 'none', sm: 'block', xs: 'block' }, ml: 1 }}
            onClick={() => setOpen(true)}
          >
            <Icon icon="mdi:menu" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {open && <HeaderDialog open={open} setOpen={setOpen} />}
    </>
  );
}

// Header.propTypes = {
//   onOpenNav: PropTypes.func,
// };
