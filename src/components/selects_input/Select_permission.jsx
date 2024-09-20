// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { CFormSelect } from "@coreui/react";
// import {
//   setDataForSearch,
// } from "../../modules/Pages/orders/Store";
// import { get_permissions, setDataRole } from "../../modules/permissions_roles/store";
// const Select_permission = () => {
//   const dispatch = useDispatch();

//   const permission = useSelector(
//     (state) => state.role_users.getrole_users.data2permission.permissions || []
//   );
//   useEffect(() => {
//     dispatch(get_permissions());
//   }, [dispatch]);
//   console.log("permission", permission);

//   const handlepermissionChange = (e) => {
//     dispatch(setDataRole({ [e.target.name]: e.target.value }));  };

//     const permissionOptions = permission.map((permission) => ({
//       label: permission.name,
//       value: permission.id,
//     }));

//   return (
//     <>
//       <CFormSelect
//         options={permissionOptions}
//         name="permission"////////////////////////////////////
//         onChange={handlepermissionChange}
//         required
//       />
//     </>
//   );
// };

// export default Select_permission;
//////////////////////////////////////
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import { get_permissions, setDataRole } from "../../modules/permissions_roles/store";
import { setData } from "../../modules/Pages/Management/branchs/Store";

const Select_permission = ({type}) => {
  const dispatch = useDispatch();

  const permissions = useSelector(
    (state) => state.role_users.getrole_users.data2permission.permissions || []
  );

  useEffect(() => {
    dispatch(get_permissions());
  }, [dispatch]);

  const handlePermissionChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    type==='role'?
    dispatch(setDataRole({ permissions: selectedOptions })):
    dispatch(setData({ permissions: selectedOptions }))
  };

  return (
    <>
      <CFormSelect
        multiple
        name="permissions"
        onChange={handlePermissionChange}
        required
      >
        {permissions.map(permission => (
          <option key={permission.id} value={permission.name}>
            {permission.name}
          </option>
        ))}
      </CFormSelect>
    </>
  );
};

export default Select_permission;
