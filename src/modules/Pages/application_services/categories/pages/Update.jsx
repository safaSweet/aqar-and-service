import React from "react";
import PageForm from "../../../../../components/forms/PageForm";
import Service_form_update from "./Service_form_update";

function Update() {
  return (
    <>
      <PageForm title="تعديل خدمة للنظام " form={<Service_form_update />} />
    </>
  );
}

export default Update;
