import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import {
  getRegions,
} from "../../modules/address/Store";
import { setData } from "../../modules/Pages/Management/branchs/Store";
const Select_region = ({id}) => {
  const dispatch = useDispatch();

  const address = useSelector(
    (state) =>
      state.governorates?.get_governorate
  );
  const regions = 
     address.regions?.data?.Regions || []
  
  useEffect(() => {
    dispatch(getRegions());
  }, [dispatch]);


  const handleRegionChange = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };
 
  const regionOptions = regions.map((region) => ({
    label: region.name,
    value: region.id,
  }));

  // return (
  //   <>
  //       <CFormSelect
  //         options={regionOptions}
  //         name="region_id"
  //         onChange={handleRegionChange}
  //         required
  //       />
      
    
  //   </>
  // );
  return (
    <CFormSelect name="region_id" onChange={handleRegionChange} required={!id}>
      <option value="" >
        اختر ما يناسبك
      </option>
      {regions.map((region) => (
        <option key={region.id} value={region.id}>
          {region.name}
        </option>
      ))}
    </CFormSelect>
  );
};

export default Select_region;
