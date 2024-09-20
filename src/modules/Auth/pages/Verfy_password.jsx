import { useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
  CForm,
  CFormInput,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/basics/Button";
import { changePassword } from "../Store";
import Cookie from "cookie-universal";

function VerifyPassword({ visible, title, body_form }) {
  const [var_visible, setVisible] = useState(visible);
  const cookie = Cookie();
  const user = cookie.get("user");
  const [form, setForm] = useState({
    email: user.email,
    // old_password: "",
    // new_password: "",
  });

  const dispatch = useDispatch();
  console.log("email", user.email);
  function handler_change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function HandlerSubmit(e) {
    try {
      e.preventDefault();
      dispatch(changePassword(form));
    } catch (e) {}
  }
  return (
    <>
      <CModal
        visible={visible}
        onClose={() => setVisible(false)}
        aria-labelledby="LiveDemoExampleLabel"
      >
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle id="LiveDemoExampleLabel">{title}</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={HandlerSubmit}>
          <CModalBody>
            {/* <CFormInput
              className="mb-3"
              type="password"
              placeholder="كلمة السر القديمة"
              name="old_password"
              onChange={handler_change}
            /> */}
            {/* <CFormInput
              className="mb-3"
              type="password"
              placeholder="كلمة السر الجديدة"
              name="new_password"
              onChange={handler_change}
            /> */}
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <Button name="حفظ التغييرات" type="submit" load="" />
          </CModalFooter>
        </CForm>
      </CModal>
    </>
  );
}

export default VerifyPassword;
