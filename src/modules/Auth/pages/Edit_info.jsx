import React from "react";
import { useEffect, useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CForm,
  CFormInput,
} from "@coreui/react";
function Edit_info({ visible }) {
  const [var_visible, setVisible] = useState(visible);
  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>تعديل معلوماتك الشخصية</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput
              type="text"
              placeholder=" الاسم "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder=" اسم الاب "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder=" الكنية "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder=" الايميل "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder=" تاريخ الميلاد "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder=" رقم الهاتف "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder="  "
              name=""
            //   onChange={handler_change}
            />
            <CFormInput
              type="text"
              placeholder="  "
              name=""
            //   onChange={handler_change}
            />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Edit_info;
