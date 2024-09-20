
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
import { createstage, createTypestage, editstage } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";
import Select_type_pledge from "../../../components/selects_input/Select_type_pledg";
import Select_type_stage from "../../../components/selects_input/Select_tpe_stage";

// function Create_type_stage() {
//   const visible = useSelector((state) => state.Properties.visible);
//   const create = useSelector((state) => state.Properties.create_update);
//   const dispatch = useDispatch();
//   const { id, name, description } = useSelector(
//     (state) => state.stage.get_stages
//   );
  
// //   useEffect(() => {
// //     if (!create) {
// //       setTyp(name); 
// //       setTypp(description); 
// //     }
// //   }, [name, description, create]); // تحديث القيم عند تغيير name أو description
  
//   console.log('edit : ',description)
//   const [type, setType] = useState(""); // قيمة نصية فقط
// //   const [typ, setTyp] = useState(name);
//   const [typee, setTypee] = useState(""); // قيمة نصية فقط
// //   const [typp, setTypp] = useState(description);

//   const handleSetVisible = (isVisible) => {
//     dispatch(handle_Set_Visible(isVisible));
//   };

//   const handleSetCreateUpdate = (isVisible) => {
//     dispatch(handle_Set_CreateUpdate(isVisible));
//   };

//   function handler_change(e) {
//     setType(e.target.value); // تحديث القيمة النصية
//   }

//   function handler_changee(e) {
//     setTypee(e.target.value); // تحديث القيمة النصية
//   }

 
//   function HandlerSubmit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', type); // إلحاق القيمة النصية
//     formData.append('description', typee); // إلحاق القيمة النصية
//     dispatch(createstage(formData));
//   }

//   function HandlerSubmitEdit(e) {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('id', id);
//     dispatch(editstage(formData));
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
//              اضافة مرحلة لنوع
//           </CModalTitle>
//         </CModalHeader>
//         <CModalBody>
         
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
//               <Select_type_pledge/>
//               <Button type="submit" load="" name="حفظ" />
//             </CForm>
          
//         </CModalBody>
//       </CModal>
//     </>
//   );
// }

// export default Create_type_stage;
// ظظظظظظظظظظظظظظظظظظظظظظظظظظ



function Create_type_stage() {
    const visible = useSelector((state) => state.Properties.visible);
    const create = useSelector((state) => state.Properties.create_update);
    const dispatch = useDispatch();
    const { msg } = useSelector(
      (state) => state.stage.get_stages
    );
  console.log('msg',msg)
    const [type, setType] = useState("");
    const [typee, setTypee] = useState("");
    const [selectedPledge, setSelectedPledge] = useState("");  
    const [selectedstage, setSelectedstage] = useState("");  
  
    const handleSetVisible = (isVisible) => {
      dispatch(handle_Set_Visible(isVisible));
    };
  
    const handleSetCreateUpdate = (isVisible) => {
      dispatch(handle_Set_CreateUpdate(isVisible));
    };
  
    function handler_change(e) {
      setType(e.target.value);
    }
  
    function handler_changee(e) {
      setTypee(e.target.value);
    }
  
    const handlePledgeChange = (value) => {
      setSelectedPledge(value);
    };
    const handlestageChange = (value) => {
      setSelectedstage(value);
    };
  
    function HandlerSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('name', type);
      formData.append('description', typee);
      formData.append('type_id', selectedPledge); 
      formData.append('stage_id', selectedstage);
      dispatch(createTypestage(formData));
    }
  
  
    return (
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
          <CModalTitle>اضافة مرحلة لنوع</CModalTitle>
        </CModalHeader>
        <CModalBody>
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
            <Select_type_pledge onPledgeChange={handlePledgeChange} />
            <Select_type_stage onstageChange={handlestageChange} />

            <Button type="submit" load="" name="حفظ" />
          </CForm>
        </CModalBody>
      </CModal>
    );
  }
  
  export default Create_type_stage;
  