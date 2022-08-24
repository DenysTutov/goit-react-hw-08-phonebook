import { Link as RouterLink } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useRegisterMutation } from 'redux/api';
import { normalizedName } from 'services/normalizedName';

const RegisterPage = () => {
  const [registration] = useRegisterMutation();

  const handleSubitRegistration = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      name: normalizedName(data.get('name')),
      email: data.get('email').trim(),
      password: data.get('password'),
    };

    registration(newUser);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        marginTop: 4,
      }}
    >
      <Box
        sx={{
          padding: 4,
          bgcolor: '#fff',
          borderRadius: 4,

          '&:hover': { boxShadow: '0px 0px 42px -20px rgba(0,0,0,0.3)' },
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubitRegistration}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  variant="standard"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registration
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterPage;
