import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Loginpage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('rs3015682@gmail.com');
  const [password, setPassword] = useState('2w2');

  const onChange = (e)=>{
    setEmail(e.target.value),
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/Formformat');
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={email} onChange={onChange} />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="password">Password</label>
            <input type="text" name="password" value={password} onChange={onChange} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <input id="inputs" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
