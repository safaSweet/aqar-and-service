import { CContainer, CNavLink, CNavbar, CNavbarBrand } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import Notification from "../../modules/notifications/pages/Notification";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <CNavbar
        expand="lg"
        className=" bg-white"
        style={{
          width: "102%",
          position: "fixed",
          zIndex: 1000,
          top: 0,
        }}
      >
        <CContainer fluid>
          <CNavbarBrand>
            <img
              src={require("../../assets/Logo.png")}
              alt="Logo"
              width="15%"
            />
          </CNavbarBrand>
          <CNavLink>
            {/* <CIcon
              style={{ marginLeft: "-650%" }}
              onClick={() => navigate("/notifications")}
              icon={icon.cilBell}
              size="xl"
            /> */}
            <Notification/>
          </CNavLink>
        </CContainer>
      </CNavbar>
    </>
  );
}
