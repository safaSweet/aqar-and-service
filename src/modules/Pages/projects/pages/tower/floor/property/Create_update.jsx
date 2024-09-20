import React from "react";
import PageForm from "../../../../../../../components/forms/PageForm";
import Property_form from "./Property_form";
function Create_update() {
  return (
    <>
      <PageForm title="اضافة طابق" form={<Property_form />} />
    </>
  );
}

export default Create_update;
