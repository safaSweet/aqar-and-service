import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import {
  get_employee,
  setData,
} from "../../modules/Pages/Management/branchs/Store";
import { setDataNotifications } from "../../modules/notifications/store";
import { setDataRole } from "../../modules/permissions_roles/store";
const Select_employee = ({ type }) => {
  const dispatch = useDispatch();

  const employees = useSelector(
    (state) => state.branches.branches.employees.data?.employee || []
  );

  useEffect(() => {
    dispatch(get_employee());
  }, [dispatch]);

  const handleRegionChange = (e) => {
    if (type === "employee")
      dispatch(setData({ [e.target.name]: e.target.value }));
    else dispatch(setDataNotifications({ [e.target.name]: e.target.value }));
  };
  function handleChange(e) {
    
    dispatch(setDataRole({ [e.target.name]: e.target.value }));
  }
  // const employeesOptions = employees.map((region) => ({
  //   label: region.account.first_name,
  //   // label: region.account.full_name,
  //   value: region.id,
  // }));
  const employeesOptions = employees.map((region) => ({
    label: `${region.account.first_name} ${region.account.father_name} ${region.account.last_name}`,
    value: region.id,
}));

  return (
    <>{type==='role2user'?
      <CFormSelect
        options={employeesOptions}
        name="user_id"
        onChange={handleChange}
        required
      />
    :
      <CFormSelect
        options={employeesOptions}
        name="employee_id"
        onChange={handleRegionChange}
        required
      />
    }
    </>
  );
};

export default Select_employee;
