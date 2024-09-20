import { useEffect, useState } from "react";
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CForm,
  CModalBody,
  CFormInput,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/basics/Button";
import { changePassword, verifyPassword } from "../Store";
import Cookie from "cookie-universal";
import Toast from "../../../messages/Toast";

function ChangePassword({ visible, title, body_form }) {
  const [var_visible, setVisible] = useState(visible);
  const [showForm, setShowForm] = useState(false); // حالة محلية لإظهار النموذج

  const load = useSelector((state) => state.ChangePassword.password.loading);
  const error = useSelector((state) => state.ChangePassword.password.error);
  const status = useSelector(
    (state) => state.ChangePassword.password.data.status
  );
  const status_verify = useSelector(
    (state) => state.VerifyPassword.verify_password.data.status
  );

  const cookie = Cookie();
  const user = cookie.get("user");
  const [email, setEmail] = useState({
    email: user.email,
  });
  const [form, setForm] = useState({
    email: user.email,
    code: "",
    new_password: "",
    new_password_confirmation: "",
  });
  
  const dispatch = useDispatch();

  function HandlerSubmit1(e) {
    try {
      e.preventDefault();
      dispatch(changePassword(email));
    } catch (e) {}
  }
  function HandlerSubmit2(e) {
    try {
      e.preventDefault();
      dispatch(verifyPassword(form));
    } catch (e) {}
  }
  function handler_change(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // تغيير حالة إظهار النموذج عندما يكون الاستجابة ناجحة
  useEffect(() => {
    if (status === 200) {
      setShowForm(true);
    }
  }, [status]);

  return (
    <>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>تغيير كلمة السر</CModalTitle>
        </CModalHeader>

        {/*  عرض النموذج إذا كانت الحالة 200 */}
        {showForm ? (
          <CForm onSubmit={HandlerSubmit2}>
            <CModalBody>
              <CFormInput
                type="text"
                placeholder="كلمة  السر"
                name="new_password"
                onChange={handler_change}
              />
              <CFormInput
                type="text"
                placeholder=" اعد  كلمة  السر"
                name="new_password_confirmation"
                onChange={handler_change}
              />
              <CFormInput
                type="text"
                placeholder=" الكود"
                name="code"
                onChange={handler_change}
              />
            </CModalBody>
            <div className=" text-center mb-3">
              <Button name="حفظ" type="submit" load={load} />
            </div>
            {error && <Toast text="يوجد خطا حاول مرة اخرى" color="danger" />}
            {status_verify === 200 && (
              <Toast text="لقد تم تغيير كلمة المرور بنجاح" color="success" />
            )}
          </CForm>
        ) : (
          <CForm onSubmit={HandlerSubmit1}>
            <CModalBody className=" text-center">
              <Button
                name="هل تريد تغيير كلمة السر؟ "
                type="submit"
                load={load}
              />
              {error && <Toast text="يوجد خطا حاول مرة اخرى" color="danger" />}
            </CModalBody>
          </CForm>
        )}
      </CModal>
    </>
  );
}
export default ChangePassword;
