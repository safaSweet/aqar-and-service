import Button from "../../../../../components/basics/Button";
import { useDispatch, useSelector } from "react-redux";
import { CCol, CForm, CFormInput, CRow } from "@coreui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  createSession,
  editSession,
  resetData,
  setData,
} from "../../branchs/Store";
import { useState } from "react";
import Toast from "../../../../../messages/Toast";
import Select_permission from "../../../../../components/selects_input/Select_permission";

function Session_form() {
  const dispatch = useDispatch();
  const { idBranch, idSession } = useParams();
  const idBranchParse = parseInt(idBranch, 10);
  const idSessionParse = parseInt(idSession, 10);
  const { formData } = useSelector((state) => state.branches.create_branch);
  const  {msg}  = useSelector((state) => state.branches.create_branch.data.data||'');
  const [toastVisible, setToastVisible] = useState(false);
const navigate=useNavigate()
  const sessions = useSelector((state) =>
    state.branches.branches.data?.data?.branches
      .find((branch) => branch.id === idBranchParse)
      .sessions.find((session) => session.id === idBranchParse)
  );

  const handler_change = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (idSessionParse && sessions) {
      dispatch(setData(sessions));
    } else {
      dispatch(resetData());
    }
  }, [idSessionParse, sessions, dispatch]);



  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("permissions", [1,2]);
    if (idSessionParse) {
      data.append("id", idSessionParse);
      dispatch(editSession(data));
    } else dispatch(createSession(data));

    setToastVisible(true);

      setTimeout(() => {
        
         navigate(`/sessions/${idBranch}`);
      }, 3000);
  };

  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="الاسم"
              name="name"
              onChange={handler_change}
              required
              value={formData.name || []}
            />
            <Select_permission type='session'/>
          </CCol>
        </CRow>
        <Button name="حفظ" type="submit" load="" />
        {toastVisible && msg !== undefined && (
          <Toast text={msg} color='secondary' />
        )}
      </CForm>
    </>
  );
}

export default Session_form;
