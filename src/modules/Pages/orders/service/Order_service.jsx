import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  access_orders_category,
  delete_orders_category,
  get_orders_category,
  // setVisible,
} from "../Store";
import { CContainer, CTable, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
// import Reply_unaccess from "../../../../components/order/Reply_unaccess";
import ModalAdd from "../../../../components/basics/Modal_add";
import Modal from "../../../../components/basics/Modal";

function Order_service() {
  const data = useSelector(
    (state) => state.order_category_service.order_category.data.data?.Requests
  );
  const { columns, loading } = useSelector(
    (state) => state.order_category_service.order_category
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_orders_category());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <CContainer className="text-center fs-4 fw-bold">
          يتم التحميل ...
        </CContainer>
      ) : (
        <>
          {data ? (
            <>
              <CTable
                className="text-center"
                columns={columns}
                items={data.map((item, index) => ({
                  ...item,
                  phone:item.user.phone ||'',
                  full_name:`${item.user.first_name} ${item.user.father_name} ${item.user.last_name}`||'',
                  email:item.user.email||'',
                  birth_date:item.user.birth_date||'',
                  description: (
                    <Modal
                      body={item.description}
                      title="عرض الوصف"
                      icons={icon.cilBook}
                    />
                  ),
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
                          dispatch(
                            delete_orders_category({ id: item.id })
                          ).then(() => {
                            dispatch(get_orders_category());
                          })
                        }
                      /></CTooltip>
                      <CTooltip
                        content="قبول الطلب"
                        placement="bottom"
                      >
                      <CIcon
                        icon={icon.cilCheckCircle}
                        size="xl"
                        className="text-success"
                        onClick={() =>
                          dispatch(
                            access_orders_category({ id: item.id })
                          ).then(() => {
                            dispatch(get_orders_category());
                          })
                        }
                      /></CTooltip>
                      {/* <CIcon
                        icon={icon.cilXCircle}
                        size="xl"
                        className="text-danger"
                        onClick={() => dispatch(setVisible(true))}
                      />
                      <Reply_unaccess id={item.id} /> */}

                      <ModalAdd
                        id={item.id}
                        icons={icon.cilXCircle}
                        type="category_service"
                        title="الرد بالسبب"
                      />
                    </div>
                  ),
                }))}
              />
            </>
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

export default Order_service;
