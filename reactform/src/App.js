//import { useRef } from 'react';
import { useState } from 'react';
import './App.css';
import FormInput from './Components/FormInput';

function App() {
  //const [userName,setUserName]=("");
  //const usernameRef=useRef();
  const [values,setValues]=useState({
    Username:"",
    Email:"",
    Password:"",
    Confirmpassword:""
  })

  const inputs=[
        {
              id:1,
              name:"Username",
              type:"text",
              placeholder:"Username",
              errorMessage:"Username should be 3 to 16 character and shouldnt include any special character",
              label:"username",
              required:true,
              pattern:"^[A-Za-z0-9]{3,16}$"

        },
        {
              id:2,
              name:"Email",
              type:"text",
              placeholder:"Email",
              errorMessage:"It should be a valid Email",
              label:"Email",
              required:true,
        },
        {
              id:3,
              name:"Password",
              type:"text",
              placeholder:"Password",
              errorMessage:"must be 8 to 20 character",
              label:"Password",
              required:true,
        },
        {
                id:4,
                name:"Confirmpassword",
                type:"text",
                placeholder:"Confirmpassword",
                errorMessage:"passwords dont match",
                label:"Confirmpassword",
                required:true,
                pattern:values.Password
        }
      ]

  const handleSubmit=(e)=>{
      e.preventDefault();
      
  }

  const onChange= (e) =>{
    setValues({...values,[e.target.name]:e.target.value})

  }

  console.log(values);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
