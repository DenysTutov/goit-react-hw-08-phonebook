import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import style from '../components/App.module.scss';

const ContactsPage = () => {
  return (
    <>
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={style.title}>Contacts</h2>
        <div className={style.contact_list_container}>
          <Filter />
          <ContactList />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactsPage;
