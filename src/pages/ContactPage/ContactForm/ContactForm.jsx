// ContactForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contact/contactsOperations';
import { selectContact } from '../../../redux/contact/contactsSelectors';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} has been already added`);
      setName('');
      setPhone('');
      return;
    }

    dispatch(addContact({ name, number: phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.input}>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} required />
      </label>

      <label className={s.input}>
        Phone
        <input type="tel" name="phone" value={phone} onChange={handleChange} required />
      </label>

      <button className={s.button} type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};

