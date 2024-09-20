import { useState } from "react";
import { CCol, CModal, CModalBody, CModalHeader, CModalTitle, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useDispatch } from "react-redux";
import { delete_rentalPeriod_tower_property, delete_room_tower_property } from "../../modules/Pages/projects/Store";

function Modal({ title, body, icons, delet, id, icons_del }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  function dele(params) {
    if (delet === 'delete_room') {
      dispatch(delete_room_tower_property({ property_id: id }));
    } else if (delet === 'delete_period') {
      dispatch(delete_rentalPeriod_tower_property({ property_id: id }));
    } else {
      console.log('first');
    }
  }

  return (
    <>
      <CIcon
        icon={icons}
        size="xl"
        onClick={() => setVisible(true)}
      />
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>
            {title}
            {delet && (
              <CIcon
                icon={icons_del}
                size="xl"
                onClick={() => {
                  dele();
                }}
              />
            )}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          {typeof body === 'object' ? (
            <CRow className="text-center d-flex justify-content-evenly">
              <CCol xs="5">
                {body.full_name && (
                  <>
                    <div><strong>الاسم:</strong> {body.full_name}</div>
                    <div><strong>تاريخ الميلاد:</strong> {body.birth_date}</div>
                  </>
                )}
              </CCol>
              <CCol xs="5">
                {body.email && (
                  <div> {body.email} <strong>:الايميل</strong> </div>
                )}
                {body.phone && (
                  <div><strong>الهاتف:</strong> {body.phone}</div>
                )}
              </CCol>
            </CRow>
          ) : (
            <p>{body}</p>
          )}
        </CModalBody>
      </CModal>
    </>
  );
}

export default Modal;
