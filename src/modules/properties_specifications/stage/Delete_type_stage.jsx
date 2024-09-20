
import { useEffect, useState } from "react";
import {
  CForm,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTypestage } from "./Store";
import { handle_Set_CreateUpdate, handle_Set_Visible } from "../Store";
import Button from "../../../components/basics/Button";
import Select_type_pledge from "../../../components/selects_input/Select_type_pledg";
import Select_type_stage from "../../../components/selects_input/Select_tpe_stage";

function Delete_type_stage() {
    const visible = useSelector((state) => state.Properties.visible);
    const dispatch = useDispatch();
    const { msg } = useSelector(
      (state) => state.stage.get_stages
    );
  console.log('msg',msg)
   
    const [selectedPledge, setSelectedPledge] = useState("");  
    const [selectedstage, setSelectedstage] = useState("");  
  
    const handleSetVisible = (isVisible) => {
      dispatch(handle_Set_Visible(isVisible));
    };
  
    const handleSetCreateUpdate = (isVisible) => {
      dispatch(handle_Set_CreateUpdate(isVisible));
    };
 
    const handlePledgeChange = (value) => {
      setSelectedPledge(value);
    };
    const handlestageChange = (value) => {
      setSelectedstage(value);
    };
  
    function HandlerSubmit(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append('type_id', selectedPledge); 
      formData.append('stage_id', selectedstage);
      dispatch(deleteTypestage(formData));
    }
  
  
    return (
      <CModal
        visible={visible}
        onClose={() => {
          handleSetCreateUpdate(false);
          handleSetVisible(false);
        }}
      >
        <CModalHeader
          onClose={() => {
            handleSetCreateUpdate(false);
            handleSetVisible(false);
          }}
        >
          <CModalTitle>اضافة مرحلة لنوع</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm onSubmit={HandlerSubmit}>
            
            <Select_type_pledge onPledgeChange={handlePledgeChange} />
            <Select_type_stage onstageChange={handlestageChange} />

            <Button type="submit" load="" name="حفظ" />
          </CForm>
        </CModalBody>
      </CModal>
    );
  }
  
  export default Delete_type_stage;
  