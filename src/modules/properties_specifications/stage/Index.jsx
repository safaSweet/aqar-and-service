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
import { deletestage, deleteTypestage, getstage } from "./Store";
import { handle_Set_Visible, handle_Set_Active, handle_Set_CreateUpdate } from "../Store";
import { setStoreData } from "./Store";
import Create_Update from "./Create_Update";

function Index() {
  const activeTab = useSelector((state) => state.Properties.activeTab);
  const visible = useSelector((state) => state.Properties.visible);
  const data = useSelector(
    (state) => state.stage.get_stages.data?.data?.PledgeStages
    //?.data
  );
 console.log('datastage',data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getstage());
  }, [dispatch]);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetActive = (activeTab) => {
    dispatch(handle_Set_Active(activeTab));
  };
  const handleSetId = (id, name,description) => {
    dispatch(setStoreData({ id: id, name: name, description:description }));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  const show = () => {
    handleSetCreateUpdate(false);
    handleSetVisible(false);
    activeTab === "create_stage" && <Create_Update/>;
  };
  return (
    <>
      <CModal visible={visible} onClose={() => handleSetVisible(false)}>
        <CModalHeader onClose={() => handleSetVisible(false)}>
          <CModalTitle> تفاصيل أنواع التعهد</CModalTitle>
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
                        handleSetActive("create_stage");
                        handleSetId(data.id, data.name,data.description);
                      }}
                    >
                      تعديل
                    </CBadge>
                    <CBadge
                      color="danger"
                      onClick={() => {
                        dispatch(deletestage(data.id)).then(() => {
                          dispatch(getstage());
                        });
                      }}
                    >
                      حذف
                    </CBadge>
                    {/* <CBadge
                      color="success"
                      onClick={() => {
                        handleSetActive("create_stage_type");
                        handleSetId(data.id, data.name,data.description);
                      }}
                    >
                      اضافة نوع
                    </CBadge>
                    <CBadge
                      color="danger"
                      onClick={() => {
                        handleSetActive("delete_stage_type");
                        handleSetId(data.id,data.description);
                      }}
                    >
                      حذف نوع
                    </CBadge> */}
                  </div>
                  <span className=" fs-5 text-end"> {data.name}<div>{data.description}</div> </span>
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
