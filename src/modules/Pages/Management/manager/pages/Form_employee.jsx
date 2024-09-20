import { CCol, CForm, CFormInput, CRow } from "@coreui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import {
  createEmployee,
  createManager,
  edit_manager_branch,
  editEmployee,
  get_branches,
  resetData,
  setData,
} from "../../branchs/Store";
import Button from "../../../../../components/basics/Button";
import LocationSelector from "../../../../../components/selects_input/Select_governorate2town";
import Select_employee from "../../../../../components/selects_input/Select_employee";
import Select_branch from "../../../../../components/selects_input/Select_branch";
import Toast from "../../../../../messages/Toast";

function Form_employee() {
  const { id } = useParams();
  // const idBranchParse = parseInt(idBranch, 10);
  // const idSessionParse = parseInt(idSession, 10);
  // const idEmployeeParse = parseInt(idEmployee, 10);
  const dispatch = useDispatch();
  const [toastVisible, setToastVisible] = useState(false);
  const navigate=useNavigate()
  
  const { formData } = useSelector((state) => state.branches.create_branch);
  const { msg } = useSelector((state) => state.branches.create_branch.data.data||'');

  // تحديث البيانات عند تغيير الموظف المحدد
  
  // معالجة تغييرات النموذج
  const handleChange = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };

  // معالجة إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();
  const data= new FormData()
  data.append('branch_id',formData.branch_id)
  if (id) {
    data.append('id',id)
    // Data.id = idEmployeeParse;
    dispatch(edit_manager_branch(data));
    dispatch(get_branches());
  } else {
      data.append('id',formData.employee_id)
      dispatch(createManager(data));
    }
    setToastVisible(true);

      setTimeout(() => {
        // status==='true'&&
         navigate("/managers");
      }, 3000);
  };

  return (
    <CForm onSubmit={handleSubmit}>
      <CRow>
       {!id&& <CCol xs="6">
          <Select_employee type='employee'/>
        </CCol>}
        <CCol xs="6">
          <Select_branch/>
        </CCol>
      </CRow>
      <Button name="حفظ" type="submit" load="" />
      {toastVisible && msg !== undefined && (
          <Toast text={msg} color='secondary' />
        )}
    </CForm>
  );
}

export default Form_employee;
