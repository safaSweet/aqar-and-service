import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import { getpledge } from "../../modules/properties_specifications/pledge/Store";
import { setData } from "../../modules/properties_specifications/stage/Store";

const Select_type_pledge = ({ type, onPledgeChange }) => {
    const dispatch = useDispatch();
  
    const pledge = useSelector(
      (state) => state.pledge.get_pledges.data?.data?.data || []
    );
  
    useEffect(() => {
      dispatch(getpledge());
    }, [dispatch]);
  
    const handlepledgeChange = (e) => {
      onPledgeChange(e.target.value); // تمرير القيمة المحددة إلى المكون الأب
    };
  
    const pledgeOptions = pledge.map((pledge) => ({
      label: pledge.name,
      value: pledge.id,
    }));
  
    return (
      <CFormSelect
        options={pledgeOptions}
        name="type_id"
        onChange={handlepledgeChange}
        required
      />
    );
  };
  
  export default Select_type_pledge;
  