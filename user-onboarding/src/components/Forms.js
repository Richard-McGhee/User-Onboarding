import React, { useState } from 'react';
import * as yup from 'yup'

export default function Forms(props) {
  const { users, setUsers } = props
  const [ newUser, setNewUser ] = useState({
      uname: '',
      uemail: '',
      upassword: '',
      uTOS: false
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    terms: ""
  });
  const formSchema = yup.object().shape({
      uname: yup
      .string()
      .min(4, 'Name must but at least 4 characters.')
      .required('Must input a name.'),
      uemail: yup
      .string()
      .required('Must input an email'),
      upassword: yup
      .string()
      .min(4, 'Password must be at least 4 characters.')
      .required('Must input a password'),
      uTOS: yup
      .boolean()
      .oneOf([true], 'Must accept TOS')
})

  const onInputChange = evt => {
      setNewUser({
          ...newUser,
          [evt.target.name]: evt.target.value
      })
  }
  const onSubmitForm = evt => {
      evt.preventDefault()
      setUsers([...users, newUser])
      console.log(newUser)
      console.log(users)
  }

  return (
    <form onSubmit={onSubmitForm}>
      <label>User Name 
        <input id='unameID'
        type='text'
        name='uname'
        placeholder='User Name'
        onChange={onInputChange}
        />
      </label>
      <label>User Email 
        <input id='uemailID'
        type='email'
        name='uemail'
        placeholder='User Email'
        onChange={onInputChange}
        />
      </label>
      <label>User Password 
        <input id='upasswordID'
        type='password'
        name='upassword'
        placeholder='User Password'
        onChange={onInputChange}
        />
      </label><br/>
      <label>Read and Understand our TOS 
        <input id='uTOSID'
        type='checkbox'
        name='uTOS'
        onChange={evt =>{
            setNewUser({
                ...newUser,
                [evt.target.name]: evt.target.checked
            })
        }}
        />
      </label><br/>
      <input id='uSubmitID'
      type='submit'
      name='uSubmit'
      value='Submit Your Information'
      />
    </form>
  );
}