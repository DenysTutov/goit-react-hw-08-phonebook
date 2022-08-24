import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const ContactsPage = () => {
  return (
    <>
      <Container
        component="main"
        sx={{
          paddingTop: 4,
        }}
      >
        <Grid container columnSpacing={{ sm: 5, md: 10 }}>
          <Grid item xs={12} sm={5}>
            <ContactForm />
          </Grid>

          <Grid item xs={12} sm={7} sx={{}}>
            <Filter />
            <ContactList />
          </Grid>
        </Grid>
        <ToastContainer />
      </Container>
      <Outlet />
    </>
  );
};

export default ContactsPage;
