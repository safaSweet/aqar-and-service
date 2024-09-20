
import React, { useEffect, useState } from "react";
import { CFormSelect, CFormLabel } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { get_role_user } from "../../modules/permissions_roles/store";

const Select_rols_users = ({ onUsersChange }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_role_user());
  }, [dispatch]);

  const roles = useSelector(
    (state) => state.role_users.getrole_users.data.list_role_and_users
  );

  const usersForSelectedRole = selectedRole
    ? roles.find((role) => role.role_id === parseInt(selectedRole))?.users || []
    : [];

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
    setSelectedUsers([]);
    onUsersChange([]); // Reset selected users when role changes
  };

  const handleUserChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedUsers(selectedOptions);
    onUsersChange(selectedOptions); // Pass selected users to parent component
  };

  return (
    <div>
      <CFormLabel htmlFor="roleSelect">Select Role</CFormLabel>
      <CFormSelect
        id="roleSelect"
        value={selectedRole}
        onChange={handleRoleChange}
      >
        <option value="">-- Select Role --</option>
        {roles &&
          roles.map((role) => (
            <option key={role.role_id} value={role.role_id}>
              {role.role_name}
            </option>
          ))}
      </CFormSelect>

      {selectedRole && usersForSelectedRole.length > 0 && (
        <>
          <CFormLabel htmlFor="userSelect">Select Users</CFormLabel>
          <CFormSelect
            id="userSelect"
            multiple
            value={selectedUsers}
            onChange={handleUserChange}
          >
            {usersForSelectedRole &&
              usersForSelectedRole.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.first_name} {user.last_name}
                </option>
              ))}
          </CFormSelect>
        </>
      )}
    </div>
  );
};

export default Select_rols_users;
