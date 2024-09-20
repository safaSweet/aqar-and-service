import React from 'react'

import { LOADING } from '../../messages/messages-login'
export default function Button({name,type,load}) {
 
  return (
    <>
        <button className='mybutton' disabled={load} type={type}>{load?LOADING: name}</button>
    </>
  )
}
