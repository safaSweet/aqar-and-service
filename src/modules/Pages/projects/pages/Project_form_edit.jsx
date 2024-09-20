import { CCol, CForm, CFormInput, CRow } from '@coreui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createProject, setData } from '../Store';
import Button from '../../../../components/basics/Button';
import MapWithAddPoints from '../../../../components/basics/Create_points';

function Project_form_edit({id}) {
    const { formData } = useSelector(
        (state) => state.projects.create_project
      );
      const data  = useSelector((state) => state.projects.get_projects.data?.data || []);

      // const { loading } = useSelector(
      //   (state) => state.properties.create_properties
      // );
      // const msg = useSelector(
      //   (state) => state.properties.create_properties.data.data
      // );
      // const status = useSelector(
      //   (state) => state.properties.create_properties.data.data
      // );
      const dispatch = useDispatch();
      const handleMapMarkerChange = (markers) => {
        if (markers.length > 0) {
          const position = {
            latitude: markers[0].lat,
            longitude: markers[0].lng,
          };
          dispatch(setData({ position: position }));
        }
      };
      const handler_change = (e) => {
        dispatch(setData({ [e.target.name]: e.target.value }));
      };
      const handlerSubmit = (e) => {
        e.preventDefault();
        const Data = new FormData();

        Data.append("area", formData.area);
        Data.append("description", formData.description);
        Data.append("name", formData.name);
        Data.append("position", JSON.stringify(formData.position)); 
        
        dispatch(createProject(Data));
      };
  return (
    <>
         <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
          </CCol>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="الاسم"
              name="name"
              onChange={handler_change}
              required
              value={data.name}
            />
            <CFormInput
              type="number"
              placeholder=" المساحة"
              name="area"
              onChange={handler_change}
              required
            />
            <CFormInput
              type="text"
              placeholder="الوصف "
              name="description"
              onChange={handler_change}
              required
            />
            
          </CCol>
        </CRow>
        <MapWithAddPoints onMarkersChange={handleMapMarkerChange} />

        <Button name="حفظ" type="submit" load="" />
        {/* {msg === undefined ? (
          ""
        ) : (
          <Toast text={msg.msg} color={status.status ? "success" : "danger"} />
        )} */}
      </CForm>
    </>
  )
}

export default Project_form_edit