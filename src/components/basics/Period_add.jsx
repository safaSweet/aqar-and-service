
import { useState } from "react";
import { CButton, CForm, CFormInput, CFormSelect, CModal, CModalBody, CModalHeader, CModalTitle, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { Get_config, createOptions } from "../../modules/properties_specifications/Get_config";
import { add_rentalPeriod_tower_property } from "../../modules/Pages/projects/Store";
import { useDispatch } from "react-redux";
import Button from "./Button";

function Period_add({ title, icons, id }) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { rentalPeriod } = Get_config();
  const [rental_period, setrental_period] = useState([]);

  const addDynamicField = (setter, state) => {
    setter([...state, ""]);
  };

  const handler_change = (e) => {
    const { name, value } = e.target;
    const index = parseInt(name.split("_").pop());
    const newrental_period = [...rental_period];
    newrental_period[index] = value;
    setrental_period(newrental_period);
    console.log("rental_period: ", newrental_period);
  };

  const handler_submit = (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append('property_id', id);
    rental_period.forEach((period, index) => {
      Data.append(`rental_period[${index}]`, period);
    });
    dispatch(add_rentalPeriod_tower_property(Data));
  };

  return (
    <>
     <CTooltip content="اضافة فترة اجار" placement="bottom">
      <CIcon
        icon={icons}
        size="xl"
        onClick={() => setVisible(true)}
      /></CTooltip>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handler_submit}>
            {rental_period.map((_, index) => (
              <CFormSelect
                key={`rental_period_${index}`}
                options={createOptions(rentalPeriod)}
                name={`rental_period_${index}`}
                onChange={handler_change}
              />
            ))}
            <CButton
              type="button"
              onClick={() => addDynamicField(setrental_period, rental_period)}
            >
              Add period
            </CButton>
            <CFormInput
              name="id_property"
              type="hidden"
              value={id}
            />
            <Button name="حفظ" type="submit" load="" />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Period_add;
