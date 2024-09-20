import { CRow, CCol, CForm, CFormInput } from "@coreui/react";
import Button from "../../../../../components/basics/Button";
import { useDispatch, useSelector } from "react-redux";
import { setDataForUpdate, updateProvider } from "../Store";
import Toast from "../../../../../messages/Toast";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Select_governorate from "../../../../../components/selects_input/Select_governorate";

function Service_form_update() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const providerId = parseInt(id);

  const data = useSelector((state) =>
    state.service_provider.get_services_providers.data.data?.Service_Providers.find(
      (provider) => provider.id === providerId
    )
  );
  const is_req_id_docs
  = useSelector((state) =>
    state.service_provider.get_services_providers.data.data?.Service_Providers[0].category_service.is_req_id_docs

  );
  const { formData, loading } = useSelector(
    (state) => state.service_provider.update_service_provider
  );
  const msg = useSelector(
    (state) => state.service_provider.update_service_provider.data.data
  );
  const status = useSelector(
    (state) => state.service_provider.update_service_provider.data.data
  );
  useEffect(() => {
    if (data) {
      dispatch(setDataForUpdate(data));
    }
  }, [data, dispatch]);
  const handler_change = (e) => {
    dispatch(setDataForUpdate({ [e.target.name]: e.target.value }));
  };
  // const handler_change = (e) => {
  //   const { name, files } = e.target;
  //   const formData = new FormData();
  //   formData.append(name, files[0]);
  //   dispatch(setDataForUpdate(formData));
  // };
  
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateProvider(formData));
    
  };

  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="اسم مقدم الخدمة"
              name="name"
              onChange={handler_change}
              required
              value={formData.name}
            />
            <CFormInput
              type="text"
              placeholder="الايميل"
              name="email"
              onChange={handler_change}
              required
              value={formData.email}
            />
            <CFormInput
              type="text"
              placeholder="رقم الهاتف"
              name="mobile_number"
              onChange={handler_change}
              // required
              // value={formData.contact_information[0].identifier}
            />
          </CCol>
          <CCol xs="6">
          {is_req_id_docs===1&&         
            <CFormInput
              type="file"
              label="الصور الشهادة"
              name="identyfie"
              multiple
              onChange={handler_change}
              // required
            />
   }
            {/* <CFormInput
              type="file"
              placeholder="صور الشهادة"
              name="identyfie"
              onChange={handler_change}
              multiple
              value={formData.identyfie}
            /> */}
            <CFormInput
              type="file"
              placeholder="العمل"
              name="business"
              onChange={handler_change}
              multiple
              // value={formData.business}
            />
            <Select_governorate value="update" />
          </CCol>
        </CRow>
        <Button name="حفظ" type="submit" load={loading} />
        {msg === undefined ? (
          ""
        ) : (
          <Toast text={msg.msg} color={status.status ? "success" : "danger"} />
        )}
      </CForm>
    </>
  );
}

export default Service_form_update;

  
      // const Data = new FormData();
      // Data.append("name", formData.name);
      // Data.append("email", formData.email);
      // Data.append("mobile_number", formData.mobile_number);
      // Data.append("description", formData.description);
      // Data.append("governorate_id", formData.governorate_id);
      // Data.append("category_service_id", id);
  
      // const businessInput = document.querySelector('input[name="business"]');
      // Array.from(businessInput.files).forEach((file, index) => {
      //   Data.append(`business[${index}]`, file);
      // });
  
      // const identyfieInput = document.querySelector('input[name="identyfie"]');
      // Array.from(identyfieInput.files).forEach((file, index) => {
      //   Data.append(`identyfie[${index}]`, file);
      // });