
import { CRow, CCol, CForm, CFormInput, CFormSelect, CImage } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../components/basics/Button";
import { createCategory, setData } from "../Store";
import Toast from "../../../../../messages/Toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Service_form() {
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  const { formData } = useSelector(
    (state) => state.service_category.create_service_category
  );
  const { loading } = useSelector(
    (state) => state.service_category.create_service_category
  );
  const msg = useSelector(
    (state) => state.service_category.create_service_category.data.data
  );
  const status = useSelector(
    (state) => state.service_category.create_service_category.data.data
  );

  const dispatch = useDispatch();

  const handler_change = (e) => {
    const { name, value, type } = e.target;
    
    if (type === "file") {
      const file = e.target.files[0];
      if (file) {
        dispatch(setData({ [name]: file })); // Store the file object directly in formData
      }
    } else {
      dispatch(setData({ [name]: value }));
    }
  };

  // const [image, setImage] = useState(null)
  // const onImageChange = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     let reader = new FileReader();
  //     reader.onload = (e) => {
  //       setImage(e.target.result);
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  const handlerSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("is_req_id_docs", formData.is_req_id_docs);

    if (formData.icon) {
      data.append("icon", formData.icon); // Append the file itself, not the path
    }

    dispatch(createCategory(data));

    setToastVisible(true);

    setTimeout(() => {
      // status==='true'&&
       navigate("/services");
    }, 3000);
  };

  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
            <CFormSelect
              options={[
                { label: "لا تحتاج", value: "0" },
                { label: "تحتاج", value: "1" },
              ]}
              name="is_req_id_docs"
              onChange={handler_change}
              required
            />
          </CCol>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="اسم الخدمة"
              name="name"
              onChange={handler_change}
              required
            />
            <CFormInput
              type="file"
              accept="image/*"
              placeholder=" الايقونة"
              name="icon"
              onChange={(e) => {
                handler_change(e);
                // onImageChange(e); // Preview the image
              }}
              required
            />
            {/* {image && <CImage alt="preview image" src={image} />} Preview image */}
          </CCol>
        </CRow>
        <Button name="حفظ" type="submit" load={loading} />
        {toastVisible && msg !== undefined && (
          <Toast text={msg.msg} color={status.status ? "success" : "danger"} />
        )}
      </CForm>
    </>
  );
}

export default Service_form;
