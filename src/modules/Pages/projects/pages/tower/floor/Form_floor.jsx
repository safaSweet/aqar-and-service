import { useEffect, useState } from "react";
import {
  CForm,
  CFormInput,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../../components/basics/Button";
import { resetDataFloor, updateFloor, setDataFloor, createFloor } from "../../../Store";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../../../../../../messages/Toast";

function Form_floor() {
  const { idTower,idFloor } = useParams();
  const id_parse1 = idFloor ? parseInt(idFloor, 10) : null;
  // const id_parse2 = idTower ? parseInt(idTower, 10) : null;
  
  const tower = useSelector(state => 
    state.projects.get_floor.data.data?.data?.floors.find(project => project.id === id_parse1)
  );
  const formDataFloor = useSelector(
    (state) => state.projects.create_floor.formDataFloor
  );
  const [toastVisible, setToastVisible] = useState(false);
 const navigate=useNavigate()
  const {msg} = useSelector(
    (state) => state.projects.create_floor
  );
  const {loading} = useSelector(
    (state) => state.projects.create_floor
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (id_parse1 && tower) {
      dispatch(setDataFloor(tower));
    } else {
      dispatch(resetDataFloor());
    }
  }, [id_parse1, tower, dispatch]);
 
  const handler_change = (e) => {
    dispatch(setDataFloor({ ...formDataFloor, [e.target.name]: e.target.value }));
  };
  
  const handlerSubmitforTower = (e) => {
    e.preventDefault();
    const towerData = new FormData();
    towerData.append('description', formDataFloor.description);
    towerData.append('number_of_flat', formDataFloor.number_of_flat);
    towerData.append('floor_number', formDataFloor.floor_number);
    towerData.append("tower_id", idTower);
    if (idFloor) {
      towerData.append("id", idFloor);
      dispatch(updateFloor(towerData));
    } else {
    //   towerData.append('residential_complex_id', idProject);
    dispatch(createFloor(towerData));
  }
  setToastVisible(true);

  setTimeout(() => {
    navigate(`/floors/${idTower}`);
  }, 3000);
  };

  return (
    <>
      <CForm onSubmit={handlerSubmitforTower}>
      {toastVisible&&<Toast text={msg} color='danger'/>}

        <CFormInput
          type="number"
          placeholder="رقم الطابق "
          name="floor_number"
          onChange={handler_change}
          value={formDataFloor.floor_number || ''}
          required
        />
        <CFormInput
          type="number"
          placeholder=" رقم الشقة "
          name="number_of_flat"
          onChange={handler_change}
          value={formDataFloor.number_of_flat || ''}
          required
        />
        <CFormInput
          type="text"
          placeholder="الوصف"
          name="description"
          onChange={handler_change}
          value={formDataFloor.description || ''}
          required
        />
        {/* <CFormInput
          type="hidden"
          name="tower_id"
          required
        /> */}
        <Button name="حفظ" type="submit" load={loading} />
      </CForm>
    </>
  );
}

export default Form_floor;
