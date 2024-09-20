import { CRow, CCol, CForm, CFormInput } from "@coreui/react";
import Button from "../../../../../components/basics/Button";
import { useDispatch, useSelector } from "react-redux";
import { createProvider, resetData, setData, updateProvider } from "../Store";
import Toast from "../../../../../messages/Toast";
import { useNavigate, useParams } from "react-router-dom";
import SelectGovernorate from "../../../../../components/selects_input/Select_governorate";
import { useEffect, useState } from "react";
import ModalAdd from "../../../../../components/basics/Modal_add";
import DeleteImages from "../../../../../components/basics/DeleteImage";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
function Service_form({ create }) {
  const { id, idProvider } = useParams();
  const providerId = parseInt(idProvider);
  const data = useSelector((state) =>
    state.service_provider.get_services_providers.data.data?.Service_Providers.find(
      (provider) => provider.id === providerId
    )
  );
  const msg = useSelector(
    (state) => state.service_provider.create_service_provider.data.data
  );
  const status = useSelector(
    (state) => state.service_provider.create_service_provider.data.data
  );
  const dispatch = useDispatch();
  // const [businessImages, setBusinessImages] = useState([]);
  // const [identyfieImages, setIdentyfieImages] = useState([]);
  // const [deletedImages, setDeletedImages] = useState([]);

  useEffect(() => {
    dispatch(setData({ category_service_id: id }));
  }, [id, dispatch]);
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();

  const { formData } = useSelector(
    (state) => state.service_provider.create_service_provider
  );

  const is_req_id_docs = useSelector((state) =>
    state.service_provider.get_services_providers.data.data?.Service_Providers[0]?.category_service?.is_req_id_docs ?? 0
  );
  
  console.log("is_req_id_docs : ", is_req_id_docs);
  const { loading } = useSelector(
    (state) => state.service_provider.create_service_provider
  );

  useEffect(() => {
    if (idProvider && data) {
      dispatch(setData(data));
      // setBusinessImages(data.business || []);
      // setIdentyfieImages(data.Identyfie_paper || []);
    } else {
      dispatch(resetData());
    }
  }, [idProvider, data, dispatch]);

  const handler_change = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const Data = new FormData();
    Data.append("name", formData.name);
    Data.append("email", formData.email);
    Data.append("mobile_number", formData.mobile_number);
    // Data.append("mobile_number", formData.contact_information[0].mobile_number);
    Data.append("description", formData.description);
    Data.append("governorate_id", formData.governorate_id);
    Data.append("category_service_id", id);
    Data.append("description", "description");

    if (idProvider) {
      Data.append("id", idProvider);
      dispatch(updateProvider(Data));
    } else {
      dispatch(createProvider(Data));
    }
    setToastVisible(true);

    setTimeout(() => {
      status === "true" && navigate(`/service-providers/${id}`);
    }, 3000);
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
              required={!idProvider}
              value={formData.name || ""}
            />
            <CFormInput
              type="text"
              placeholder="الايميل"
              name="email"
              onChange={handler_change}
              required={!idProvider}
              value={formData.email || ""}
            />
            <CFormInput
              type="text"
              placeholder="رقم الهاتف"
              name="mobile_number"
              onChange={handler_change}
              required={!idProvider}
              // value={formData.contact_information ? formData.contact_information[0].mobile_number : ''}مشكلة بالاضافة
            />
            <CFormInput type="hidden" name="category_service_id" value={id} />
            {/* <h5>اضافة صور</h5> */}
            {/* <ModalAdd
              title="اضافة صور"
              icons={icon.cilImagePlus}
              type="image_service"
              id={idProvider ? idProvider : id}
            /> */}
            {/* <h4>حذف صور</h4> */}
            {/* {idProvider&&<DeleteImages photos={item.photo} id={item.id} type="project" />} */}
          </CCol>
          <CCol xs="6">
            {/* <CFormInput
              type="text"
              placeholder="الوصف"
              name="description"
              onChange={handler_change}
              required={!idProvider}
              value={formData.description || ''}
            />
            <CFormInput
              type="file"
              label="صور الاعمال"
              accept="image/*"
              name="business"
              required={!idProvider}
              multiple
              onChange={handler_change}
            /> */}
            {/* <div>
              {businessImages.map((image) => (
                <div key={image.id}>
                  <img src={image.url} alt="business" width={100} />
                  <button type="button" onClick={() => removeImage(image.id, 'business')}>Remove</button>
                </div>
              ))}
            </div> */}
            {is_req_id_docs === 1 && (
              <>
                <CFormInput
                  type="file"
                  label="الصور الشهادة"
                  name="identyfie"
                  required={!idProvider}
                  multiple
                  onChange={handler_change}
                />
              </>
            )}
            <SelectGovernorate value={idProvider ? "update" : "create"} />
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
