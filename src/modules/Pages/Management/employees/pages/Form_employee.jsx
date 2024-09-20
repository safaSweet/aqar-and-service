
import { CCol, CForm, CFormInput, CRow } from "@coreui/react";
import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import {
  createEmployee,
  editEmployee,
  get_branches,
  resetData,
  setData,
} from "../../branchs/Store";
import Button from "../../../../../components/basics/Button";
import LocationSelector from "../../../../../components/selects_input/Select_governorate2town";
import Toast from "../../../../../messages/Toast";

function Form_employee() {
  const { idBranch, idSession, idEmployee } = useParams();
  const idBranchParse = parseInt(idBranch, 10);
  const idSessionParse = parseInt(idSession, 10);
  const idEmployeeParse = parseInt(idEmployee, 10);
  const dispatch = useDispatch();
  const [toastVisible, setToastVisible] = useState(false);
  const navigate=useNavigate()
  // جلب بيانات الجلسة والموظف المحدد
  const session = useSelector(
    (state) =>
      state.branches.branches.data?.data?.branches
        .find((branch) => branch.id === idBranchParse)
        ?.sessions.find((session) => session.id === idSessionParse)
  );

  const employeeData = session?.employees.find(
    (employee) => employee.id === idEmployeeParse
  )?.account; 

  const { formData,loading } = useSelector((state) => state.branches.create_branch);
  const { msg } = useSelector((state) => state.branches.create_branch.data.data||'');
  console.log('......e',employeeData);

  useEffect(() => {
    if (idEmployeeParse && employeeData) {
      dispatch(setData(employeeData));
    } else {
      dispatch(resetData());
    }
  }, [idEmployeeParse, employeeData, dispatch]);

  const handleChange = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = {
      first_name: formData.first_name,
      father_name: formData.father_name,
      full_name: formData.full_name,
      last_name: formData.last_name,
      region_id: formData.region_id,
      town_id: formData.town_id,
      governorate_id: formData.governorate_id,
      phone: formData.phone,
      email: formData.email,
      birth_date: formData.birth_date,
    };
  

    if (idEmployeeParse) {
      Data.id = idEmployeeParse;
      dispatch(editEmployee(Data));
            dispatch(get_branches())

    } else {
      dispatch(createEmployee(Data));
    }
    setToastVisible(true);

      setTimeout(() => {
        // status==='true'&&
         navigate("/branches");
      }, 3000);
  };

  return (
    <CForm onSubmit={handleSubmit}>
      <CRow>
        <CCol xs="6">
          <CFormInput
            type="text"
            placeholder="الايميل"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
          <CFormInput
            type="date"
            placeholder="تاريخ الميلاد"
            name="birth_date"
            value={formData.birth_date || ""}
            onChange={handleChange}
            required
          />
          <CFormInput
            type="text"
            placeholder="الرقم"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            required
          />
          {/* <LocationSelector type="employee" /> */}
          {!idEmployee&&<LocationSelector type="employee" id={idEmployee}/>}
          {/* {!id && <LocationSelector type="property" formData={formData} />} */}
        </CCol>
        <CCol xs="6">
          {idEmployeeParse ? (
            <CFormInput
              type="text"
              placeholder="الاسم"
              name="full_name"
              value={formData.full_name || ""}
              onChange={handleChange}
              required
            />
          ) : (
            <>
              <CFormInput
                type="text"
                placeholder="الاسم"
                name="first_name"
                value={formData.first_name || ""}
                onChange={handleChange}
                required
              />
              <CFormInput
                type="text"
                placeholder="الاب"
                name="father_name"
                value={formData.father_name || ""}
                onChange={handleChange}
                required
              />
              <CFormInput
                type="text"
                placeholder="الكنية"
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleChange}
                required
              />
            </>
          )}
        </CCol>
      </CRow>
      <Button name="حفظ" type="submit" load={loading} />
      {toastVisible && msg !== undefined && (
          <Toast text={msg} color='secondary' />
        )}
    </CForm>
  );
}

export default Form_employee;
