import { CContainer, CTable, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategory } from "../Store";
import { useNavigate } from "react-router-dom";
function Service_table() {
  const navigate = useNavigate();
  const data = useSelector(
    (state) =>
      state.service_category.get_services_category.data?.data?.Categories
  );
  const { columns } = useSelector(
    (state) => state.service_category.get_services_category
  );
  const loading = useSelector(
    (state) => state.service_category.get_services_category.loading
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  if (loading)
    return (
      <CContainer className=" text-center fs-4 fw-bold">
        يتم التحميل ...
      </CContainer>
    );
  return (
    <>
      {data && data.length > 0 ? (
        <CTable
          className=" text-center"
          hover
          columns={columns}
          items={data.map((item, index) => ({
            ...item,
            action: (
              <div className=" d-flex justify-content-around">
                <CTooltip content="مقدمي الخدمات" placement="bottom">
                  <CIcon
                    icon={icon.cilPeople}
                    size="xl"
                    onClick={() => navigate(`/service-providers/${item.id}`)}
                  />
                </CTooltip>
                {/* <CIcon icon={icon.cilLockLocked} size="xl" /> */}
                {/* <CIcon icon={icon.cilPaperclip} size="xl" /> */}
                <CTooltip content="تعديل" placement="bottom">
                  <CIcon
                    icon={icon.cilPencil}
                    size="xl"
                    onClick={() =>
                      navigate(`/edit-services/${item.id}`, { replace: true })
                    }
                  />
                </CTooltip>
                <CTooltip content="حذف" placement="bottom">
                  <CIcon
                    icon={icon.cilTrash}
                    size="xl"
                    onClick={() =>
                      dispatch(deleteCategory({ id: item.id })).then(() => {
                        dispatch(getCategory());
                      })
                    }
                  />
                </CTooltip>
              </div>
            ),
          }))}
        />
      ) : (
        <CContainer className=" text-center fs-4 fw-bold">
          لا يوجد خدمات
        </CContainer>
      )}
    </>
  );
}

export default Service_table;
