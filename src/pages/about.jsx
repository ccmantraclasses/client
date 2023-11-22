/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';

import { Box, Grid, Stack, Paper, Container, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import WhatsAppCom from 'src/components/whatsapp-com';

const ContactCard = ({ label, description, icon, href = '' }) => (
  <a href={href || null} target="__blank">
    <Box
      component={Paper}
      sx={{
        height: 180,
        p: 1,
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.08)',
        },
        cursor: 'pointer',
      }}
      elevation={5}
    >
      <Stack
        sx={{ width: '100%', height: '100%' }}
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Icon icon={icon} width={30} color="#E9204F" />
        <Typography fontFamily="Poppins">{label}</Typography>
        <Typography fontFamily="Poppins" fontSize={11} textAlign="center">
          {description}
        </Typography>
      </Stack>
    </Box>
  </a>
);

const About = () => {
  const mdUp = useResponsive('up', 'md');
  const contactCards = [
    {
      id: 1,
      label: 'Address',
      description: 'Opposite Chandra Store, Martindle Bridge, Shri Nagar Road, Ajmer',
      icon: 'mdi:map-marker-multiple',
      href: 'https://maps.app.goo.gl/bG3QKR6rfdTjcUvR7',
    },
    { id: 2, label: 'Phone', description: '+91 9694501023', icon: 'mdi:phone' },
    {
      id: 3,
      label: 'Email',
      description: 'ccmantra@gmail.Com',
      icon: 'mdi:email',
      href: 'mailto:ccmantra@gmail.com',
    },
  ];
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 120,
          bgcolor: '#E9204F',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          pr: 5,
        }}
      >
        <Typography fontFamily="Poppins" color="white" fontSize={mdUp ? 30 : 25}>
          Valueable words from Sir!
        </Typography>
      </Box>

      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={2} mt={5} justifyContent="center" alignItems="flex-start">
          <Grid
            item
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src="/assets/gauravchaudhary.jpg" alt="" width={350} height={450} />
            <Typography fontFamily="Poppins" fontWeight={600}>
              Gaurav Chaudhary
            </Typography>
            <Typography fontFamily="Poppins" mt={2}>
              Expertises
            </Typography>
            <Typography fontFamily="Poppins">( Accounts, Business Studies</Typography>
            <Typography fontFamily="Poppins">Political Science, Rajasthan G.K. )</Typography>
          </Grid>
          <Grid item md={7}>
            <Box sx={{ width: '100%' }}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  textAlign: 'left',
                  fontSize: 30,
                }}
              >
                Dear Students,
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  textAlign: 'left',
                  fontSize: 20,
                  mt: 1,
                }}
              >
                Welcome to CCMantra!
              </Typography>
            </Box>

            <Typography sx={{ fontFamily: 'Poppins', lineHeight: 1.8, mt: 1 }}>
              Our mission is to empower you with knowledge, guide you to success, and nurture your
              dreams. Our team of dedicated educators is here to support your academic journey. We
              provide the best-in-coaching and a commitment to your growth. We believe in your
              potential and are here to help you unlock it. As you embark on this educational
              voyage, remember that success is not a destination but a journey. It requires hard
              work, determination, and guidance. We are here to provide that guidance, but your
              commitment is the key. I encourage you to make the most of your time here, ask
              questions, seek help, and strive for excellence. With your dedication and our
              expertise, your goals are within reach. I look forward to witnessing your achievements
              and celebrating your success. Together, let&apos;s make your dreams a reality. Wishing
              you a successful and fulfilling learning experience.
            </Typography>

            <Stack direction="column" mt={2} width="100%">
              <Typography sx={{ fontFamily: 'Poppins' }}>Warm Regards</Typography>
              <Typography sx={{ fontFamily: 'Poppins' }}>Gaurav Chaudhary</Typography>
              <Typography sx={{ fontFamily: 'Poppins' }}>Director</Typography>
              <Typography sx={{ fontFamily: 'Poppins' }}>CC MANTRA</Typography>
            </Stack>

            <Grid container spacing={3} mt={2} justifyContent="center" alignItems="center">
              {contactCards.map((c) => (
                <Grid item md={4} sm={12} xs={12}>
                  <ContactCard {...c} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <WhatsAppCom />
    </>
  );
};

export default About;
