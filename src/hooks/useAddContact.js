import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { showError, showSuccess } from '../utils/notification';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../redux/contacts/contactsApi';

export const useAddContact = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isError, isLoading, isSuccess }] =
    useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = event => {
    event.preventDefault();

    const contactsName = contacts.map(contact => contact.name);

    const matchName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    );

    if (matchName) {
      return showError(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number,
    };

    addContact(newContact);
  };

  useEffect(() => {
    if (isSuccess) {
      showSuccess('Contact added');
      reset();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      showError(`Ups! Something was wrong`);
    }
  }, [isError]);

  const reset = () => {
    setName('');
    setNumber('');
  };

  return { name, number, handleAddContact, handleChangeInput, isLoading };
};
