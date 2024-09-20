import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import { get_roles, setDataRole } from "../../modules/permissions_roles/store";
const Select_role = () => {
  const dispatch = useDispatch();

  const roles = useSelector(
    (state) =>  state.role_users.getrole_users.data2role.roles || []
  );
  useEffect(() => {
      dispatch(get_roles());
    }, [dispatch]);
    console.log('data roles' ,roles)

    function handleChange(e) {
    
      dispatch(setDataRole({ [e.target.name]: e.target.value }));
    }

  const rolesOptions = roles.map((region) => ({
    label: region.name,
    value: region.id,
  }));

  return (
    <>
      <CFormSelect
        options={rolesOptions}
        name="role_id"
        onChange={handleChange}
        required
      />
    </>
  );
};

export default Select_role;
