import {
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTooltip,
} from "@coreui/react";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
function Images({ photos }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <CTooltip content="الصور" placement="bottom">
        <CIcon
          icon={icon.cilImage}
          size="xl"
          onClick={() => setVisible(true)}
        />
      </CTooltip>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}></CModalHeader>
        <CModalBody>
          <CRow>
            {photos && photos.length > 0 ? (
              photos.map((photo, index) => (
                <CCol xs="6" key={index}>
                  <img src={photo.url} alt="...." width="80%" height="150px" />
                </CCol>
              ))
            ) : (
              <p>No photos available</p>
            )}
          </CRow>
        </CModalBody>
      </CModal>
    </>
  );
}

export default Images;
