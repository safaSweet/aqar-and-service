import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import { setDataForSearch, type_request } from "../../modules/Pages/orders/Store";
const Select_type_request = () => {
  const dispatch = useDispatch();

  const types = useSelector(
    (state) =>  state.order_category_service.search_request.dataSearch.types || []
  );
  useEffect(() => {
      dispatch(type_request());
    }, [dispatch]);
    console.log('data searrch' ,types)

  const handleRegionChange = (e) => {
      dispatch(setDataForSearch({ [e.target.name]: e.target.value }));
  };

  const typesOptions = types.map((region) => ({
    label: region.key,
    // label: region.account.full_name,
    value: region.value,
  }));

  return (
    <>
      <CFormSelect
        options={typesOptions}
        name="type"
        onChange={handleRegionChange}
        required
      />
    </>
  );
};

export default Select_type_request;
