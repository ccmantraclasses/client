/* eslint-disable import/no-extraneous-dependencies */
import * as yup from 'yup';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Grid, Alert, Paper, Stack, styled, Button, TextField, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { interestedUser } from 'src/services/register';

const StyledInput = styled(TextField)({
  '& .MuiTextField-root': {
    width: '50ch',
    borderRadius: 50,
  },
  '& label.Mui-focused': {
    color: 'black',
  },
  '& label': {
    color: 'black',
    fontFamily: 'Poppins',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#adb5bd',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#adb5bd',
    },
    '&:hover fieldset': {
      borderColor: '#5A4BDA',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5A4BDA',
    },
  },
});

const BrandingComponent = () => {
  const mdUp = useResponsive('up', 'md');
  const [message, setMessage] = useState({
    type: '',
    text: '',
  });
  const validationSchema = yup.object({
    phonenumber: yup
      .string()
      .matches(/^[1-9][0-9]{9}$/, 'Invalid phone number')
      .required('*required'),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      phonenumber: '',
    },
    onSubmit: async () => {
      try {
        const response = await interestedUser(formik.values);
        if (response.success) {
          formik.resetForm();
          setMessage({ type: 'success', text: 'Response stored successfully' });
        }
        if (response.error) {
          setMessage({ type: 'error', text: 'Sorry! Failed to store response' });
        }
      } catch (err) {
        console.log(err.message);
        setMessage({ type: 'error', text: 'Sorry! Failed to store response' });
      }
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 3000);
  }, [message]);

  return (
    <Stack sx={{ width: '100%' }} direction="row" justifyContent="center">
      <Paper sx={{ width: '100%', p: 5 }}>
        <Grid container spacing={10}>
          {mdUp && (
            <Grid item md={5} mt={-2} display="flex" justifyContent="flex-end">
              <Stack direction="row" alignItems="center" spacing={-5}>
                <img src="/assets/gauravchaudhary2.png" alt="" height={275} />
                <img src="/assets/ccmantraapp.png" alt="" height={335} />
              </Stack>
            </Grid>
          )}
          <Grid item md={5}>
            <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 40, mt: 4 }}>
              THE MOST{' '}
              {mdUp ? (
                <TypeAnimation
                  sequence={['AFFORDABLE', 1000, 'RELIABLE', 1000, 'VALUEABLE', 1000]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: 40, color: '#E9204F' }}
                  repeat={Infinity}
                />
              ) : (
                <span style={{ color: '#E9204F' }}>RELIABLE</span>
              )}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: 40,
              }}
            >
              LEARNING PLATFORM
            </Typography>

            <form onSubmit={formik.handleSubmit}>
              <Stack direction="column" spacing={2} sx={{ mt: 2, width: mdUp ? '80%' : '100%' }}>
                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600 }}>
                  Learn from our best faculty.
                </Typography>
                {message.type && (
                  <Alert severity="success" sx={{ my: 0.5 }}>
                    {message.text}
                  </Alert>
                )}
                <StyledInput
                  name="phonenumber"
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  label="Enter Mobile Number"
                  variant="outlined"
                  sx={{ width: '100%' }}
                  error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                  helperText={formik.errors.phonenumber && formik.errors.phonenumber}
                />
                <Button
                  type="submit"
                  sx={{
                    bgcolor: '#E9204F',
                    color: 'white',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    width: 120,
                    mt: 1,
                    borderRadius: 0.5,
                    ':hover': {
                      bgcolor: '#5A4BDA',
                    },
                  }}
                >
                  Submit
                </Button>
                {/* <Box>
						<IconButton>
						  <Icon icon={"ion:logo-google-playstore"} />
						</IconButton>
					  </Box> */}
              </Stack>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </Stack>
  );
};

export default BrandingComponent;
