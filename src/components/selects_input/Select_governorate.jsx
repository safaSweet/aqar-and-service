import React, { useEffect } from "react";
import { CFormSelect } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { getGovernorate } from "../../modules/address/Store";

import {
  setDataForUpdate,
  setData,
} from "../../modules/Pages/application_services/service_providers/Store";
function Select_governorate({ value }) {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) =>
      state.governorates.get_governorate.governorates.data?.Governorates || []
  );
  useEffect(() => {
    dispatch(getGovernorate());
  }, []);
  const handler_change = (e) => {
    // value === "create"
      // ? 
      dispatch(setData({ [e.target.name]: e.target.value }))
      // : dispatch(setDataForUpdate({ [e.target.name]: e.target.value }));
  };
  const options = [
    { label: "المحافظات", value: "" },
    ...data?.map((data, index) => ({
      label: data.name,
      value: data.id,
    })),
  ];
  return (
    <>
    {value==='update'?
    
      <CFormSelect
        options={options}
        name="governorate_id"
        onChange={handler_change}
        // required
        // value={Service_Provider.address.governorates.name}
      />:<CFormSelect
        options={options}
        name="governorate_id"
        onChange={handler_change}
        required
        // value={Service_Provider.address.governorates.name}
      />
    }
    </>
  );
}

export default Select_governorate;
