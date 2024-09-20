import React from "react";
import PageForm from "../../../../../components/forms/PageForm";
import Sell_form from "./Create_sell_form";

function Create_update() {
  return (
    <>
      <PageForm title="اضافة عقار " form={<Sell_form />} />
    </>
  );
}

export default Create_update;
