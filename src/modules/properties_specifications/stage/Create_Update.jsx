
import { useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { createstage, editstage } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";

function Create_Update() {
  const visible = useSelector((state) => state.Properties.visible);
  const create = useSelector((state) => state.Properties.create_update);
  const dispatch = useDispatch();
  const { id, name, description } = useSelector(
    (state) => state.stage.get_stages
  );
  
  useEffect(() => {
    if (!create) {
      setTyp(name); 
      setTypp(description); 
    }
  }, [name, description, create]); // تحديث القيم عند تغيير name أو description
  
  console.log('edit : ',description)
  const [type, setType] = useState(""); // قيمة نصية فقط
  const [typ, setTyp] = useState(name);
  const [typee, setTypee] = useState(""); // قيمة نصية فقط
  const [typp, setTypp] = useState(description);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };

  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };

  function handler_change(e) {
    setType(e.target.value); // تحديث القيمة النصية
  }

  function handler_changee(e) {
    setTypee(e.target.value); // تحديث القيمة النصية
  }

  function handler_change_edit(e) {
    setTyp(e.target.value); // تحديث القيمة النصية
  }

  function handler_changee_edit(e) {
    setTypp(e.target.value); // تحديث القيمة النصية
  }

  function HandlerSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', type); // إلحاق القيمة النصية
    formData.append('description', typee); // إلحاق القيمة النصية
    dispatch(createstage(formData));
  }

  function HandlerSubmitEdit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', typ); // إلحاق القيمة النصية
    formData.append('description', typp); // إلحاق القيمة النصية
    formData.append('id', id);
    dispatch(editstage(formData));
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
            {!create ? "تعديل  نوع تعهد" : "إنشاء نوع تعهد"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {create ? (
            <CForm onSubmit={HandlerSubmit}>
              <CFormInput
                onChange={handler_change}
                name="name"
                type="text"
                placeholder="الاسم "
              />
              <CFormInput
                onChange={handler_changee}
                name="description"
                type="text"
                placeholder="الوصف "
              />
              <Button type="submit" load="" name="حفظ" />
            </CForm>
          ) : (
            <CForm onSubmit={HandlerSubmitEdit}>
              <CFormInput
                value={typ}
                onChange={handler_change_edit}
                name="name"
                type="text"
                placeholder=" الاسم"
              />
              <CFormInput
                value={typp}
                onChange={handler_changee_edit}
                name="description"
                type="text"
                placeholder=" الوصف"
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
