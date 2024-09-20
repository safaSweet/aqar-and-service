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
import { createRooms, editRooms } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";

function Create_Update() {
  const create= useSelector((state) => state.Properties.create_update);
  console.log("create:", create);
  const visible = useSelector((state) => state.Properties.visible);

  const { id } = useSelector((state) => state.get_room.get_rooms.id);
  const type_room = useSelector((state) => state.get_room.get_rooms.type.type
);console.log('tuprrrom',type_room)

  const [type, setType] = useState( "");
  const [typ, setTyp] = useState(type_room);

  const dispatch = useDispatch();

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
    dispatch(createRooms(type));
  }
  function HandlerSubmitEdit(e) {
    const type=typ;
    e.preventDefault();
    dispatch(editRooms({type,id}));
  }

  return (
    <>
      <CModal visible={visible} onClose={() =>{handleSetCreateUpdate(false); handleSetVisible(false)}}>
        <CModalHeader onClose={() =>{handleSetCreateUpdate(false);  handleSetVisible(false)}}>
          <CModalTitle>
            ادارة الغرف
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {create  ? (
            <CForm onSubmit={HandlerSubmit}>
              <CFormInput
                onChange={handler_change}
                name="type"
                type="text"
                placeholder="نوع الغرفة"
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
                placeholder="نوع الغرفة"
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
// import React, { useState } from "react";
// import {
//   CForm,
//   CFormInput,
//   CModal,
//   CModalBody,
//   CModalHeader,
//   CModalTitle,
// } from "@coreui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { createRooms, editRooms } from "./Store";
// import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
// import Button from "../../../components/basics/Button";

// function Create_Update() {
//   const create = useSelector((state) => state.Properties.create_update);
//   const visible = useSelector((state) => state.Properties.visible);
//   const { id } = useSelector((state) => state.get_room.get_rooms);
//   const type_room = useSelector((state) => state.get_room.get_rooms.type.type);
  
//   const dispatch = useDispatch();
  
//   const [type, setType] = useState("");
//   const [typ, setTyp] = useState(type_room);

//   const handleSetVisible = (isVisible) => {
//     dispatch(handle_Set_Visible(isVisible));
//   };

//   const handleSetCreateUpdate = (isVisible) => {
//     dispatch(handle_Set_CreateUpdate(isVisible));
//   };

//   const handler_change = (e) => {
//     setType(e.target.value);
//   };

//   const handler_change_edit = (e) => {
//     setTyp(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (create) {
//       dispatch(createRooms({ type }));
//     } else {
//       const type=typ;
//       dispatch(editRooms({type,id}));
//     }
//   };

//   return (
//     <>
//       <CModal visible={visible} onClose={() => { handleSetCreateUpdate(false); handleSetVisible(false) }}>
//         <CModalHeader onClose={() => { handleSetCreateUpdate(false); handleSetVisible(false) }}>
//           <CModalTitle>ادارة الغرف</CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           <CForm onSubmit={handleSubmit}>
//             <CFormInput
//               value={create ? type : typ}
//               onChange={create ? handler_change : handler_change_edit}
//               name="type"
//               type="text"
//               placeholder="نوع الغرفة"
//             />
//             <Button type="submit" load="" name="حفظ" />
//           </CForm>
//         </CModalBody>
//       </CModal>
//     </>
//   );
// }

// export default Create_Update;
