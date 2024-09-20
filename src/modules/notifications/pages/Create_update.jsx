import PageForm from '../../../components/forms/PageForm'
import Form_notification from './Form_notification'

function Create_update() {
  return (
    <PageForm title="اضافة إشعار " form={<Form_notification />} />
)
}

export default Create_update