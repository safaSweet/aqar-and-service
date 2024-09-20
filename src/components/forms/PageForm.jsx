import {
  CCard,
  CContainer,
  CRow,
  CCol,
  CCardText,
  CFormText,
} from "@coreui/react";
import React from "react";

function PageForm({ title, form }) {
  return (
    <>
      <CCard style={{  padding: "40px", margin: "2%" }}>
     
        <CContainer className=" text-end">
          <CCardText className=" mb-5 fs-5">{title}</CCardText>
          {form}
        </CContainer>
      </CCard>
    </>
  );
}

export default PageForm;
