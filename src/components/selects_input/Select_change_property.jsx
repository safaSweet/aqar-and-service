import {
  CForm,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CTooltip,
} from "@coreui/react";
import Button from "../basics/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  change_status_clothes_request,
  change_status_properties_request,
  get_clothes_request,
  get_properties_request,
  get_obration_request,
  change_status_obration_request,
} from "../../modules/Pages/orders/Store";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useState } from "react";
import {
  change_publication_properties,
  change_status_properties,
  get_properties,
} from "../../modules/Pages/properties/selling_rentting/Store";

function Select_change_property({ id, statuses, params, type }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { loading } = useSelector(
    (state) => state.order_category_service.request_properties
  );
  const [status, setStatus] = useState({
    status_id: 0,
    property_id: id,
  });
  const [obration, setObration] = useState({
    status_id: 0,
    operation_request_id: id,
  });
  const [status_clothe, setStatusClothe] = useState({
    status_id: 0,
    request_id: id,
  });
  const [publication, setPublication] = useState({
    typePublication_id: 0,
    property_id: id,
  });
  function handler_change(e) {
    if (type === "request_clothes")
      setStatusClothe({
        ...status_clothe,
        ...{ [e.target.name]: e.target.value },
      });
    else if (type === "obration")
      setObration({ ...obration, ...{ [e.target.name]: e.target.value } });
    else setStatus({ ...status, ...{ [e.target.name]: e.target.value } });
  }
  function handler_change_publication(e) {
    setPublication({ ...publication, ...{ [e.target.name]: e.target.value } });
  }
  // function handler_change_obration(e) {
  // }

  async function HandlerSubmit(e) {
    e.preventDefault();
    if (type === "request")
      dispatch(change_status_properties_request(status)).then(() => {
        setVisible(false);
        dispatch(get_properties_request(params));
      });
    else if (type === "property")
      dispatch(change_status_properties(status)).then(() => {
        setVisible(false);
        dispatch(get_properties(params));
      });
    else if (type === "obration")
      dispatch(change_status_obration_request(obration)).then(() => {
        setVisible(false);
        dispatch(get_obration_request(params));
      });
    else if (type === "request_clothes")
      dispatch(change_status_clothes_request(status_clothe)).then(() => {
        setVisible(false);
        dispatch(get_clothes_request({ params }));
      });
    else
      dispatch(change_publication_properties(publication)).then(() => {
        setVisible(false);
        dispatch(get_properties(params));
      });
  }

  return (
    <>
      <CTooltip content={type === "property_publication"
              ? 'تغيير نوع النشر'
              :' تغيير حالة العقار'} placement="bottom">
        <CIcon
          icon={
            type === "property_publication"
              ? icon.cilToggleOff
              : icon.cilToggleOn
          }
          size="xl"
          onClick={() => setVisible(true)}
        />
      </CTooltip>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>تغيير الحالة</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={HandlerSubmit}>
            {type === "property_publication" ? (
              <CFormSelect
                className="w-25"
                name="typePublication_id"
                options={statuses}
                width="25%"
                onChange={handler_change_publication}
              />
            ) : (
              <CFormSelect
                className="w-25"
                name="status_id"
                options={statuses}
                width="25%"
                onChange={handler_change}
              />
            )}

            <Button type="submit" load={loading} name="حفظ" />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Select_change_property;
