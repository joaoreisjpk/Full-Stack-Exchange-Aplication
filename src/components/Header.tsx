import { AppBar, Link, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
          <Link href='/dashboard' color='white' underline='none' width='100%'>
            <Typography textAlign="center" variant='h5'>WestPoint Exchange</Typography>
          </Link>
      </Toolbar>
    </AppBar>
  );
}