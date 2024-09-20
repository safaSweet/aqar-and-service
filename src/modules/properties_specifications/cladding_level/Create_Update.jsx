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
import { createCladding_level, editCladding_level } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";


function Create_Update() {

  const {loading} = useSelector((state) => state.cladding.create_cladding_level);
  const error = useSelector((state) => state.cladding.create_cladding_level.error);
  console.log('loading:',loading,' err:',error)
  const visible = useSelector((state) => state.Properties.visible);
  const create = useSelector((state) => state.Properties.create_update);
  const dispatch = useDispatch();
  const data_store = useSelector(
    (state) => state.cladding.get_cladding_levels.data_store
  );

  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const [typ, setTyp] = useState({
    name: data_store.name,
    description: data_store.description,
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
    dispatch(createCladding_level(data));
  }
  function HandlerSubmitEdit(e) {
    e.preventDefault();
    dispatch(editCladding_level(typ));
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
            {!create ? "تعديل مستوى اكساء" : "إنشاء مستوى اكساء"}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {create ? (
            <CForm onSubmit={HandlerSubmit}>
            <CFormInput
                onChange={handler_change}
                name="name"
                type="text"
                placeholder="اسم المستوى"
              />
              <CFormInput
                onChange={handler_change}
                name="description"
                type="text"
                placeholder=" الوصف"
              />
              <Button type="submit" load={loading} name="حفظ" />{error&&<p>ooooooooo</p>}
            </CForm>
          ) : (
            <CForm onSubmit={HandlerSubmitEdit}>
              <CFormInput
                value={typ.name}
                onChange={handler_change_edit}
                name="name"
                type="text"
                placeholder=" اسم المستوى"
              />
              <CFormInput
                value={typ.description}
                onChange={handler_change_edit}
                name="description"
                type="text"
                placeholder=" الوصف"

              />
              <Button type="submit" load={loading} name="حفظ" />{error&&<p>ooooooooo</p>}
            </CForm>
          )}
        </CModalBody>
      </CModal>
    </>
  );
}

export default Create_Update;
