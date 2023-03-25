import { useState } from 'react';

import { ApplicationLoginForm } from '../../components/application-login-form/application.login.form';
import { useLoginUserMutation } from '../../../store/api/auth-api';
import { Input } from '../../components/elements/input/Input';

import clases from './sign-in.view.module.scss';

export const SignIn = () => {
  const [signInValue, setSignInValue] = useState({
    email: '',
    password: '',
  });

  const [loginUser] = useLoginUserMutation();
  const submitHandler = async (e) => {
    e.preventDefault();

    await loginUser(signInValue);
  };

  const changeHandler = (e) => {
    setSignInValue({ ...signInValue, [e.target.name]: e.target.value });
  };

  return (
    <ApplicationLoginForm>
      <form
        onSubmit={submitHandler}
        className={clases.sign_in_form}
      >
        <Input
          type='email'
          name='email'
          required={true}
          placeholder='Email'
          value={signInValue.email}
          onChange={changeHandler}
        />
        <Input
          type='password'
          name='password'
          required={true}
          placeholder='Password'
          value={signInValue.password}
          onChange={changeHandler}
        />
        <button
          type='submit'
          className={clases.sign_in_form_btn}
        >
          Submit
        </button>
      </form>
    </ApplicationLoginForm>
  );
};
