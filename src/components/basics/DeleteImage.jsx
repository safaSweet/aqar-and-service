import {
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CRow,
  CTooltip,
} from "@coreui/react";
import { useState } from "react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import {
  delete_photo,
  delete_photo_tower,
  delete_photo_tower_property,
  get_project,
  get_property,
  get_tower,
} from "../../modules/Pages/projects/Store";
import { useDispatch } from "react-redux";
import {
  deletePhoto2Provider,
  getProvider,
} from "../../modules/Pages/application_services/service_providers/Store";
import { useParams } from "react-router-dom";
function DeleteImages({ photos, id, type, id0, numberFloor }) {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = async (index) => {
    if (type === "project") {
      await dispatch(delete_photo({ project_id: id, photo_id: index }));
      dispatch(get_project());
    } else if (type === "tower") {
      await dispatch(delete_photo_tower({ tower_id: id, photo_id: index }));
      dispatch(get_tower(id0));

      get_tower(id0);
    } else if (type === "service_business") {
      // const {id}=useParams()
      await dispatch(deletePhoto2Provider({ id: id, photo_id: index }));
      dispatch(getProvider({ id: id0 }));

      // get_tower(id0);
    } else if (type === "service_Identyfie_paper") {
      // const {id}=useParams()
      await dispatch(deletePhoto2Provider({ id: id, photo_id: index }));
      dispatch(getProvider({ id: id0 }));

      // get_tower(id0);
    } else if (type === "floor_property") {
      await dispatch(
        delete_photo_tower_property({ property_id: id, photo_id: index })
      );
      dispatch(get_property({ tower_id: id0, floor_number: numberFloor }));
    } else {
      console.log("nullllllllll");
    }
  };

  return (
    <>
      <CTooltip content={type==='service_Identyfie_paper'?"حذف صور شخصية":type==='service_business'?'حذف صور اعمال':'حذف صور'} placement="bottom">
        <CIcon
          icon={icon.cilImageBroken}
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
                  <CIcon
                    icon={icon.cilTrash}
                    size="lg"
                    onClick={() => handleDelete(photo.id)}
                  />
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

export default DeleteImages;
