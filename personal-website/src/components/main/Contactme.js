import React, { useState } from 'react';

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
  const onSubmit = e => {
    console.log(email);
    e.preventDefault();
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
            onChange={e => onChange(e)}
          />
          <input
            type='text'
            placeholder='Enter your email'
            value={email}
            name='email'
            onChange={e => onChange(e)}
          />
          <input
            type='text'
            placeholder='Enter your phone'
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
            onChange={e => onChange(e)}
          />
          <input type='submit' className='btn btn-primary' value='Send' />
        </form>
      </div>
    </section>
  );
};

export default Contactme;
