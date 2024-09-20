
import React from 'react';
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
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";
import Select_permission from "../../../components/selects_input/Select_permission";
import Select_role from "../../../components/selects_input/Select_role";
import { useNavigate } from "react-router-dom";
import { role2permission } from '../../permissions_roles/store';

function Permission2role() {
  const visible = useSelector((state) => state.Properties.visible);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.role_users.getrole_users.formData || []);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };

  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append('permissions', JSON.stringify(formData.permissions));
    Data.append('role_id', formData.role_id);

    // Ensure Permission2role is a valid action creator
    dispatch(role2permission(Data));
    handleSetVisible(false);
    // navigate('/cruds');
  };

  return (
    <>
      <CModal
        visible={visible}
        onClose={() => {
          handleSetCreateUpdate(false);
          handleSetVisible(false);
        }}
      >
        <CModalHeader onClose={() => {
          handleSetCreateUpdate(false);
          handleSetVisible(false);
        }}>
          <CModalTitle>Title Here</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={HandlerSubmit}>
            <Select_permission type='role'/>
            <Select_role type="role2user" />
            <Button type="submit" load="" name="حفظ" />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Permission2role;