import React from 'react';

import { Grid, Link, Stack, Paper, Container, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

const GetContent = () => {
  const mdUp = useResponsive('up', 'md');

  return (
    <Paper sx={{ p: 1, mt: 10 }}>
      <Container>
        <Grid container spacing={10} alignItems="center" justifyContent="center">
          <Grid item md={5} xs={12}>
            <Stack direction="column" spacing={3}>
              <Typography fontFamily="Poppins" fontWeight={600} fontSize={25}>
                Get access to our free <br /> study material
              </Typography>
              <Typography fontFamily="Poppins" fontWeight={600} fontSize={25}>
                Get instant asscess to high quality content
              </Typography>
              <Link
                href="https://play.google.com/store/apps/details?id=co.kevin.yuafj&hl=en_IN&gl=US"
                target="__blank"
              >
                <img
                  src="/assets/getonplaystore.png"
                  style={{ height: 55, width: 200 }}
                  alt="get_on_playstore"
                />
              </Link>
            </Stack>
          </Grid>
          <Grid mt={5} item md={5} xs={12} display="flex" justifyContent="flex-start" p={5}>
            <Stack direction="row" alignItems="center" spacing={-5}>
              <img
                src="/assets/ccmantraapp.png"
                alt=""
                height={mdUp ? 335 : 250}
                style={{ transform: 'scale(1.1)' }}
              />
              <img src="/assets/gauravchaudhary2.png" alt="" height={mdUp ? 275 : 250} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};

export default GetContent;
