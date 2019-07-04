import React, { useState } from 'react';
import axios from 'axios';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { name, email, phone, message } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('http://localhost:5000/api/email', {
      name: name,
      email: email,
      phone: phone,
      message: message
    });
    console.log(response);
    if (response.data == 'ok') {
      console.log('good');
    }
  };

  return (
    <section className='contactme'>
      <h2 className='aboutme-title'>Contact me</h2>
      <div className='contactme__container'>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            placeholder='Enter your name'
            value={name}
            name='name'
            required
            onChange={e => onChange(e)}
          />
          <input
            type='text'
            placeholder='Enter your email'
            value={email}
            name='email'
            required
            onChange={e => onChange(e)}
          />
          {/* <input
            type='text'
            placeholder='Enter your phone'
            value={phone}
            name='phone'
            required
            onChange={e => onChange(e)}
          /> */}
          <PhoneInput
            placeholder='Enter phone number'
            value={phone}
            name='phone'
            onChange={e => onChange(e)}
          />
          <textarea
            placeholder='Enter your message'
            value={message}
            name='message'
            rows='4'
            cols='50'
            required
            onChange={e => onChange(e)}
          />
          <input type='submit' className='btn btn-primary' value='Send' />
        </form>
      </div>
    </section>
  );
};

export default Contactme;
