import React, { useState } from 'react';
import { registerSchema } from './Schemas'
import axios from 'axios'

export default function Forms(props) {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    TOS: false
  }
  const [ newUser, setNewUser ] = useState(initialValues)
  const [errors, setErrors] = useState([]);

  const onInputChange = evt => {
    if(evt.target.name !== "TOS"){
      setNewUser({
          ...newUser,
          [evt.target.name]: evt.target.value
      })}
      else{
        setNewUser({
          ...newUser,
          TOS: evt.target.checked
      });
      }
  }

  const onSubmitForm = evt => {
      evt.preventDefault()
      registerSchema.validate(newUser, { abortEarly: false})
      .then( _ => {
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
              if(errors.length > 0){
                setErrors([]);
              }
            props.setUsers([...props.users, res.data])
            setNewUser(initialValues)
            })
            .catch(err => {
            console.dir(err)
            });
      })
      .catch(err => {
        console.dir(err)
        setErrors([...err.inner])
      })
      console.log(newUser)
      console.log(props.users)
  }

  return (
    <form>
      <label>User Name 
        <input id='nameID'
        type='text'
        name='username'
        placeholder='User Name'
        value={newUser.username}
        onChange={onInputChange}
        />
      </label>
      <label>User Email 
        <input id='emailID'
        type='email'
        name='email'
        placeholder='User Email'
        value={newUser.email}
        onChange={onInputChange}
        />
      </label>
      <label>User Password 
        <input id='passwordID'
        type='password'
        name='password'
        placeholder='User Password'
        value={newUser.password}
        onChange={onInputChange}
        />
      </label><br/>
      <label>Read and Understand our TOS 
        <input id='TOSID'
        type='checkbox'
        name='TOS'
        checked={newUser.TOS}
        onChange={onInputChange}
        />
      </label><br/>
      <button onClick={onSubmitForm}>Submit Your Information</button>
      <div>
        {errors.map( err => (  
          <p style={{color: "red"}}>{err.message}</p>
          ))}
      </div>
    </form>
  );
}