import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_roles } from "../../permissions_roles/store";
import {
  handle_Set_Active,
  handle_Set_CreateUpdate,
  handle_Set_Visible,
} from "../Store";
import {
  CBadge,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";

function Index() {
  const activeTab = useSelector((state) => state.Properties.activeTab);
  const visible = useSelector((state) => state.Properties.visible);
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.role_users.getrole_users.data2role.roles || []
  );
  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  const handleSetActive = (activeTab) => {
    dispatch(handle_Set_Active(activeTab));
  };
  const handleSetId = (id, type) => {
    // dispatch(setStoreData({ id: id, type: type }));
  };

  const show = () => {
    handleSetCreateUpdate(false);
    handleSetVisible(false);
    // activeTab === "create_room" && <Create_Update/>;
  };
  useEffect(() => {
    dispatch(get_roles());
  }, [dispatch]);
  console.log("data roles", data);
  return (
    <>
      <CModal visible={visible} onClose={() => handleSetVisible(false)}>
        <CModalHeader onClose={() => handleSetVisible(false)}>
          <CModalTitle> تفاصيل أنواع الادوار</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {data &&
            data.map((data, index) => (
              <CListGroup key={index}>
                <CListGroupItem className=" d-flex justify-content-between">
                  <span className=" fs-5"> {data.name} </span>
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
