/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import { Link, Slide, Stack, Dialog, Typography, IconButton } from '@mui/material';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const HeaderDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const navlinks = [
    { id: 1, label: 'Home', location: '/' },
    { id: 2, label: 'About', location: '/about-us' },
    { id: 3, label: 'Courses', location: '/courses' },
    { id: 3, label: 'Lectures', location: '/lectures' },
    { id: 4, label: 'Gallery', location: '/gallery' },
    { id: 5, label: 'Contact', location: '/contact' },
  ];

  const handleNavigation = (tempLocation) => {
    try {
      navigate(tempLocation);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <Stack direction="row" p={1} px={2} justifyContent="space-between">
        <img src="/assets/ccmantralogo.png" alt="" width={80} height={80} />
        <IconButton onClick={() => setOpen(false)}>
          <Icon icon="mdi:close" />
        </IconButton>
      </Stack>
      <Stack sx={{ width: '100%', mt: 5 }} justifyContent="center" alignItems="center" spacing={5}>
        {navlinks.map((nl) => (
          <Link
            key={nl.id}
            sx={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={() => handleNavigation(nl.location)}
          >
            <Typography
              color="black"
              fontFamily="Poppins"
              fontWeight={500}
              fontSize={25}
              sx={{
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
    </Dialog>
  );
};

export default HeaderDialog;
