import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//Material UI
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
//Local import
import { showError, showSuccess } from 'utils/notification';
import { useEditContactMutation, useGetContactsQuery } from '../../redux/api';
import { normalizedName } from 'services/normalizedName';

const EditContactModal = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        navigate('/contacts');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      navigate('/contacts');
    }
  };

  const { data: contacts } = useGetContactsQuery();
  const contact = contacts
    .filter(({ id }) => id === contactId)
    .reduce((_, contact) => contact, {});

  const [editContact, { isError, isSuccess }] = useEditContactMutation();

  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);

  const handleEditContact = event => {
    event.preventDefault();

    // const contactsName = contacts.map(contact => contact.name);

    // const matchName = contactsName.some(
    //   contactName => contactName.toLowerCase() === name.toLowerCase()
    // );

    // if (matchName) {
    //   return showError(`${name} is already in contacts`);
    // }

    const newEditContact = {
      name: normalizedName(name),
      number,
    };

    editContact({ id: contact.id, payload: { ...newEditContact } });
  };

  useEffect(() => {
    if (isSuccess) {
      showSuccess('Contact update');
      navigate('/contacts');
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (isError) {
      showError(`Ups! Something was wrong`);
    }
  }, [isError]);

  return (
    <Container
      maxWidth="false"
      component="div"
      onClick={handleBackdropClick}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1200,
      }}
    >
      <Box
        width={{ xs: '75%', sm: '50%', md: '35%', lg: '25%', xl: '20%' }}
        padding={{ xs: 3, sm: 4 }}
        sx={{
          bgcolor: '#fff',
          borderRadius: 4,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0px 0px 42px -20px rgba(0,0,0,0.3)',
        }}
      >
        <Typography
          component="h2"
          variant="h6"
          sx={{
            textAlign: 'center',
            marginBottom: 2,
          }}
        >
          Edit contact
        </Typography>

        <Box component="form" noValidate onSubmit={handleEditContact} sx={{}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={handleChangeName}
                value={name}
                variant="standard"
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
                onChange={handleChangeNumber}
                value={number}
                variant="standard"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              />
            </Grid>
          </Grid>

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
            Edit contact
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditContactModal;
