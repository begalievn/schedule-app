import { useState } from 'react';

import { ApplicationLoginForm } from '../../components/application-login-form/application.login.form';
import { useLoginUserMutation } from '../../../store/api/auth-api';
import { Input } from '../../components/elements/input/Input';
import { ToastContainer, toast } from 'react-toastify';

import classes from './sign-in.view.module.scss';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
  const [signInValue, setSignInValue] = useState({
    email: '',
    password: '',
  });
  
  const navigate = useNavigate();

  const [loginUser] = useLoginUserMutation();
  
  const handleToast = (result) => {
    if (result.data) {
      toast.success('Successful login!', {
        autoClose: 2000,
      });
    } else if (result.error) {
      toast.warn('Login failed!', {
        autoClose: 3000,
      })
    } else {
      toast('Wow, some action happened!')
    }
  }
  
  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await loginUser(signInValue);
    handleToast(result);
    setTimeout(() => {
      if (result.data) navigate('/admin');
    }, 3000)
  };

  const changeHandler = (e) => {
    setSignInValue({ ...signInValue, [e.target.name]: e.target.value });
  };

  return (
    <ApplicationLoginForm>
      <form
        autoComplete={'off'}
        onSubmit={submitHandler}
        className={classes.sign_in_form}
      >
        <label
          className={classes.form_label}
        >
          Email
          <Input
            type='email'
            name='email'
            required={true}
            placeholder='Email'
            value={signInValue.email}
            onChange={changeHandler}
          />
        </label>
        <label
          className={classes.form_label}
        >
          Password
          <Input
            type='password'
            name='password'
            required={true}
            placeholder='Password'
            value={signInValue.password}
            onChange={changeHandler}
          />
        </label>
        
        <button
          type='submit'
          className={classes.sign_in_form_btn}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </ApplicationLoginForm>
  );
};

