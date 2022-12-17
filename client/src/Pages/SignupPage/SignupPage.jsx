import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import axios from 'axios';
import { useFormik } from "formik";
import { SignupSchema } from "../../schemas/SignupPage";

const FormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  width: 500px;
  margin: auto;
  margin-top: 100px;

  & > .MuiTextField-root {
    width: 100%;
  }

  & > .MuiButton-root {
    width: 100%;
    height: 50px;
    background-color: #2a72cc;
  
    p{
      color:red,
      margin:10px,
      width:100%
    }

    :hover {
      background-color: #0d52a7;
    }
  }
`;
const init = {
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  email: '',
};


const SignupPage = () => {

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: init,
    validationSchema: SignupSchema,
    onSubmit:() => {
      axios
        .post('http://localhost:5000/user/signup', values)
        .then((res) => {
          console.log(res);
          window.alert("User registered successfully");
        })
    }
  })
  
  return (
    <div>
      <FormBox>
        <h1>Sign up Page</h1>
        <TextField
          onChange={handleChange}
          label="First Name"
          variant="outlined"
          required
          type="text"
          name="first_name"
          value={values.first_name}
        />
        <p style={{color:"red"}}>{errors.first_name}</p>
        <TextField
          onChange={handleChange}
          onBlur={handleBlur}
          label="Last Name"
          required
          type="text"
          variant="outlined"
          name="last_name"
          value={values.last_name}
        />
        <p style={{color:"red"}}>{errors.last_name}</p>
        <TextField
          onChange={handleChange}
          label="Username"
          required
          type="text"
          variant="outlined"
          name="username"
          value={values.username}
        />
        <p style={{color:"red"}}>{errors.username}</p>
        <TextField
          onChange={handleChange}
          label="Email Id"
          variant="outlined"
          required
          type="email"
          name="email"
          value={values.email}
        />
        <p style={{color:"red"}}>{errors.email}</p>
        <TextField
          onChange={handleChange}
          label="Password"
          required
          variant="outlined"
          name="password"
          value={values.password}
          type="password"
        />
        <p style={{color:"red"}}>{errors.password}</p>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Create my Account!
        </Button>
      </FormBox>
    </div>
  );
};

export default SignupPage;
