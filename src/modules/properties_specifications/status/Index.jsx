import { useEffect, useState } from "react";
import {
  CBadge,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStatus, getStatus} from "./Store";
import { handle_Set_Visible, handle_Set_Active, handle_Set_CreateUpdate } from "../Store";
import { setStoreData } from "./Store";
import Create_Update from "./Create_Update";

function Index() {
  const activeTab = useSelector((state) => state.Properties.activeTab);
  const visible = useSelector((state) => state.Properties.visible);
  const data = useSelector(
    (state) => state.status.get_status.data.data?.Status
  );
 console.log('dataOwner',data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus());
  }, [dispatch]);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetActive = (activeTab) => {
    dispatch(handle_Set_Active(activeTab));
  };
  const handleSetId = (id, type) => {
    dispatch(setStoreData({ id: id, type: type }));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  const show = () => {
    handleSetCreateUpdate(false);
    handleSetVisible(false);
    activeTab === "create_status" && <Create_Update/>;
  };
  return (
    <>
      <CModal visible={visible} onClose={() => handleSetVisible(false)}>
        <CModalHeader onClose={() => handleSetVisible(false)}>
          <CModalTitle> تفاصيل أنواع الحالات</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {data &&
            data.map((data, index) => (
              <CListGroup key={index}>
                <CListGroupItem className=" d-flex justify-content-between">
                  <div>
                    <CBadge
                      color="success"
                      onClick={() => {
                        handleSetActive("create_status");
                        handleSetId(data.id, data.type);
                      }}
                    >
                      edit
                    </CBadge>
                    <CBadge
                      color="danger"
                      onClick={() => {
                        dispatch(deleteStatus(data.id)).then(() => {
                          dispatch(getStatus());
                        });
                      }}
                    >
                      delete
                    </CBadge>
                  </div>
                  <div>
                  <span className=" fs-5"> {data.type} </span>
                  </div>
                </CListGroupItem>
              </CListGroup>
            ))}
        </CModalBody>
      </CModal>
      {show}
    </>
  );
}

export default Index;
