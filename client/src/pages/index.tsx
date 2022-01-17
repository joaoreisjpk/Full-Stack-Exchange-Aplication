import { Button, Typography, Grid, Stack, Box } from '@mui/material';
import Head from 'next/head';
import { Formik, Form } from 'formik';
import SendIcon from '@mui/icons-material/Send';

import MUInput from '../components/MUInput';
import { useRouter } from 'next/router';

export default function Home(): JSX.Element {
  const { push } = useRouter();

  const emailRegex: RegExp =
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
    <div>
      <Head>
        <title>Westpoint</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box>
        <Formik
          initialValues={{ password: '', email: '' }}
          validate={({ password, email }) => validate({ password, email })}
          onSubmit={(): Promise<boolean> => push('dashboard')}
        >
          {(): JSX.Element => (
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
    </div>
  );
}
