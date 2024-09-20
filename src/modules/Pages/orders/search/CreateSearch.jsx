import { CCol, CForm, CFormInput, CRow } from "@coreui/react";
import React from "react";
import Select_type_request from "../../../../components/selects_input/Select_type_request";
import { search_request, setDataForSearch } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../../components/basics/Button";
import { useNavigate } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
function CreateSearch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData } = useSelector(
    (state) => state.order_category_service.search_request || []
  );
  const handleChange = (e) => {
    dispatch(setDataForSearch({ [e.target.name]: e.target.value }));
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    const Data = new FormData();
    Data.append("type", formData.type);
    Data.append("number", formData.number);
    dispatch(search_request(Data));
    navigate("/search-request");
  };
  return (
    <>
      <CIcon
        icon={icon.cilArrowCircleLeft}
        size="xl"
        onClick={() => navigate(-1)}
        className=" mb-5"
      />
      <CForm onSubmit={handlerSubmit} className=" text-center" style={{marginLeft:'30%'}}>
        <CRow>
        <CCol xs='4'>
          <Select_type_request />
          
        </CCol>
        <CCol xs='4'>

          <CFormInput type="text" name="number" onChange={handleChange} />
        </CCol>
        </CRow>
          <Button name="حفظ" type="submit" load="" />
      </CForm>
    </>
  );
}

export default CreateSearch;
