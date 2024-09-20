import {
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
// import React from 'react'
import Button from "../basics/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  get_orders_category,
  handle_Set_Visible_request,
  unaccess_orders_category,
} from "../../modules/Pages/orders/Store";
import { useState } from "react";

function Reply_unaccess({ id }) {
  const dispatch = useDispatch();
  const { visible, loading } = useSelector(
    (state) => state.order_category_service.order_category
  );
  const [reply, setReply] = useState({
    reply: "",
    id: id,
  });
  function handler_change(e) {
    setReply({ ...reply, ...{ [e.target.name]: e.target.value } });
  }
  async function HandlerSubmit(e) {
    e.preventDefault();
    dispatch(unaccess_orders_category(reply)).then(() => {
       dispatch(handle_Set_Visible_request(false));
      dispatch(get_orders_category());
    });
  }
  return (
    <>
      <CModal
        visible={visible}
        onClose={() => {
          dispatch(handle_Set_Visible_request(false));
        }}
      >
        <CModalHeader
          onClose={() => {
            dispatch(handle_Set_Visible_request(false));
          }}
        >
          <CModalTitle></CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={HandlerSubmit}>
            <CFormInput
              onChange={handler_change}
              name="reply"
              type="text"
              placeholder=" الرد بالسبب"
            />
            <Button type="submit" load={loading} name="حفظ" />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Reply_unaccess;
