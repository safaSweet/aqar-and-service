import { useParams } from "react-router-dom";
import PageForm from "../../../../../components/forms/PageForm";
import ServiceForm from "./Service_form";

function Create_update() {
  return <>{<PageForm title="اضافة خدمة للنظام " form={<ServiceForm />} />}</>;
}

export default Create_update;
