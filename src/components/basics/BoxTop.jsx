import { CBadge, CCard, CCardBody, CCardHeader} from "@coreui/react";
import React from "react";
import CIcon from "@coreui/icons-react";
import { useNavigate } from "react-router-dom";
function BoxTop({ name, add, number, icons, color,link,addLink }) {
  const navigate=useNavigate();
  return (
    <>
      <CCard>
        <CCardHeader style={{ backgroundColor: color }}></CCardHeader>

        <CCardBody className=" p-1 fs-6">
          <div
            className=" d-flex justify-content-between"
            style={{ fontSize: "12px" }}
          >
            <CIcon icon={icons} size="xl" />
            <div onClick={()=>navigate(link,{replace:true})}>{name}</div>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <CBadge style={{ fontSize: "8px", color: "gray" }} onClick={()=>navigate(addLink,{replace:true})}>{add}</CBadge>
            <div>{number}</div>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
}

export default BoxTop;
