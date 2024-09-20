import Button from "../basics/Button";
import { CCard, CContainer, CCardText, CButton } from "@coreui/react";
import { useNavigate } from "react-router-dom";

function PageTable({ add, title, table, link, search, link_search }) {
  const style = {
    direction: "rtl",
    padding: "30px",
    margin: "2%",
  };
  const Navigate = useNavigate();

  return (
    <>
      <CCard style={style}>
        <CContainer className=" overflow-scroll">
          <div className="selling">
            <CCardText className=" fs-4">{title}</CCardText>
            <div className=" d-flex">
            <div className=" ms-2" onClick={() => Navigate(link, { replace: true })}>
              {add !== "" ? (
              <Button name={add} />) : ( "" )}
            </div>
            <div onClick={() => Navigate(link_search, { replace: true })}>
           { search !== "" ? (
              <Button name={search} />) : ( "" )}
            </div>
            </div>
          </div>
          {table}
        </CContainer>
      </CCard>
    </>
  );
}
export default PageTable;
