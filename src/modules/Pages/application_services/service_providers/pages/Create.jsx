import PageForm from "../../../../../components/forms/PageForm";
import ServiceForm from "./Service_provider_form_create";

function Create() {
  return (
    <>{<PageForm title="اضافة مقدم خدمة للنظام " form={<ServiceForm />} />}</>
  );
}

export default Create;
