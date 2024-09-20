import React from 'react'
import PageForm from '../../../../../components/forms/PageForm'
import Form_employee from './Form_employee'

function CreateUpdate() {
  return (
    <PageForm title="اضافة موظف" form={<Form_employee/>} />
  )
}

export default CreateUpdate