
// import { CForm, CFormInput, CFormSelect } from "@coreui/react";
// import { useDispatch, useSelector } from "react-redux";
// import { send_notification, setDataNotifications } from "../store";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Button from "../../../components/basics/Button";
// import Select_rols_users from "../../../components/selects_input/Select_rols_users";
// function Form_notification() {
//   const dispatch = useDispatch();
//   const { formDataNotification: formData } = useSelector(
//     (state) => state.notifications.sendNotifications
//   );
//   const type_notification = ["success", "error", "warning", "general"];
  
//   const [selectedUsers, setSelectedUsers] = useState([]);

//   const title = formData?.title || '';
//   const description = formData?.description || '';
//   const type = formData?.type || '';

//   const handler_change = (e) => {
//     const { name, value } = e.target;
//     dispatch(setDataNotifications({ [name]: value }));
//   };

//   const navigate = useNavigate();
//   const [toastVisible, setToastVisible] = useState(false);

//   const handleUsersChange = (users) => {
//     setSelectedUsers(users);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Title:", title);
//     console.log("Description:", description);
//     console.log("Type:", type);

//     if (!title || !description || !type) {
//       console.error("Title, description, or type is missing!");
//       return;
//     }
    
//     const Data = new FormData();
//     Data.append("title", title);
//     Data.append("description", description);
//     Data.append("type", type);
//     Data.append("data[rrrr]", 'lllll');
//     selectedUsers.forEach((userId) => {
//       Data.append("user_ids[]", userId); // استخدم user_ids[] لجعلها مصفوفة
//     });
//     // Data.append("user_ids", selectedUsers);
//     // formData.room.forEach((room, index) => {
//     //   Data.append(`room[${index}][type_id]`, room.id);
//     //   Data.append(`room[${index}][number]`, room.number_of_room);
//     // });
//     try {
//       await dispatch(send_notification(Data));
//       setToastVisible(true);

//       setTimeout(() => {
//         navigate("/");
//       }, 3000);
//     } catch (error) {
//       console.error("Error sending notification:", error);
//     }
//   };

//   return (
//     <>
//       <CForm onSubmit={handleSubmit}>
//         <CFormInput
//           type="text"
//           placeholder="العنوان"
//           name="title"
//           onChange={handler_change}
//           required
//           value={formData?.title}
//         />
//         <CFormInput
//           type="text"
//           placeholder="الوصف"
//           name="description"
//           value={formData?.description}
//           onChange={handler_change}
//           required
//         />
//         <CFormSelect
//           value={formData?.type}
//           name="type"
//           onChange={handler_change}
//           required
//         >
//           <option value="">-- Select Type --</option>
//           {type_notification.map((tn) => (
//             <option key={tn} value={tn}>
//               {tn}
//             </option>
//           ))}
//         </CFormSelect>
//         <Select_rols_users onUsersChange={handleUsersChange} />
//         <Button name="حفظ" type="submit" load="" />
//       </CForm>
//     </>
//   );
// }

// export default Form_notification;
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
import { CForm, CFormInput, CFormSelect, CButton } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { send_notification, setDataNotifications } from "../store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../../components/basics/Button";
import Select_rols_users from "../../../components/selects_input/Select_rols_users";

function Form_notification() {
  const dispatch = useDispatch();
  const { formDataNotification: formData } = useSelector(
    (state) => state.notifications.sendNotifications
  );
  const type_notification = ["success", "error", "warning", "general"];

  const [selectedUsers, setSelectedUsers] = useState([]);
  const [dataFields, setDataFields] = useState([
    { rrrr: '', lllll: '' } // افترض أن هناك حقلين rrrr و lllll
  ]);

  const title = formData?.title || '';
  const description = formData?.description || '';
  const type = formData?.type || '';

  const handler_change = (e) => {
    const { name, value } = e.target;
    dispatch(setDataNotifications({ [name]: value }));
  };

  const handleDataFieldChange = (index, field, value) => {
    const updatedDataFields = [...dataFields];
    updatedDataFields[index][field] = value;
    setDataFields(updatedDataFields);
  };

  const addDataField = () => {
    setDataFields([...dataFields, { rrrr: '', lllll: '' }]);
  };

  const removeDataField = (index) => {
    const updatedDataFields = dataFields.filter((_, i) => i !== index);
    setDataFields(updatedDataFields);
  };

  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  const handleUsersChange = (users) => {
    setSelectedUsers(users);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Type:", type);
    console.log("Selected Users:", selectedUsers);
    console.log("Data Fields:", dataFields); // تحقق من البيانات

    if (!title || !description || !type) {
      console.error("Title, description, or type is missing!");
      return;
    }
    
    const Data = new FormData();
    Data.append("title", title);
    Data.append("description", description);
    Data.append("type", type);
    
    // إضافة selectedUsers
    selectedUsers.forEach((userId) => {
      Data.append("user_ids[]", userId); // استخدم user_ids[] لجعلها مصفوفة
    });

    // إضافة dataFields ككائنات
    dataFields.forEach((item, index) => {
      Data.append(`data[${item.rrrr}]`,item.lllll  ); // قيم rrrr
      // Data.append(`data[${index}]`,  || ''); // قيم lllll
    });

    try {
      await dispatch(send_notification(Data));
      setToastVisible(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <>
      <CForm onSubmit={handleSubmit}>
        <CFormInput
          type="text"
          placeholder="العنوان"
          name="title"
          onChange={handler_change}
          required
          value={formData?.title}
        />
        <CFormInput
          type="text"
          placeholder="الوصف"
          name="description"
          value={formData?.description}
          onChange={handler_change}
          required
        />
        <CFormSelect
          value={formData?.type}
          name="type"
          onChange={handler_change}
          required
        >
          <option value="">-- Select Type --</option>
          {type_notification.map((tn) => (
            <option key={tn} value={tn}>
              {tn}
            </option>
          ))}
        </CFormSelect>
        <Select_rols_users onUsersChange={handleUsersChange} />
        
        {dataFields.map((field, index) => (
          <div key={index} className="data-field">
            <CFormInput
              type="text"
              placeholder="rrrr"
              value={field.rrrr}
              onChange={(e) => handleDataFieldChange(index, 'rrrr', e.target.value)}
            />
            <CFormInput
              type="text"
              placeholder="lllll"
              value={field.lllll}
              onChange={(e) => handleDataFieldChange(index, 'lllll', e.target.value)}
            />
            <CButton onClick={() => removeDataField(index)}>Remove</CButton>
          </div>
        ))}
        <CButton onClick={addDataField}>Add More Fields</CButton>
        
        <Button name="حفظ" type="submit" load="" />
      </CForm>
    </>
  );
}

export default Form_notification;
