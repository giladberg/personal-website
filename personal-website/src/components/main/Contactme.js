import React,{useState} from 'react';

const Contactme = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
   const { name, email, password, password2 } = formData;
    const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return <section className="contactme"><h2 className='aboutme-title'>Contact me</h2><div className="contactme__container"></div></section>;
};

export default Contactme;
