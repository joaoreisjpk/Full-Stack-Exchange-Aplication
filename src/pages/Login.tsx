import React from 'react';
import { Formik, Form } from 'formik';

import { Button, Typography, Grid, Stack, Box } from '@mui/material';

import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from 'react-router-dom';
import MUInput from '../components/MUInput';

export default function Home(): JSX.Element {
  const navigate = useNavigate();
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validate = ({
    password,
    email,
  }: {
    password: string;
    email: string;
  }) => {
    if (!emailRegex.test(email)) {
      return { email: 'The email format must be example@email.com' };
    } else if (password.length < 6) {
      return { password: 'The password must have at least 6 characters' };
    }
    return {};
  };

  return (
    <Box>
      <Formik
        initialValues={{ password: '', email: '' }}
        validate={({ password, email }) => validate({ password, email })}
        onSubmit={() => navigate('dashboard')}
      >
        {() => (
          <Form>
            <Grid
              container
              marginTop='3rem'
              gap={8}
              justifyItems='center'
              direction='column'
              justifyContent='center'
              alignItems='center'
            >
              <Typography
                variant='h3'
                component='label'
                htmlFor='email'
                marginBottom='20px'
              >
                LOGIN
              </Typography>
              <Stack spacing={2}>
                <MUInput name='email' type='email' label='E-Mail' />{' '}
                <MUInput name='password' type='password' label='Password' />{' '}
                <Button
                  endIcon={<SendIcon />}
                  type='submit'
                  size='large'
                  variant='contained'
                  sx={{
                    width: 265,
                  }}
                >
                  Login
                </Button>
              </Stack>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
