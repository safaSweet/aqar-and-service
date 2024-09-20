import { CForm, CFormInput, CFormText, CContainer, CCard } from "@coreui/react";
import Button from "../../../components/basics/Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { asyncLogin } from "../Store";
import { ERROR_LOGIN } from "../../../messages/messages-login";
import Toast from "../../../messages/Toast";
function Login_admin() {

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handler_change(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function HandlerSubmit(e) {
    try {
      e.preventDefault();
      dispatch(asyncLogin(user));
    } catch (e) {}
  }
  const load = useSelector((state) => state.Auth.auth.loading);
  const error = useSelector((state) => state.Auth.auth.error);
  const data = useSelector((state) => state.Auth.auth.data);
console.log('data',data,'err',error)
  return (
    <>
      <CContainer className=" p-5 text-center ">
        <CCard className=" w-50 p-5" style={{ marginLeft: "25%" }}>
          <img
            src={require("../../../assets/LogowithName.png")}
            alt="..."
            width="59%"
            // height="110px"
            className=" mb-5"
            style={{ marginLeft: "20%",objectFit:'cover' }}
          />

          <CForm onSubmit={HandlerSubmit}>
            <div >
              <CFormInput
                type="email"
                placeholder="الايميل"
                value={user.email}
                name="email"
                onChange={handler_change}
              />
              <CFormText id="emailHelp">
                We'll never share your email with anyone else.
              </CFormText>
            </div>
            <div >
              <CFormInput
                type="password"
                placeholder="كلمة السر"
                value={user.password}
                name="password"
                onChange={handler_change}
              />
            </div>
            <Button name="تسجيل الدخول" type="submit" load={load} />
            {error && <Toast text='يوجد خطا حاول مرة اخرى' color='danger'/>}
          </CForm>
        </CCard>
      </CContainer>
    </>
  );
}
export default Login_admin;
// {
//   /* <div className=' position-absolute ' style={{ height: '350px' }}>
// <div className=' card '>

//     <CRow className=' align-items-center'>
//         <CCol xs='6'>
//             <img src={require('../../../assets/LogowithName.png')} alt='...' width='100%' height='300px' />
//         </CCol>
//         <CCol xs='6'>
//             <CForm className=' text-center'>
//                 <div className="mb-3">
//                     <CFormInput type="email" placeholder='الايميل' aria-describedby="emailHelp" />
//                     <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
//                 </div>
//                 <div className="mb-3">
//                     <CFormInput type="password" placeholder='كلمة السر' />
//                 </div>

//                 <Button name='تسجيل الدخول' />
//             </CForm>
//         </CCol></CRow>
// </div>
// </div> */
// }
