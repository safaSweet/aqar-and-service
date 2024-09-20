import React from 'react'
import PageForm from '../../../../../components/forms/PageForm'
import Session_form from './Session_form'

function CreateUpdate() {
  return (
    <PageForm title="اضافة قسم" form={<Session_form/>} />

  )
}

export default CreateUpdate