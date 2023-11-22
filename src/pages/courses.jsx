/* eslint-disable react/prop-types */
import React from 'react';

import {
  Box,
  Card,
  Link,
  Grid,
  Stack,
  Button,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import WhatsAppCom from 'src/components/whatsapp-com';

const CourseCard = ({ title, image, price, link }) => (
  <Card
    sx={{
      width: '100%',
      height: 410,
      p: 3,
      display: 'flex',
      flexDirection: 'column',
    }}
    elevation={5}
  >
    <Stack direction="column">
      <CardMedia sx={{ height: 230, borderRadius: 1 }} image={image} title={title} />

      <Link color="inherit" underline="hover" mt={1} height={50}>
        <Typography variant="subtitle2" wrap fontFamily="Poppins">
          {title}
        </Typography>
      </Link>

      <Typography variant="subtitle1" mt={1}>
        ₹ {price}
      </Typography>
    </Stack>

    <Button
      variant="contained"
      sx={{
        width: '100%',
        bgcolor: '#E9204F',
        mt: 'auto',
        ':hover': {
          bgcolor: '#5A4BDA',
        },
      }}
      href={link}
      target="__blank"
    >
      Buy Now
    </Button>
  </Card>
);

const CourseIndex = () => {
  const mdUp = useResponsive('up', 'md');
  const courses = [
    {
      id: 1,
      title: 'First Grade (RPSC) - Commerce School Lecturer',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA1.png?alt=media&token=6a810aef-f1c0-4f5c-b296-df8ab93df803',
      price: '999',
      link: 'https://yuafj.courses.store/131449',
    },
    {
      id: 2,
      title: 'Junior Accountant (Paper-2) (RSMSSB)',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA2.png?alt=media&token=204d94fe-6151-4daf-af62-889319f5975f',
      price: '999',
      link: 'https://yuafj.courses.store/398924',
    },
    {
      id: 3,
      title: 'Junior Accountant (RSMSSB) Online Test Series',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA3.jpeg?alt=media&token=e17c6263-2a43-4372-8222-7777176055fb',
      price: '149',
      link: 'https://yuafj.courses.store/365904',
    },
    {
      id: 4,
      title: 'Rajasthan G.K. Online Test Series',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA4.png?alt=media&token=b3491995-34e6-4feb-913f-e6ccc43571c1',
      price: '149',
      link: 'https://yuafj.courses.store/364525',
    },
    {
      id: 5,
      title: 'English Grammer Online Test Series',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA5.png?alt=media&token=8a8a4497-b51c-466c-9de5-3ed1a7d3818b',
      price: '99',
      link: 'https://yuafj.courses.store/353312',
    },
    {
      id: 6,
      title: 'Macro Economics & Indian Economic Development',
      image:
        'https://firebasestorage.googleapis.com/v0/b/ccmantra-c6ad2.appspot.com/o/courses%2FA6.png?alt=media&token=a05ccd9e-2de5-4fed-af34-3c0b61d57e83',
      price: '1000',
      link: 'https://yuafj.courses.store/85902',
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
          Courses we offer
        </Typography>
      </Box>
      <Container mt={5}>
        <Grid container spacing={2} mt={1}>
          {courses.map((c) => (
            <Grid item md={4} sm={12} xs={12} key={c.id}>
              <CourseCard {...c} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <WhatsAppCom />
    </>
  );
};

export default CourseIndex;
