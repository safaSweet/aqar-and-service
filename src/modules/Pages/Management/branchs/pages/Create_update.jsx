import React from 'react'
import PageForm from '../../../../../components/forms/PageForm'
import Form_branch from './Form_branch'

function Create_update() {
  return (
    <>
        <PageForm title="اضافة فرع" form={<Form_branch/>} />
    </>
  )
}

export default Create_update