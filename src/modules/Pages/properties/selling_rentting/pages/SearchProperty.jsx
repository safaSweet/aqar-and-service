import React from 'react'
import PageForm from '../../../../../components/forms/PageForm'
import FormSearch from './FormSearch'

function SearchProperty() {
  return (
    <>
        <PageForm title='البحث عن عقار' form={<FormSearch/>}/>
    </>
  )
}

export default SearchProperty