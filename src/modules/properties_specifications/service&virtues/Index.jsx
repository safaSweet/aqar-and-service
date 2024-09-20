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
import { deleteService_virture, getService_virture} from "./Store";
import { handle_Set_Visible, handle_Set_Active, handle_Set_CreateUpdate } from "../Store";
import { setStoreData } from "./Store";
import Create_Update from "./Create_Update";

function Index() {
  const activeTab = useSelector((state) => state.Properties.activeTab);
  const visible = useSelector((state) => state.Properties.visible);
  const data = useSelector(
    (state) => state.service_virture.get_service_virtures.data?.data?.ServiceAndVirtues
//    ["Property\\ServiceAndVirtues"]
  );
 console.log('dataServic',data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getService_virture());
  }, [dispatch]);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetActive = (activeTab) => {
    dispatch(handle_Set_Active(activeTab));
  };
  const handleSetId = (id, type) => {
    dispatch(setStoreData({ id: id, type: type}));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  const show = () => {
    handleSetCreateUpdate(false);
    handleSetVisible(false);
    activeTab === "create_service_virture" && <Create_Update/>;
  };
  return (
    <>
      <CModal visible={visible} onClose={() => handleSetVisible(false)}>
        <CModalHeader onClose={() => handleSetVisible(false)}>
          <CModalTitle> تفاصيل أنواع الخدمات</CModalTitle>
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
                        handleSetActive("create_service_virture");
                        handleSetId(data.id, data.type);
                      }}
                    >
                      edit
                    </CBadge>
                    <CBadge
                      color="danger"
                      onClick={() => {
                        dispatch(deleteService_virture(data.id)).then(() => {
                          dispatch(getService_virture());
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
