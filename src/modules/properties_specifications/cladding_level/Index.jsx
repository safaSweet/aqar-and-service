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
import { deleteCladding_level, getCladding_level} from "./Store";
import { handle_Set_Visible, handle_Set_Active, handle_Set_CreateUpdate } from "../Store";
import { setStoreData } from "./Store";
import Create_Update from "./Create_Update";

function Index() {
  const activeTab = useSelector((state) => state.Properties.activeTab);
  const visible = useSelector((state) => state.Properties.visible);
  const data = useSelector(
    (state) => state.cladding.get_cladding_levels.data.data?.CladdingLevel//["Property\\CladdingLevel"]
  );
 console.log('dataOwner',data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCladding_level());
  }, [dispatch]);

  const handleSetVisible = (isVisible) => {
    dispatch(handle_Set_Visible(isVisible));
  };
  const handleSetActive = (activeTab) => {
    dispatch(handle_Set_Active(activeTab));
  };
  const handleSetId = (id, name,description) => {
    dispatch(setStoreData({ id: id, name: name,description:description }));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };
  const show = () => {
    handleSetCreateUpdate(false);
    handleSetVisible(false);
    activeTab === "create_cladding" && <Create_Update/>;
  };
  return (
    <>
      <CModal visible={visible} onClose={() => handleSetVisible(false)}>
        <CModalHeader onClose={() => handleSetVisible(false)}>
          <CModalTitle> تفاصيل مستويات الاكساء </CModalTitle>
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
                        handleSetActive("create_cladding");
                        handleSetId(data.id, data.name,data.description);
                      }}
                    >
                      edit
                    </CBadge>
                    <CBadge
                      color="danger"
                      onClick={() => {
                        dispatch(deleteCladding_level(data.id)).then(() => {
                          dispatch(getCladding_level());
                        });
                      }}
                    >
                      delete
                    </CBadge>
                  </div>
                  <div>
                  <span className=" fs-5"> {data.name} </span>
                  <p className=" text-black-50 fs-6 text-end">{data.description}</p>
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
