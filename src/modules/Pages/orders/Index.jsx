import {
  CButton,
  CCard,
  CContainer,
} from "@coreui/react";
import OrderService from "../../../components/order/OrderService";
import { useNavigate } from "react-router-dom";

function Index() {
  const navigate=useNavigate()
  const style = {
    padding: "30px",
    margin: "2%",
  };
  return (
    <>
      <>
      <CButton style={{backgroundColor:'#82E118'}} onClick={()=>navigate('/add-search-request')}>بحث</CButton>
        <CCard style={style}>
          <CContainer>
            <OrderService/>
          </CContainer>
        </CCard>
      </>
    </>
  );
}

export default Index;