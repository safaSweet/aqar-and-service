import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  handle_Set_CreateUpdate,
  setActiveTab,
  setCreateUpdate,
  setVisible,
} from "../../modules/properties_specifications/Store";
import IndexRoom from "../../modules/properties_specifications/room_type/Index";
import CreateUpdateRoom from "../../modules/properties_specifications/room_type/Create_Update";
import IndexDirection from "../../modules/properties_specifications/direction/Index";
import CreateUpdateDirection from "../../modules/properties_specifications/direction/Create_Update";
import IndexPublication from "../../modules/properties_specifications/publication_type/Index";
import CreateUpdatePublication from "../../modules/properties_specifications/publication_type/Create_Update";
import IndexOwnership from "../../modules/properties_specifications/owner_type/Index";
import CreateUpdateOwnership from "../../modules/properties_specifications/owner_type/Create_Update";
import IndexCladding from "../../modules/properties_specifications/cladding_level/Index";
import CreateUpdateCladding from "../../modules/properties_specifications/cladding_level/Create_Update";
import IndexCategory from "../../modules/properties_specifications/category/Index";
import CreateUpdateCategory from "../../modules/properties_specifications/category/Create_Update";
import IndexService_virture from "../../modules/properties_specifications/service&virtues/Index";
import CreateUpdateService_virture from "../../modules/properties_specifications/service&virtues/Create_Update";
import IndexStatus from "../../modules/properties_specifications/status/Index";
import CreateUpdateStatus from "../../modules/properties_specifications/status/Create_Update";
import IndexPledge from "../../modules/properties_specifications/pledge/Index";
import CreateUpdatePledge from "../../modules/properties_specifications/pledge/Create_Update";
import IndexStage from "../../modules/properties_specifications/stage/Index";
import CreateUpdateStage from "../../modules/properties_specifications/stage/Create_Update";
import Create_type_stage from "../../modules/properties_specifications/stage/Create_type_stage";
import Delete_type_stage from "../../modules/properties_specifications/stage/Delete_type_stage";
import IndexRoles from "../../modules/properties_specifications/roles/Index";
import CreateRoles from "../../modules/properties_specifications/roles/Role2user";
import CreatePermission from "../../modules/properties_specifications/roles/Permission2role";

function Properties_table() {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.Properties.activeTab);
  const handleSetActiveTab = (tab) => {
    console.log("to active", tab);
    dispatch(setActiveTab(tab));
  };

  const handleSetVisible = (isVisible) => {
    console.log("to vis", isVisible);
    dispatch(setVisible(isVisible));
  };
  const handleSetCreateUpdate = (isVisible) => {
    dispatch(handle_Set_CreateUpdate(isVisible));
  };

  return (
    <>
      <CTable className=" text-center">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">المواصفات</CTableHeaderCell>
            <CTableHeaderCell scope="col">التفاصيل</CTableHeaderCell>
            <CTableHeaderCell scope="col">إنشاء</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>الغرف</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetVisible(true);
                  handleSetActiveTab("show_room");
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_room");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">2</CTableHeaderCell>
            <CTableDataCell>الاتجاهات</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_direction");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_direction");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">3</CTableHeaderCell>
            <CTableDataCell>مستوياات الاكساء</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_cladding");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_cladding");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">4</CTableHeaderCell>
            <CTableDataCell>نوع المنشور</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_publication");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_publication");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">5</CTableHeaderCell>
            <CTableDataCell>نوع الملكية</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_ownership");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_ownership");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>

          <CTableRow>
            <CTableHeaderCell scope="row">6</CTableHeaderCell>
            <CTableDataCell> الخدمات</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_service_virture");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_service_virture");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">7</CTableHeaderCell>
            <CTableDataCell> فئة العقارات</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_category");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_category");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">8</CTableHeaderCell>
            <CTableDataCell> الحالة</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_status");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_status");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">8</CTableHeaderCell>
            <CTableDataCell> انواع الاكساء</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_pledge");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_pledge");
                }}
              >
                إنشاء
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">9</CTableHeaderCell>
            <CTableDataCell>الأدوار</CTableDataCell>
            <CTableDataCell>
              <CButton
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_roles");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("role2user");
                }}
              >
                اضافة دور لمستخدم
              </CButton>
              <CButton
                color="warning"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("permission2role");
                }}
              >
                اضافة صلاحيات لدور
              </CButton>
            </CTableDataCell>
          </CTableRow>
          <CTableRow>
            <CTableHeaderCell scope="row">9</CTableHeaderCell>
            <CTableDataCell>  مراحل الاكساء</CTableDataCell>
            <CTableDataCell>
              <CButton
              className=" ms-3"
                color="info"
                onClick={() => {
                  handleSetActiveTab("show_stage");
                  handleSetVisible(true);
                }}
              >
                التفاصيل
              </CButton>
              <CButton
                color="danger"
               
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("delete_stage_type");
                }}
              >
                حذف نوع 
              </CButton>
            </CTableDataCell>
            <CTableDataCell>
              <CButton
                color="warning"
                 className=" ms-3"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_stage");
                }}
              >
                إنشاء
              </CButton>
              <CButton
              
                color="secondary"
                onClick={() => {
                  handleSetCreateUpdate(true);
                  handleSetVisible(true);
                  handleSetActiveTab("create_stage_type");
                }}
              >
                اضافة نوع 
              </CButton>
            </CTableDataCell>
           
          </CTableRow>
        </CTableBody>
      </CTable>

      {activeTab === "show_room" && <IndexRoom />}
      {activeTab === "create_room" && <CreateUpdateRoom />}
      {activeTab === "show_direction" && <IndexDirection />}
      {activeTab === "create_direction" && <CreateUpdateDirection />}
      {activeTab === "show_publication" && <IndexPublication />}
      {/* {activeTab === "show_puplication" && <IndexPublication />}ليش هنا لم يتم تنفيذه وفوق تم تنفيذه  */}
      {activeTab === "create_publication" && <CreateUpdatePublication />}
      {activeTab === "show_ownership" && <IndexOwnership />}
      {activeTab === "create_ownership" && <CreateUpdateOwnership />}
      {activeTab === "show_cladding" && <IndexCladding />}
      {activeTab === "create_cladding" && <CreateUpdateCladding />}
      {activeTab === "show_category" && <IndexCategory />}
      {activeTab === "create_category" && <CreateUpdateCategory />}
      {activeTab === "show_service_virture" && <IndexService_virture />}
      {activeTab === "create_service_virture" && (
        <CreateUpdateService_virture />
      )}
      {activeTab === "show_status" && <IndexStatus />}
      {activeTab === "create_status" && <CreateUpdateStatus />}
      {activeTab === "show_pledge" && <IndexPledge />}
      {activeTab === "create_pledge" && <CreateUpdatePledge />}
      {activeTab === "show_stage" && <IndexStage />}
      {activeTab === "create_stage" && <CreateUpdateStage />}
      {activeTab === "create_stage_type" && <Create_type_stage />}
      {activeTab === "delete_stage_type" && <Delete_type_stage/>}
      {activeTab === "show_roles" && <IndexRoles/>}
      {activeTab === "role2user" && <CreateRoles/>}
      {activeTab === "permission2role" && <CreatePermission/>}
    </>
  );
}

export default Properties_table;
