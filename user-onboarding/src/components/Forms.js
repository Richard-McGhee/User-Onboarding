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
  return (
    <form>
      <input type='text'
      placeholder='PLACEHOLDING'
      />
    </form>
  );
}