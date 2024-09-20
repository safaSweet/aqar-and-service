import { CRow, CCol, CForm, CFormInput, CFormSelect } from "@coreui/react";
import Button from "../../../../../components/basics/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById, updateCategory } from "../Store";
import Toast from "../../../../../messages/Toast";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Service_form_update() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    dispatch(getCategoryById({ id: id }));
  }, [id]); // يتم إعادة تشغيل useEffect عندما يتغير i

  const data = useSelector(
    (state) =>
      state.service_category.get_service_category_byId.data.data
        ?.CategoryService
  );

  const [form, setForm] = useState({
    name: "",
    is_req_id_docs: "",
    id: id,
  });

  // useEffect لتحديث form عندما تتغير البيانات
  useEffect(() => {
    if (data) {
      setForm({
        name: data.name,
        is_req_id_docs: data.is_req_id_docs,
        id: id,
      });
    }
  }, [data, id]);

  const { formData } = useSelector(
    (state) => state.service_category.update_service_category
  );
  const { loading } = useSelector(
    (state) => state.service_category.update_service_category
  );

  const msg = useSelector(
    (state) => state.service_category.update_service_category.data.data
  );
  const status = useSelector(
    (state) => state.service_category.update_service_category.data.data
  );

  const handler_change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCategory(form));
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
                "اختر ",
                { label: "لا تحتاج", value: "0" },
                { label: "تحتاج", value: "1" },
              ]}
              name="is_req_id_docs"
              value={form.is_req_id_docs}
              onChange={handler_change}
              required
            />
          </CCol>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="اسم الخدمة"
              value={form.name}
              name="name"
              onChange={handler_change}
              required
            />
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

export default Service_form_update;
