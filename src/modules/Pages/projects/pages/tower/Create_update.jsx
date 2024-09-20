
import PageForm from '../../../../../components/forms/PageForm'
import {  useParams } from 'react-router-dom'
import Form from './Form';

function Create_update() {
  const { id } = useParams();
  return (
  <PageForm title="اضافة برج"
   form={<Form idTower={id}/>}
    />
  )
}

export default Create_update