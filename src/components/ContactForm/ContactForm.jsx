//Material UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
//Local import
import { useAddContact } from 'hooks/useAddContact';
import { Spinner } from 'components/Spinner/Spinner';

export const ContactForm = () => {
  const {
    name,
    number,
    handleAddContact,
    handleChangeName,
    handleChangeNumber,
    isLoading,
  } = useAddContact();

  return (
    <>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 2,
        }}
      >
        Phonebook
      </Typography>

      <Box
        sx={{
          padding: 4,
          bgcolor: '#fff',
          borderRadius: 4,

          '&:hover': { boxShadow: '0px 0px 42px -20px rgba(0,0,0,0.3)' },
        }}
      >
        <CssBaseline />
        <Box component="form" noValidate onSubmit={handleAddContact} sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                variant="standard"
                onChange={handleChangeName}
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="number"
                label="Number"
                name="number"
                variant="standard"
                onChange={handleChangeNumber}
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            disabled={name.length < 3}
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
          >
            Add contact {isLoading && <Spinner size={20} />}
          </Button>
        </Box>
      </Box>
    </>
  );
};
