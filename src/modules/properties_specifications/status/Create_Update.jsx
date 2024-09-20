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
import { createStatus, editStatus } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";


function Create_Update() {

  // const {loading} = useSelector((state) => state.Status.create_status);
  // const error = useSelector((state) => state.Status.create_status.error);
  // console.log('loading:',loading,' err:',error)
  const visible = useSelector((state) => state.Properties.visible);
  const create = useSelector((state) => state.Properties.create_update);
  const dispatch = useDispatch();
  const data_store = useSelector(
    (state) => state.status.get_status.data_store
  );
console.log('datass',data_store)
  const [data, setData] = useState({
    type: "",
    category: "",
  });

  const [typ, setTyp] = useState({
    type: data_store.type,
    id: data_store.id,
  });
  console.log("type:", data_store);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  function handler_change(e) {
    setData({ ...data, ...{ [e.target.name]: e.target.value } });
  }
  function handler_change_edit(e) {
    setTyp({ ...typ, ...{ [e.target.name]: e.target.value } });
  }

  function HandlerSubmit(e) {
    e.preventDefault();
    dispatch(createStatus(data));
  }
  function HandlerSubmitEdit(e) {
    e.preventDefault();
    dispatch(editStatus(typ));
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
            {!create ? "تعديل الحالة" : "إنشاء حالة"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {create ? (
            <CForm onSubmit={HandlerSubmit}>
            <CFormInput
                onChange={handler_change}
                name="type"
                type="text"
                placeholder="نوع الحالة"
              />
            <CFormInput
                onChange={handler_change}
                name="category"
                type="text"
                placeholder="النوع"
              />
              <Button type="submit" load=''name="حفظ" />
            </CForm>
          ) : (
            <CForm onSubmit={HandlerSubmitEdit}>
              <CFormInput
                value={typ.type}
                onChange={handler_change_edit}
                name="type"
                type="text"
                placeholder="نوع الحالة"
              />
              <Button type="submit" load='' name="حفظ" />
            </CForm>
          )}
        </CModalBody>
      </CModal>
    </>
  );
}

export default Create_Update;
