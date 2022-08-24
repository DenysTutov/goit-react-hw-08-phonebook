import { useState, useEffect } from 'react';
import { showError, showSuccess } from '../utils/notification';
import { useAddContactMutation, useGetContactsQuery } from '../redux/api';
import { normalizedName } from 'services/normalizedName';

export const useAddContact = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isError, isLoading, isSuccess }] =
    useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.currentTarget.value);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);

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
      name: normalizedName(name),
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

  return {
    name,
    number,
    handleAddContact,
    handleChangeName,
    handleChangeNumber,
    isLoading,
  };
};
