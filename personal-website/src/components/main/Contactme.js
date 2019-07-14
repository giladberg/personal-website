import React, { useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import axios from 'axios';
import Alert from '../Alert';
import { Link } from 'react-router-dom';

const Contactme = () => {
  const [alert, setAlert] = useState({flag:false,msg:'',classType:''});
  const { flag, msg, classType } = alert;
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
      await setTimeout(
        () => {
         setAlert({...alert,'flag': false,'msg': '','classType': ''})
        },
        5000
      );
      setAlert({...alert,'flag': true,'msg': 'Please enter Israeli phone number','classType': 'danger'})
    }
    else{
       const response = await axios.post('http://localhost:5000/api/email', {
      name: name,
      email: email,
      phone: phone,
      message: message
    });
    console.log(response);
    if (response.data === 'ok') {
       await setTimeout(
        () => {
         setAlert({...alert,'flag': false,'msg': '','classType': ''})
        },
        5000
      );
       setAlert({...alert,'flag': true,'msg': 'Sent successfuly','classType': 'success'})
      setFormData({
        ...formData,
        'name': '',
        'email': '',
        'phone': '',
        'message': ''
      });
    }
    }
   
  };

  function is_valid_phone_number(number) {
    return /^(02|03|04|08|09|050|052|053|054|055|056|057|058|059|072|073|074|075|076|077|078|079)[\s{1}]?\d{1}[\s{1}]?\d{6}$/.test(
      number
    );
  }

  return (
    <Spring
      config={{ duration: 3000 }}
      from={{ opacity: 0, marginLeft: 500 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {props => (
        <section className='contactme' style={props}>
          <h2 className='aboutme-title'>Contact me</h2>

          {flag == true ? (
                  <Alert data={alert} />
                ) : (
                  ''
                )}
         
          <form className='contactme__container' onSubmit={e => onSubmit(e)}>
            <input
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
            />
            <div className='btn-container'>
              <input type='submit' className='btn btn--black' value='Send' />
            </div>
          </form>
          <Link
            className='button position-contact-btn color-bordo '
            to='/contact-me'
          >
            Contact Me
          </Link>
          <Link
            className='button position-protfolio-btn color-bordo'
            to='/protfolio'
          >
            Protfolio
          </Link>
          <Link
            className='button position-about-btn color-bordo'
            to='/about-me'
          >
            About Me
          </Link>
        </section>
      )}
    </Spring>
  );
};

export default Contactme;
