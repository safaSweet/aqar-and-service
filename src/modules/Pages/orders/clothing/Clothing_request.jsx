import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_clothes_request } from "../Store";
import * as icon from "@coreui/icons";
import {
  CContainer,
  CTable,
  CFormSelect,
} from "@coreui/react";
import Images from "../../../../components/basics/Images";
import {
  Get_config,
  createOptions,
} from "../../../properties_specifications/Get_config";
import Select_change_property from "../../../../components/selects_input/Select_change_property";
import Modal from "../../../../components/basics/Modal";

function Clothing_request() {
  const { status_request } = Get_config();
  // status_request
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    // publication_id: "",
    status_id: "",
    // page: 1,
  });

  const data = useSelector(
    (state) => state.order_category_service.request_clothes.data.data?.data
  );
  console.log("first", data);
  const { columns, loading } = useSelector(
    (state) => state.order_category_service.request_clothes
  );

  useEffect(() => {
    dispatch(get_clothes_request(params));
  }, [params, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
      page: 1,
    }));
  };
  return (
    <>
      {loading ? (
        <CContainer className="text-center fs-4 fw-bold">
          يتم التحميل ...
        </CContainer>
      ) : (
        <>
          <div className="d-flex mb-5">
            <CFormSelect
              className="w-25"
              name="status_id"
              options={createOptions(status_request)}
              width="25%"
              onChange={handleChange}
            />
          </div>
          {data ? (
            <>
              <CTable
                className="text-center overflow-scroll"
                columns={columns}
                items={data.map((item) => ({
                  ...item,
                  // address: item.address.map((addr) => addr.name).join("-"),
                  address: <Modal
                      body={item.address
                    .map((addr) =>
                      addr && addr.value && addr.value.name
                        ? addr.value.name
                        : "Unknown"
                    )
                    .join("-")}
                      title="عرض الوصف"
                      icons={icon.cilHome}
                    />,

                  categoryType: item.categoryType.type,
                  pledge_type: item.pledge_type.name,
                  type_owner: item.type_owner.type,
                  full_name:`${item.user.first_name} ${item.user.father_name} ${item.user.last_name}`,
                  email: item.user.email,
                  phone: item.user.phone,
                  action: (
                    <div className="d-flex justify-content-around">
                      <Select_change_property
                        id={item.id}
                        statuses={createOptions(status_request)}
                        params={params}
                        type='request_clothes'
                      />
                      <Images photos={item.photos} />
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

export default Clothing_request;
