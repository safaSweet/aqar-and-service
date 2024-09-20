
import { useEffect, useState } from "react";
import { CForm, CFormInput } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../components/basics/Button";
import MapWithAddPoints from "../../../../../components/basics/Create_points";
import Select_tower_classification from "../../../../../components/selects_input/Select_tower_classification";
import {
  resetDataTower,
  updateTower,
  setDataTower,
  createTower,
} from "../../Store";
import { useNavigate, useParams } from "react-router-dom";
import Toast from "../../../../../messages/Toast";

function CreateUpdateTower() {
  const { idProject, idTower } = useParams();
  const id_parse = idTower ? parseInt(idTower, 10) : null;
  // const id_parse2 = idProject ? parseInt(idProject, 10) : null;
  const [toastVisible, setToastVisible] = useState(false);

  const tower = useSelector((state) =>
    state.projects.get_tower.data.data?.data.towers.find(
      (project) => project.id === id_parse
    )
  );
  // console.log("tttt", tower);
  const formDataTower = useSelector(
    (state) => state.projects.create_tower.formDataTower
  );
  const navigate=useNavigate();
  const { msg } = useSelector((state) => state.projects.create_tower);
  const { loading } = useSelector((state) => state.projects.create_tower);
  console.log("msg,", msg, "load", loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id_parse && tower) {
      dispatch(setDataTower(tower));
    } else {
      dispatch(resetDataTower());
    }
  }, [id_parse, tower, dispatch]); //id_parse, tower, dispatch

  const handleMapMarkerChange = (markers) => {
    if (markers.length > 0) {
      const position = {
        latitude: markers[0].lat,
        longitude: markers[0].lng,
      };
      dispatch(setDataTower({ ...formDataTower, position }));
    }
  };

  const handler_change = (e) => {
    dispatch(
      setDataTower({ ...formDataTower, [e.target.name]: e.target.value })
    );
  };

  const handlerSubmitforTower = (e) => {
    e.preventDefault();
    const towerData = new FormData();
    console.log("tttt", formDataTower.classification_id);
    towerData.append("name", formDataTower.name);
    towerData.append("area", formDataTower.area);
    towerData.append("description", formDataTower.description);
    towerData.append("number_of_floors", formDataTower.number_of_floors);
    towerData.append("classification_id", formDataTower.classification_id);
    towerData.append("position", JSON.stringify(formDataTower.position));

    if (idTower) {
      towerData.append("id", idTower);
      towerData.append("residential_complex_id", idProject);
      dispatch(updateTower(towerData));
    } else {

      towerData.append("residential_complex_id", idProject);
      dispatch(createTower(towerData));
      setToastVisible(true);

    }
    setTimeout(() => {
       navigate(`/projects`);
      //  navigate(`/towers/${idProject}`);
    }, 3000);
  };

  return (
    <>
      <CForm onSubmit={handlerSubmitforTower}>
        {<Toast text={msg} color="secondary" />}

        <CFormInput
          type="text"
          placeholder="الاسم"
          name="name"
          onChange={handler_change}
          value={formDataTower.name || ""}
          required
        />
        <CFormInput
          type="text"
          placeholder="المساحة "
          name="area"
          onChange={handler_change}
          value={formDataTower.area || ""}
          required
        />
        <CFormInput
          type="text"
          placeholder="عدد الطوابق "
          name="number_of_floors"
          onChange={handler_change}
          value={formDataTower.number_of_floors || ""}
          required
        />
        <CFormInput
          type="text"
          placeholder="الوصف"
          name="description"
          onChange={handler_change}
          value={formDataTower.description || ""}
          required
        />
        <Select_tower_classification tower={formDataTower}/>
        <CFormInput type="hidden" name="residential_complex_id" required />
        <MapWithAddPoints onMarkersChange={handleMapMarkerChange} />
        <Button name="حفظ" type="submit" load={loading} />
      </CForm>
    </>
  );
}

export default CreateUpdateTower;
