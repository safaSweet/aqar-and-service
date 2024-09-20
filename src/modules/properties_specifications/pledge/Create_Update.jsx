// import { useState } from "react";
// import {
//   CForm,
//   CFormInput,
//   CModal,
//   CModalBody,
//   CModalHeader,
//   CModalTitle,
// } from "@coreui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { createpledge, editpledge } from "./Store";
// import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
// import Button from "../../../components/basics/Button";

// function Create_Update() {
//   const visible = useSelector((state) => state.Properties.visible);
//   const create = useSelector((state) => state.Properties.create_update);
  
//   const dispatch = useDispatch();
//   console.log("createD:", create);
//   const { id } = useSelector(
//     (state) =>
//     state.pledge.get_pledges.id
//   );
//   const name = useSelector(
//     (state) =>
//       state.pledge.get_pledges.data?.data?.data.find((idP)=>idP===id).name
//   );
  
//   const [type, setType] = useState("");
//   const [typ, setTyp] = useState(name);
//   // console.log("id:", id);
  
//   const description = useSelector(
//     (state) =>
//       state.pledge.get_pledges.data?.data?.data?.find((idP)=>id===idP).description
//   );
  
//   const [typee, setTypee] = useState("");
//   const [typp, setTypp] = useState(description);
//   console.log("type:", name);


//   const handleSetVisible = (isVisible) => {
//     dispatch(handle_Set_Visible(isVisible));
//   };
//   const handleSetCreateUpdate = (isVisible) => {
//     dispatch(handle_Set_CreateUpdate(isVisible));
//   };
//   function handler_change(e) {
//     setType({ ...type, ...{ [e.target.name]: e.target.value } });
//   }
//   function handler_changee(e) {
//     setTypee({ ...typee, ...{ [e.target.name]: e.target.value } });
//   }
//   function handler_change_edit(e) {
//     setTyp(e.target.value);
//   }
//   function handler_changee_edit(e) {
//     setTypp(e.target.value);
//   }

//   function HandlerSubmit(e) {
//     e.preventDefault();
//     const formData=new FormData()
//     formData.append('name',type)
//     formData.append('description',typee)
//     dispatch(createpledge(formData));
//   }
//   function HandlerSubmitEdit(e) {
//     const formData=new FormData()
//     formData.append('name',typ)
//     formData.append('description',typp)
//     formData.append('id',id)
//     // const type=typ;
//     e.preventDefault();
//     dispatch(editpledge(formData));
//   }

//   return (
//     <>
//       <CModal
//         visible={visible}
//         onClose={() => {
//           handleSetCreateUpdate(false);
//           handleSetVisible(false);
//         }}
//       >
//         <CModalHeader
//           onClose={() => {
//             handleSetCreateUpdate(false);
//             handleSetVisible(false);
//           }}
//         >
//           <CModalTitle>
//             {!create ? "تعديل  نوع تعهد" : "إنشاء نوع تعهد"}
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
//           {create ? (
//             <CForm onSubmit={HandlerSubmit}>
//               <CFormInput
//                 onChange={handler_change}
//                 name="name"
//                 type="text"
//                 placeholder="الاسم "
//               />
//               <CFormInput
//                 onChange={handler_changee}
//                 name="description"
//                 type="text"
//                 placeholder="الوصف "
//               />
//               <Button type="submit" load="" name="حفظ" />
//             </CForm>
//           ) : (
//             <CForm onSubmit={HandlerSubmitEdit}>
//               <CFormInput
//                 value={typ}
//                 onChange={handler_change_edit}
//                 name="name"
//                 type="text"
//                 placeholder=" الاسم"
//               />
//               <CFormInput
//                 value={typ}
//                 onChange={handler_changee_edit}
//                 name="description"
//                 type="text"
//                 placeholder=" الوصف"
//               />
//               <Button type="submit" load="" name="حفظ" />
//             </CForm>
//           )}
//         </CModalBody>
//       </CModal>
//     </>
//   );
// }

// export default Create_Update;
// ظظظظظظظظظظظظظظظظظظظ

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
import { createpledge, editpledge } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";

function Create_Update() {
  const visible = useSelector((state) => state.Properties.visible);
  const create = useSelector((state) => state.Properties.create_update);
  const dispatch = useDispatch();
  const { id, name, description } = useSelector(
    (state) => state.pledge.get_pledges
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
    dispatch(createpledge(formData));
  }

  function HandlerSubmitEdit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', typ); // إلحاق القيمة النصية
    formData.append('description', typp); // إلحاق القيمة النصية
    formData.append('id', id);
    dispatch(editpledge(formData));
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
