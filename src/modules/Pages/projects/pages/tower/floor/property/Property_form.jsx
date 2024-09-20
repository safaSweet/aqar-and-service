import { CRow, CCol, CForm, CFormInput } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  createFloorProperty,
  resetDataFloorProperty,
  setDataFloorProperty,
  updateFloorProperty,
} from "../../../../Store";
import MapWithAddPoints from "../../../../../../../components/basics/Create_points";
import Select_Config from "../../../../../../../components/selects_input/Select_Config";
import Button from "../../../../../../../components/basics/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../../../../../../../messages/Toast";
function Property_form() {
  const { idTower, idProperty } = useParams();
  const id_parse1 = idProperty ? parseInt(idProperty, 10) : null;
  // const id_parse2 = idTower ? parseInt(idTower, 10) : null;
  const dispatch = useDispatch();
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();
  const property = useSelector((state) =>
    state.projects.get_property.data.data?.data.find(
      (project) => project.id === id_parse1
    )
  );
  useEffect(() => {
    if (property) {
      const {
        type_publication,
        category_real_estate_type,
        cladding_level,
        status,
        type_owner,
        direction,
        // address,
        ...rest
      } = property;
  
      dispatch(setDataFloorProperty({
        ...rest,
        type_publication_id: type_publication?.id || "",
        category_real_estate_type_id: category_real_estate_type?.id || "",
        cladding_level_id: cladding_level?.id || "",
        status_id: status?.id || "",
        type_owner_id: type_owner?.id || "",
        direction: direction.map(dir => dir.id) || [],
        
        // governorate_id: address[0].value.id,
        // region_id: address[1].value.id,
        // town_id: address[2].value.id,
      }));
    } else {
      dispatch(resetDataFloorProperty());
    }
  }, [property, dispatch]);
  
  useEffect(() => {
    if (id_parse1 && property) {
      dispatch(setDataFloorProperty(property));
    } else {
      dispatch(resetDataFloorProperty());
    }
  }, [id_parse1, property, dispatch]);

  const { formDataFloorProperty } = useSelector(
    (state) => state.projects.create_property
  );
  const { msg } = useSelector((state) => state.projects.create_property);
  const { loading } = useSelector((state) => state.projects.create_property);

  const handleMapMarkerChange = (markers) => {
    if (markers.length > 0) {
      const position = {
        latitude: markers[0].lat,
        longitude: markers[0].lng,
      };
      dispatch(setDataFloorProperty({ position: position }));
    }
  };

  const handler_change = (e) => {
    dispatch(setDataFloorProperty({ [e.target.name]: e.target.value }));
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    const Data = new FormData();

    Data.append("tower_id", idTower);
    Data.append("floor_number", formDataFloorProperty.floor_number);
    Data.append("property_type", formDataFloorProperty.property_type);
    Data.append("cladding_level_id", formDataFloorProperty.cladding_level_id);
    Data.append(
      "type_publication_id",
      formDataFloorProperty.type_publication_id
    );
    Data.append("position", JSON.stringify(formDataFloorProperty.position));
    Data.append("area", formDataFloorProperty.area);
    Data.append("description", formDataFloorProperty.description);
    Data.append("price", formDataFloorProperty.price);
    Data.append(
      "category_real_estate_type_id",
      formDataFloorProperty.category_real_estate_type_id
    );
    
    if (idProperty) {
      Data.append("status_id", formDataFloorProperty.status.id);
      Data.append("type_owner_id", formDataFloorProperty.type_owner.id);
      formDataFloorProperty.direction.forEach((dir, index) => {
        Data.append(`direction[${index}]`, dir.id);
      });
      Data.append("property_id", idProperty);
      dispatch(updateFloorProperty(Data));
    } else {
      Data.append("status_id", formDataFloorProperty.status_id);
      Data.append("type_owner_id", formDataFloorProperty.type_owner_id);
      formDataFloorProperty.direction.forEach((dir, index) => {
        Data.append(`direction[${index}]`, dir);
      });
      dispatch(createFloorProperty(Data));
    }
// console.log('change:  ',formDataFloorProperty.type_owner_id)
    setToastVisible(true);

    setTimeout(() => {
      // status==='true'&&
      navigate(`/floors/${idTower}`);
    }, 3000);
  };
  console.log('formDataFloorProperty:  ' ,formDataFloorProperty)
  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        {toastVisible && <Toast text={msg} color="secondary" />}

        <CRow>
          <CCol xs="6">
            {idProperty ? (
              <Select_Config
                type="property_floor_edit"
                formData={formDataFloorProperty}
              />
            ) : (
              <Select_Config
                type="property_floor"
                formData={formDataFloorProperty}
              />
            )}
            {/* <Select_Config type="property_floor" id={idProperty} /> */}
          </CCol>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="السعر"
              name="price"
              onChange={handler_change}
              // required
              value={formDataFloorProperty.price || ""}
            />
            <CFormInput
              type="text"
              placeholder=" المساحة"
              name="area"
              onChange={handler_change}
              // required
              value={formDataFloorProperty.area || ""}
            />
            <CFormInput
              type="text"
              placeholder="الوصف "
              name="description"
              onChange={handler_change}
              // required
              value={formDataFloorProperty.description || ""}
            />
            <CFormInput
              type="number"
              placeholder="رقم الطابق "
              name="floor_number"
              onChange={handler_change}
              // required
              // value={formDataFloorProperty.floor?.floor_number || ""}
            />
            <CFormInput
              type="text"
              placeholder="نوع العقار"
              name="property_type"
              onChange={handler_change}
              // required
              value={formDataFloorProperty.property_type || ""}
            />
          </CCol>
        </CRow>
        <MapWithAddPoints onMarkersChange={handleMapMarkerChange} />

        <Button name="حفظ" type="submit" load={loading} />
        {/* {msg === undefined ? (
          ""
        ) : (
          <Toast text={msg.msg} color={status.status ? "success" : "danger"} />
        )} */}
      </CForm>
    </>
  );
}

export default Property_form;
