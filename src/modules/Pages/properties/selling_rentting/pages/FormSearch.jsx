import { CRow, CCol, CForm, CFormInput } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../../components/basics/Button";
import Toast from "../../../../../messages/Toast";
import Select_Config from "../../../../../components/selects_input/Select_Config";
import {  search_property, setDataForSearch } from "../Store";
import LocationSelector from "../../../../../components/selects_input/Select_governorate2town";
import { useNavigate } from "react-router-dom";

function FormSearch() {
  const navigate=useNavigate();
  const { formData,loading } = useSelector(
    (state) => state.properties.search_properties
  );
  const dispatch = useDispatch();
  const handler_change = (e) => {
    dispatch(setDataForSearch({ [e.target.name]: e.target.value }));
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    params.append("maxPrice", formData.maxPrice || "");
    params.append("minPrice", formData.minPrice || "");
    params.append("maxArea", formData.maxArea || "");
    params.append("minArea", formData.minArea || "");
    params.append("governorateId", formData.governorateId || "");
    params.append("regionId", formData.regionId || "");
    params.append("townId", formData.townId || "");

    params.append("direction", (formData.direction || []).join(","));

    formData.claddingLevel.forEach((dir, index) => {
      params.append(`claddingLevel[${index}]`, dir);
    });
    formData.publicationId.forEach((dir, index) => {
      params.append(`publicationId[${index}]`, dir);
    });

    params.append("service_and_virtues", (formData.service_and_virtues || []).join(","));
    params.append("typeOwnerIds", (formData.typeOwnerIds || []).join(","));
    params.append(
      "propertyCategoryId",
      (formData.propertyCategoryId || []).join(",")
    );

    // Create a plain object from params
    const searchParams = {};
    for (const [key, value] of params.entries()) {
      searchParams[key] = value;
    }

    dispatch(search_property(searchParams));
    navigate('/selling-property-search')
  };

  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
            <Select_Config type="search" />
          </CCol>
          <CCol xs="6">
            <LocationSelector type="search" />
            <CFormInput
              type="number"
              placeholder="اقصى حد للسعر"
              name="maxPrice"
              onChange={handler_change}
              // required
            />
            <CFormInput
              type="number"
              placeholder="ادنى حد للسعر"
              name="minPrice"
              onChange={handler_change}
            />
            <CFormInput
              type="number"
              placeholder="اقصى حد للمساحة"
              name="maxArea"
              onChange={handler_change}
            />
            <CFormInput
              type="number"
              placeholder=" ادنى حد للمساحة"
              name="minArea"
              onChange={handler_change}
            />
            <CFormInput
              type="number"
              placeholder="اقصى حد لعدد الغرف "
              name="maxNumberOfRoom"
              onChange={handler_change}
            />
            <CFormInput
              type="number"
              placeholder="ادنى حد لعدد الغرف "
              name="minNumberOfRoom"
              onChange={handler_change}
            />
          </CCol>
        </CRow>
        <Button name="بحث" type="submit" load={loading} />
      </CForm>
    </>
  );
}

export default FormSearch;
