import React from 'react'
import PageForm from '../../../../components/forms/PageForm'
import ProjectForm from './Project_form'

function Create_update() {
  return (
    <PageForm title="اضافة مشروع" form={<ProjectForm />} />
  )
}

export default Create_update