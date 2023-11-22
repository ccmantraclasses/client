/* eslint-disable import/no-extraneous-dependencies */
import * as yup from 'yup';
import Lottie from 'react-lottie';
import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react';

import { LoadingButton } from '@mui/lab';
import { Box, Grid, Alert, styled, Container, TextField, Typography } from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import WhatsAppCom from 'src/components/whatsapp-com';

import { register } from '../services/register';
import ContactUsAnimation from '../assets/animations/contact-us.json';

const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
  '& label.Mui-focused': {
    color: '#E9204F',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#E9204F',
  },
  '& .MuiFormHelperText-root': {
    fontFamily: 'Poppins',
    fontWeight: 500,
  },
}));

const ContactIndex = () => {
  const mdUp = useResponsive('up', 'md');
  const [message, setMessage] = useState({
    type: '',
    text: '',
  });
  const validationSchema = yup.object({
    name: yup
      .string()
      .required('*required')
      .matches(/^[a-zA-Z\s]*$/, 'Special characters are not allowed'),
    email: yup
      .string()
      .required('*required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email')
      .required('*required'),
    phonenumber: yup
      .string()
      .matches(/^[1-9][0-9]{9}$/, 'Invalid phone number')
      .required('*required'),
    message: yup.string().required('*required'),
  });

  const formik = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      phonenumber: '',
      message: '',
    },
    onSubmit: async () => {
      try {
        const response = await register(formik.values);
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
          Contact with us
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <Grid item md={5} xs={12}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: ContactUsAnimation,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              height={mdUp ? 380 : 300}
              width={mdUp ? 380 : 300}
              isStopped={false}
              isPaused={false}
            />
          </Grid>

          <Grid item md={5} sm={12} xs={12}>
            {message.type && (
              <Alert severity="success" sx={{ my: 0.5 }}>
                {message.text}
              </Alert>
            )}
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={5} justifyContent="center" mt={1}>
                <Grid item md={12} sm={12} xs={12}>
                  <StyledInput
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    label="Full Name"
                    variant="standard"
                    sx={{ width: '100%' }}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.errors.name && formik.errors.name}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <StyledInput
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    label="Email"
                    variant="standard"
                    sx={{ width: '100%' }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.errors.email && formik.errors.email}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <StyledInput
                    name="phonenumber"
                    value={formik.values.phonenumber}
                    onChange={formik.handleChange}
                    label="Phone Number"
                    variant="standard"
                    sx={{ width: '100%' }}
                    error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                    helperText={formik.errors.phonenumber && formik.errors.phonenumber}
                  />
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <StyledInput
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    label="Message"
                    variant="standard"
                    sx={{ width: '100%' }}
                    multiline
                    rows={4}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.errors.message && formik.errors.message}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 5 }}>
                <LoadingButton
                  type="submit"
                  // disabled={isLoading}
                  sx={{
                    width: '100%',
                    color: 'white',
                    bgcolor: '#E9204F',
                    ':hover': {
                      bgcolor: '#5A4BDA',
                    },
                  }}
                >
                  Submit
                </LoadingButton>

                {/* {message.type && (
                <Alert
                  severity={message.type}
                  sx={{ mt: 1, fontFamily: "Poppins" }}
                >
                  {message.text}
                </Alert>
              )} */}
              </Box>
            </form>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.107921439288!2d74.64277387542363!3d26.452249976924705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be761df4428c5%3A0xf216a4bff5967a4e!2sCC%20Mantra%20Classes%20-%20The%20Best%20Institute%20For%20Government%20Exam%20Preparation%20and%20Commerce!5e0!3m2!1sen!2sin!4v1693135475417!5m2!1sen!2sin"
            width="100%"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ccmantra_location"
          />
        </Box>
      </Container>

      <WhatsAppCom />
    </>
  );
};

export default ContactIndex;
