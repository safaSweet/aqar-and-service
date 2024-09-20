import React from 'react'
import PageForm from '../../../../../../components/forms/PageForm'
import Form_floor from './Form_floor'

function Create_update() {
  
  return (
    <><PageForm title="اضافة طابق"
    form={<Form_floor/>}
     /></>
  )
}

export default Create_update