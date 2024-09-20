import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import { getstage } from "../../modules/properties_specifications/stage/Store";


const Select_type_stage = ({ type, onstageChange }) => {
    const dispatch = useDispatch();
  
    const stage = useSelector(
      (state) => state.stage.get_stages.data?.data?.PledgeStages|| []
    );
  
    useEffect(() => {
      dispatch(getstage());
    }, [dispatch]);
  
    const handlestageChange = (e) => {
      onstageChange(e.target.value); 
    };
  console.log('stageeeeeeee',stage)

    const stageOptions = stage.map((stage) => ({
      label: stage.name,
      value: stage.id,
    }));
  
    return (
      <CFormSelect
        options={stageOptions}
        name="type_id"
        onChange={handlestageChange}
        required
      />
    );
  };
  
  export default Select_type_stage;
  