
import { CCol, CForm, CFormInput, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, updateProject, setData ,resetData} from "../Store";
import Button from "../../../../components/basics/Button";
import MapWithAddPoints from "../../../../components/basics/Create_points";
import { useNavigate, useParams } from "react-router-dom";
import LocationSelector from "../../../../components/selects_input/Select_governorate2town";
import Toast from "../../../../messages/Toast";

function Project_form() {
  const { id } = useParams();
  const id_parse = parseInt(id, 10);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [toastVisible, setToastVisible] = useState(false);

  const formData = useSelector(state => state.projects.create_project.formData);
  const {loading} = useSelector(state => state.projects.create_project);
  const msg = useSelector(state => state.projects.create_project);
  // const status = useSelector(state => state.projects.create_project.data.data);
  
  const projectData = useSelector(state => 
    state.projects.get_projects.data.data?.data.find(project => project.id === id_parse)
  );
  // console.log('load',status)

  useEffect(() => {
    if (id_parse && projectData) {
      dispatch(setData(projectData));
    } else {
      dispatch(resetData());
    }
  }, [id_parse, projectData, dispatch]);

  const handleMapMarkerChange = (markers) => {
    if (markers.length > 0) {
      const position = {
        latitude: markers[0].lat,
        longitude: markers[0].lng,
      };
      dispatch(setData({ position }));
    }
  };

  const handleChange = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.append("area", formData.area);
    Data.append("description", formData.description);
    Data.append("name", formData.name);
    Data.append("region_id", formData.region_id);
    Data.append("town_id", formData.town_id);
    Data.append("governorate_id", formData.governorate_id);
    Data.append("position", JSON.stringify(formData.position));

    if (id_parse) {
      Data.append("id", id);
      dispatch(updateProject( Data));
      // console.log('first')
    } else {

      dispatch(createProject(Data));
    }
    setToastVisible(true);

    setTimeout(() => {
      // status.status==='true'&& 
      navigate("/projects");
    }, 3000);
  };

  return (
    <CForm onSubmit={handleSubmit}>
    {toastVisible &&<Toast text={msg.msg} color='secondary'/>}
      <CRow>
        <CCol xs="6">
          <CFormInput
            type="text"
            placeholder="الاسم"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
            required
          />
          <CFormInput
            type="number"
            placeholder="المساحة"
            name="area"
            value={formData.area || ''}
            onChange={handleChange}
            required
          />
          <CFormInput
            type="text"
            placeholder="الوصف"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            required
          />
          
          {!id &&<LocationSelector type='project'/>}
        </CCol>
      </CRow>
      <MapWithAddPoints onMarkersChange={handleMapMarkerChange} initialMarkers={formData.position ? [formData.position] : []} />
      <Button name="حفظ" type="submit" load={loading} />
    </CForm>
  );
}

export default Project_form;
