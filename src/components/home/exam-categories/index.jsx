/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import { Box, Grid, Card, Stack, Container, Typography } from '@mui/material';

const FeaturesCard = ({ image, label }) => (
  <Stack direction="column" alignItems="center" spacing={3}>
    <Box sx={{ width: 310, height: 200 }}>
      <img src={image} alt={label} width="100%" height="100%" />
    </Box>

    <Typography
      fontFamily="Poppins"
      fontWeight={500}
      textAlign="center"
      color="white"
      fontSize={18}
    >
      {label}
    </Typography>
  </Stack>
);

const ExamCard = ({ primaryLabel, secondaryLabel, link }) => (
  <a target="__blank" href={link}><Card
  sx={{
    height: 135,
    width: '100%',
    p: 1,
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.08)',
    },
    cursor: 'pointer',
  }}

>
  <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{ width: '100%', height: '100%' }}
  >
    {primaryLabel && (
      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, textAlign: 'center' }}>
        {primaryLabel}
      </Typography>
    )}
    {secondaryLabel && (
      <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500, textAlign: 'center' }}>
        {secondaryLabel}
      </Typography>
    )}
  </Stack>
</Card></a>
  
);

const ExamCategories = () => {
  const examCategories = [
    { id: 1, primaryLabel: 'IAS', link:''},
    { id: 2, primaryLabel: 'SSC', link:'',secondaryLabel: 'GD' },
    { id: 3, primaryLabel: 'SSC', link:'',secondaryLabel: 'CGL' },
    { id: 4, primaryLabel: 'SSC', secondaryLabel: 'CHSL' },
    { id: 5, primaryLabel: 'Railway' },
    { id: 6, primaryLabel: 'RAS' },
    { id: 7, primaryLabel: 'RPSC', secondaryLabel: 'Teacher First Grade' },
    { id: 8, primaryLabel: 'RPSC', secondaryLabel: 'Teacher Second Grade' },
    { id: 9, primaryLabel: 'RPSC', secondaryLabel: 'Teacher Third Grade' },
    { id: 10, primaryLabel: 'REET' },
    { id: 11, primaryLabel: 'Jr. Accountant' },
    { id: 12, primaryLabel: 'S.I. (Rajasthan Police)' },
    { id: 13, primaryLabel: 'Constable (Rajasthan Police)' },
    { id: 14, primaryLabel: 'Patwari' },
    { id: 15, primaryLabel: 'LDC' },
  ];

  const features = [
    { id: 1, label: 'Live/ Schedule lectures', image: '/assets/livelectures.png' },
    {
      id: 2,
      label: 'Structured And Targeted study material',
      image: '/assets/structredmaterial.png',
    },
    {
      id: 3,
      label: 'Test on weekend Basis For Progress Tracking',
      image: '/assets/progresstracking.png',
    },
  ];

  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: 30,
          }}
        >
          Explore <span style={{ color: '#E9204F' }}>Exam Categories</span>
        </Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {examCategories.map((exc) => (
            <Grid item md={3} xs={6} key={exc.id}>
              <ExamCard {...exc} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#5A4BDA', mt: 10, py: 5, px: 2.5 }}>
        <Typography
          fontFamily="Poppins"
          fontWeight={600}
          fontSize={30}
          textAlign="center"
          color="white"
        >
          Why you should choose CCMantra?
        </Typography>
        <Typography
          fontFamily="Poppins"
          fontWeight={500}
          fontSize={25}
          textAlign="center"
          color="white"
        >
          Your one step destination for success
        </Typography>
        <Grid mt={1} container justifyContent="center" alignItems="center">
          {features.map((f) => (
            <Grid item md={4} xs={12} key={f.id}>
              <FeaturesCard {...f} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default ExamCategories;
