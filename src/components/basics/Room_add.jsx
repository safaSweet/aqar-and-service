import { useState } from "react";
import {
  CButton,
  CForm,
  CFormInput,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CTooltip,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  Get_config,
  createOptions,
} from "../../modules/properties_specifications/Get_config";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { add_room_tower_property } from "../../modules/Pages/projects/Store";

function Room_add({ title, icons, id }) {
  const { roomType } = Get_config();
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([{ type_id: "", number: "" }]);
  const dispatch=useDispatch()
  
  const addRoom = () => {
    setRooms([...rooms, { type_id: "", number: "" }]);
  };
  const handler_change = (e) => {
    const { name, value } = e.target;
    const index = parseInt(name.split("_").pop());
    const field = name.startsWith("room_type_") ? "type_id" : "number";
    const newRooms = rooms.map((room, i) =>
      i === index ? { ...room, [field]: value } : room
    );
    setRooms(newRooms);
  };
  const handler_submit = (e) => {
    e.preventDefault();
    const Data=new FormData()
    Data.append('property_id',id)
    rooms.forEach((room, index) => {
        Data.append(`room[${index}][type_id]`, room.type_id);
        Data.append(`room[${index}][number]`, room.number);
      });
    dispatch(add_room_tower_property(Data))
  }
  return (
    <>
     <CTooltip content="اضافة غرف" placement="bottom">
      <CIcon icon={icons} size="xl" onClick={() => setVisible(true)} />
      </CTooltip>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle> {title} </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={handler_submit}>
            {rooms.map((room, index) => (
              <div
                key={`room_${index}`}
                style={{ display: "flex", gap: "10px" }}
              >
                <CFormSelect
                  options={createOptions(roomType)}
                  name={`room_type_${index}`}
                  value={room.type_id}
                  onChange={handler_change}
                  required
                />
                <CFormInput
                  type="number"
                  name={`room_number_${index}`}
                  value={room.number}
                  onChange={handler_change}
                  required
                />
              </div>
            ))}
            <CButton type="button" onClick={addRoom}>
              Add Room
            </CButton>
            <CFormInput name="property_id" type="hidden" value={id} />
            <Button name="حفظ" type="submit" load="" />
          </CForm>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Room_add;
/////////////////////////////////^^^^^^^^^^^^^^^شغال بس مشكلة تعداد التحميل
