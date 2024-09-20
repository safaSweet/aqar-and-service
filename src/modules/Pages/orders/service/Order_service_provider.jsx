import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  access_orders_provider,
  delete_orders_provider,
  get_orders_provider,
} from "../Store";
import { CContainer, CTable, CFormSelect, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import ModalAdd from "../../../../components/basics/Modal_add";
import { useNavigate } from "react-router-dom";

function Order_service_provider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_orders_provider());
  }, [dispatch]);
  const [filterType, setFilterType] = useState("add");

  const {
    columns_provider_add,
    // columns_provider_edit,
    loading,
    add_data,
    edit_data,
  } = useSelector((state) => state.order_category_service.order_category);

  const filteredData = filterType === "add" ? add_data : edit_data;
  return (
    <>
      {loading ? (
        <CContainer className="text-center fs-4 fw-bold">
          يتم التحميل ...
        </CContainer>
      ) : (
        <>
          <CFormSelect
            className="mb-3 w-25 text-end"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            options={[
              { label: "عرض الطلبات من نوع الاضافة", value: "add" },
              { label: "عرض الطلبات من نوع التعديل", value: "edit" },
            ]}
          />

          {filteredData && filteredData.length > 0 ? (
            <CTable
              className="text-center"
              columns={columns_provider_add}
              items={filteredData.map((item, index) => ({
                ...item,
                action: (
                  <div className="d-flex justify-content-around">
                  <CTooltip
                        content="حذف"
                        placement="bottom"
                      >
                    <CIcon
                      icon={icon.cilTrash}
                      size="xl"
                      onClick={() =>
                        dispatch(delete_orders_provider({ id: item.id })).then(
                          () => {
                            dispatch(get_orders_provider());
                          }
                        )
                      }
                    /></CTooltip>
                    <CTooltip
                        content="قبول"
                        placement="bottom"
                      >
                    <CIcon
                      icon={icon.cilCheckCircle}
                      size="xl"
                      className="text-success"
                      onClick={() =>
                        dispatch(access_orders_provider({ id: item.id })).then(
                          () => {
                            dispatch(get_orders_provider());
                          }
                        )
                      }
                    /></CTooltip>
                    <CTooltip
                        content="التفاصيل"
                        placement="bottom"
                      >
                    <CIcon
                      icon={icon.cilInfo}
                      size="xl"
                      className="text-success"
                      onClick={() =>
                       filterType==='add'? navigate(`/service-providers-add-info/${item.id}`):
                       navigate(`/service-providers-edit-info/${item.id}`)
                      }
                    /></CTooltip>
                    {/* <CTooltip
                        content="الرفض"
                        placement="bottom"
                      > */}
                    <ModalAdd
                      id={item.id}
                      icons={icon.cilXCircle}
                      type="provider_service"
                      title="الرد بالسبب"
                    />

                    {/* </CTooltip> */}
                  </div>
                ),
              }))}
            />
          ) : (
            <CContainer className="text-center fs-4 fw-bold">
              لا يوجد طلبات
            </CContainer>
          )}
        </>
      )}
    </>
  );
}

export default Order_service_provider;
