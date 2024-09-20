import { useState } from "react";
import {
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
// import { createStatus, editStatus } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";
import Select_rols_users from "../../../components/selects_input/Select_rols_users";
import Select_role from "../../../components/selects_input/Select_role";
import { setData, user2role } from "../../permissions_roles/store";
import Select_employee from "../../../components/selects_input/Select_employee";
import { useNavigate } from "react-router-dom";

function Create_Update() {
  const visible = useSelector((state) => state.Properties.visible);
  // const create = useSelector((state) => state.Properties.create_update);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const formData = useSelector(
    (state) =>  state.role_users.getrole_users.formData|| []
  );
  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };

  // function handleChange(e) {
    
  //   dispatch(setData({ [e.target.name]: e.target.value }));
  // }
  function HandlerSubmit(e) {
    e.preventDefault();
    const Data=new FormData()
    Data.append('user_id',formData.user_id)
    Data.append('role_id',formData.role_id)

    dispatch(user2role(Data));
    handleSetVisible(false);

  }

  return (
    <>
      <CModal
        visible={visible}
        onClose={() => {
          handleSetCreateUpdate(false);
          handleSetVisible(false);
        }}
      >
        <CModalHeader
          onClose={() => {
            handleSetCreateUpdate(false);
            handleSetVisible(false);
          }}
        >
          <CModalTitle>
            {/* {!create ? "تعديل الحالة" : "إنشاء حالة"} */}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={HandlerSubmit}>
            {/* <Select_rols_users /> */}
            <Select_employee type="role2user" />
            <Select_role type="role2user" />
            <Button type="submit" load="" name="حفظ" />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Create_Update;
