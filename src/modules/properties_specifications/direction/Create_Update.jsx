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
import { createDirection, editDirection } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";

function Create_Update() {
  const visible = useSelector((state) => state.Properties.visible);
  const create = useSelector((state) => state.Properties.create_update);
  
  const dispatch = useDispatch();
  console.log("createD:", create);
  const { id } = useSelector(
    (state) =>
    state.direction.get_directions.id
  );
  const type_ = useSelector(
    (state) =>
    state.direction.get_directions.type.type
  );
  
  const [type, setType] = useState("");
  const [typ, setTyp] = useState(type_);
  console.log("type:", type_);


  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  function handler_change(e) {
    setType({ ...type, ...{ [e.target.name]: e.target.value } });
  }
  function handler_change_edit(e) {
    setTyp(e.target.value);
  }

  function HandlerSubmit(e) {
    e.preventDefault();
    dispatch(createDirection(type));
  }
  function HandlerSubmitEdit(e) {
    const type=typ;
    e.preventDefault();
    dispatch(editDirection({type, id }));
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
            {!create ? "تعديل  الاتجاه" : "إنشاء اتجاه"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {create ? (
            <CForm onSubmit={HandlerSubmit}>
              <CFormInput
                onChange={handler_change}
                name="type"
                type="text"
                placeholder="نوع الاتجاه"
              />
              <Button type="submit" load="" name="حفظ" />
            </CForm>
          ) : (
            <CForm onSubmit={HandlerSubmitEdit}>
              <CFormInput
                value={typ}
                onChange={handler_change_edit}
                name="type"
                type="text"
                placeholder="نوع الاتجاه"
              />
              <Button type="submit" load="" name="حفظ" />
            </CForm>
          )}
        </CModalBody>
      </CModal>
    </>
  );
}

export default Create_Update;
