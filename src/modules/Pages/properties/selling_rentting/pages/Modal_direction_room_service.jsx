import { CCol, CModal, CModalBody, CModalHeader, CRow } from "@coreui/react";

import { useDispatch, useSelector } from "react-redux";
import { handle_Set_Visible } from "../../modules/Pages/application_services/service_providers/Store";
import { handle_Set_Visible_property } from "../../modules/Pages/properties/selling_rentting/Store";
function Modal({ obj, type }) {
  const dispatch = useDispatch();

  const visible_property = useSelector(
    (state) => state.properties.get_properties.visible
  );

  console.log("img: ", obj, "len ", obj.length);
  return (
    <>
      <CModal
        visible={visible_property}
        onClose={() => {
          dispatch(handle_Set_Visible_property(false));
        }}
        // style={{}}
      >
        <CModalHeader
          onClose={() => {
            dispatch(handle_Set_Visible_property(false));
          }}
        ></CModalHeader>
        <CModalBody>
          <CRow>
            {obj && obj.length > 0 ? (
              obj.map((obj, index) => (
                <>
                  <CCol xs="6">
                    <img
                      key={index}
                      src={obj.type}
                      alt="...."
                      width="60%"
                      height="150px"
                    />
                  </CCol>
                </>
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

export default Modal;
