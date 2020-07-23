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
        type='text'
        name='uemail'
        placeholder='User Email'
        onChange={onInputChange}
        />
      </label>
      <label>User Password 
        <input id='upasswordID'
        type='text'
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