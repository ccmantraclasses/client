/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Paper, Stack, Container, Typography } from '@mui/material';

const RenderTestimonial = ({ description, user }) => (
  <Paper sx={{ height: 250, pd: 2 }}>
    <Stack direction="column" justifyContent="center" alignItems="center" height="100%" spacing={5}>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Icon icon="ei:user" width={65} />
        <Typography fontFamily="Poppins" fontWeight={600} fontSize={25} textAlign="center">
          {user}
        </Typography>
      </Stack>
      <Typography fontFamily="Poppins" fontWeight={500} fontSize={20} textAlign="center">
        &quot; {description} &quot;
      </Typography>
    </Stack>
  </Paper>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      description: "Outstanding service! I can't believe how great it was.",
      user: 'Abhi Jain',
    },
    { id: 2, description: 'These guys are amazing! Highly recommended!', user: 'Gaurav Jain' },
    { id: 3, description: "A great platform to study with some excellent experience faculty", user: 'Deeksha Sharma' },
    { id: 4, description: "This is best Institute in Ajmer. Sir ki teaching teaching is good.", user: 'Mansi Goyal' },
    { id: 5, description: 'This is the first time I have attended a class in this format & wonderfull & effective it be.', user: 'Pratik Rajoriya' },
    { id: 6, description: "It is perfect in all aspects.", user: 'Surbhi' },
    { id: 7, description: "It is the best institute for Competition.", user: 'Surbhi Jain' },
  ];

  const renderItems = testimonials.map((t) => <RenderTestimonial {...t} />);

  return (
    <Container sx={{ mt: 10 }}>
      <Typography
        fontFamily="Poppins"
        fontSize={30}
        fontWeight={600}
        color="#E9204F"
        textAlign="center"
      >
        Testimonials
      </Typography>
      <Stack direction="row" justifyContent="center" width="100%" height="100%" mt={1}>
        <AliceCarousel
          items={renderItems}
          responsive={{
            0: { items: 1 },
          }}
          autoPlay
          disableDotsControls
          disableButtonsControls
          autoPlayInterval={2000}
          infinite
        />
      </Stack>
    </Container>
  );
};

export default Testimonials;
