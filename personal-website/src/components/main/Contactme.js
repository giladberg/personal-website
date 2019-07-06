import React, { useState } from 'react';
import axios from 'axios';

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { name, email, phone, message } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!is_valid_phone_number(phone)) {
      console.log('phone not good');
    }
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

  function is_valid_phone_number(number) {
    return /^(02|03|04|08|09|050|052|053|054|055|056|057|058|059|072|073|074|075|076|077|078|079)[\-\s{1}]?\d{1}[\-\s{1}]?\d{6}$/.test(
      number
    );
  }

  return (
    <section className='contactme'>
      <h2 className='aboutme-title'>Contact me</h2>

      <form className='contactme__container' onSubmit={e => onSubmit(e)}>
        {/* <input
          type='text'
          placeholder='Enter your name'
          value={name}
          name='name'
          required
          onChange={e => onChange(e)}
        />
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          name='email'
          required
          onChange={e => onChange(e)}
        />
        <input
          type='text'
          placeholder='Enter your phone'
          value={phone}
          name='phone'
          required
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
        /> */}
        {/* <div className='btn-container'>
          <input type='submit' className='btn btn--green' value='Send' />
        </div> */}
      </form>
    </section>
  );
};

export default Contactme;
