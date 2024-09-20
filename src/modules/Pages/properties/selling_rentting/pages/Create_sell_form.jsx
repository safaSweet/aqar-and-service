import { CRow, CCol, CForm, CFormInput } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../components/basics/Button";

import Select_Config from "../../../../../components/selects_input/Select_Config";
import { createSelling, edit_properties, resetData, setData } from "../Store";
import LocationSelector from "../../../../../components/selects_input/Select_governorate2town";
import MapWithAddPoints from "../../../../../components/basics/Create_points";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../../../../../messages/Toast";

function Create_sell_form() {
  const { id } = useParams();
  const id_parse = parseInt(id, 10);
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate();
  const { formData } = useSelector(
    (state) => state.properties.create_properties
  );
  const { loading } = useSelector(
    (state) => state.properties.create_properties
  );
  const msg = useSelector(
    (state) => state.properties.create_properties.data.data
  );
  const data = useSelector((state) =>
    state.properties.get_properties.data.data?.data.find(
      (selling) => selling.id === id_parse
    )
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      const {
        type_publication,
        category_real_estate_type,
        cladding_level,
        status,
        type_owner,
        direction,
        address,
        ...rest
      } = data;

      dispatch(
        setData({
          ...rest,
          type_publication_id: type_publication?.id || "",
          category_real_estate_type_id: category_real_estate_type?.id || "",
          cladding_level_id: cladding_level?.id || "",
          status_id: status?.id || "",
          type_owner_id: type_owner?.id || "",

          governorate_id: address[0].value.id,
          region_id: address[1].value.id,
          town_id: address[2].value.id,

          direction: direction.map((dir) => dir.id) || [],
        })
      );
    } else {
      dispatch(resetData());
    }
  }, [data, dispatch]);

  // console.log('address : ',formData.address[0].value.id)
  useEffect(() => {
    if (id_parse && data) {
      dispatch(setData(data));
    } else {
      dispatch(resetData());
    }
  }, [id_parse, data, dispatch]);

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
    Data.append("price", formData.price);
    Data.append("area", formData.area);
    Data.append("description", formData.description);
    Data.append("status_id", formData.status_id);
    Data.append("cladding_level_id", formData.cladding_level_id);
    Data.append("type_publication_id", formData.type_publication_id);
    Data.append("position", JSON.stringify(formData.position));
    Data.append(
      "category_real_estate_type_id",
      formData.category_real_estate_type_id
    );
    Data.append("type_owner_id", formData.type_owner_id);
    Data.append("period_id", formData.period_id);
    Data.append("count_level", formData.count_level);
    Data.append("region_id", formData.region_id);
    Data.append("governorate_id", formData.governorate_id);
    Data.append("town_id", formData.town_id);

    formData.room.forEach((room, index) => {
      Data.append(`room[${index}][type_id]`, room.id);
      Data.append(`room[${index}][number]`, room.number_of_room);
    });

    const property_photosInput = document.querySelector(
      'input[name="property_photos"]'
    );
    Array.from(property_photosInput.files).forEach((file, index) => {
      Data.append(`property_photos[${index}]`, file);
    });

    const owner_photosInput = document.querySelector(
      'input[name="owner_photos"]'
    );
    Array.from(owner_photosInput.files).forEach((file, index) => {
      Data.append(`owner_photos[${index}]`, file);
    });
    if (id_parse) {
      formData.service_and_virtues.forEach((id, index) => {
        Data.append(`service_and_virtues[${index}]`, id.id);
      });
      formData.direction.forEach((id, index) => {
        Data.append(`direction[${index}]`, id.id);
      });
      Data.append("property_id", id_parse);
      dispatch(edit_properties(Data));
    } else {
      formData.service_and_virtues.forEach((id, index) => {
        Data.append(`service_and_virtues[${index}]`, id);
      });

      formData.direction.forEach((id, index) => {
        Data.append(`direction[${index}]`, id);
      });
      dispatch(createSelling(Data));
      // .then((e)=>);
    }
    setToastVisible(true);

    setTimeout(() => {
      // status==='true'&&
      navigate("/selling-property");
    }, 3000);
  };

  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
            <Select_Config type="filter" formData={formData} />
          </CCol>
          <CCol xs="6">
            {!id && <LocationSelector type="property" formData={formData} />}
            <CFormInput
              type="text"
              placeholder="السعر"
              name="price"
              onChange={handler_change}
              required
              value={formData.price || ""}
            />
            <CFormInput
              type="text"
              placeholder=" المساحة"
              name="area"
              onChange={handler_change}
              required
              value={formData.area || ""}
            />
            <CFormInput
              type="text"
              placeholder="الوصف "
              name="description"
              onChange={handler_change}
              required
              value={formData.description || ""}
            />
            <CFormInput
              type="text"
              placeholder="رقم الطابق"
              name="count_level"
              onChange={handler_change}
              required
              value={formData.count_level || ""}
            />
            <CFormInput
              type="file"
              label="صور العقار"
              name="property_photos"
              multiple
              onChange={handler_change}
              required={!id_parse}
            />
            <CFormInput
              type="file"
              label="صور الملكية"
              name="owner_photos"
              multiple
              onChange={handler_change}
              required={!id_parse}
            />
          </CCol>
        </CRow>
        <MapWithAddPoints onMarkersChange={handleMapMarkerChange} />
        {toastVisible && msg !== undefined && (
          <Toast text={msg.msg} color="secondary" />
        )}
        <Button name="حفظ" type="submit" load={loading} />
      </CForm>
    </>
  );
}

export default Create_sell_form;
