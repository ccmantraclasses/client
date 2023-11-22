import React from 'react';

import { Box, Grid, Container, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import WhatsAppCom from 'src/components/whatsapp-com';

const GalleryIndex = () => {
  const mdUp = useResponsive('up', 'md');
  const images = [
    {
      id: 1,
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/gallery%2F1.jpeg?alt=media&token=7b84a38f-1d0d-4b2b-ac4a-2ef15d921303',
    },
    {
      id: 2,
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/gallery%2F2.jpeg?alt=media&token=02906650-7ad0-42c7-b1aa-95b043c6b64c',
    },
    {
      id: 3,
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/gallery%2F3.jpeg?alt=media&token=d08e3619-8d66-4195-99e0-a47f2ec4d693',
    },
    {
      id: 4,
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/gallery%2F4.jpeg?alt=media&token=d034f910-ab73-413d-af26-fbf9a2306bc5',
    },
    {
      id: 5,
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/gallery%2F5.jpeg?alt=media&token=37088bac-5f65-45e7-b36f-aaa2a852f4d3',
    },
    {
      id: 6,
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/gallery%2F6.jpeg?alt=media&token=3dd04b3d-668e-42c4-9c80-ea0d5ec7c9ed',
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
          Memorable Moments
        </Typography>
      </Box>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          {images.map((i) => (
            <Grid key={i.id} item md={4} xs={12}>
              <img src={i.image} alt="" style={{ borderRadius: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <WhatsAppCom />
    </>
  );
};

export default GalleryIndex;
