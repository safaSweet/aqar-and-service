import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_properties_request } from "../Store";
import {
  CContainer,
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CToast,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Images from "../../../../components/basics/Images";
import {
  Get_config,
  createOptions,
} from "../../../properties_specifications/Get_config";
import Select_change_property from "../../../../components/selects_input/Select_change_property";
import Modal from "../../../../components/basics/Modal";
import ShowMap from "../../../../components/basics/Show_map";

function Request_properties() {
  const { publicationType, status_request } = Get_config();
  // status_request
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    publication_id: "",
    status_id: "",
    page: 1,
  });

  const data = useSelector(
    (state) => state.order_category_service.request_properties.data.data?.data
  );
  console.log("first", data);
  const { columns, loading } = useSelector(
    (state) => state.order_category_service.request_properties
  );

  const page = useSelector(
    (state) =>
      state.order_category_service.request_properties.pagination.current_page
  );
  const last_page = useSelector(
    (state) =>
      state.order_category_service.request_properties.pagination.last_page
  );
  // const { total } = useSelector(
  //   (state) => state.order_category_service.request_properties.pagination
  // );

  useEffect(() => {
    dispatch(get_properties_request(params));
  }, [params, dispatch]);

  const handlePageChangePlus = () => {
    setParams((prevParams) => ({
      ...prevParams,
      page: page + 1,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
      page: 1,
    }));
  };

  const handlePageChangeMinus = () => {
    setParams((prevParams) => ({
      ...prevParams,
      page: page - 1,
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
              name="publication_id"
              options={createOptions(publicationType)}
              width="25%"
              onChange={handleChange}
            />
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
                  full_name:`${item.user.first_name } ${item.user.father_name} ${item.user.last_name}`,
                  birth_date:item.user.birth_date,
                  phone:item.user.phone,
                  email:item.user.email,
                  address: (
                    <Modal
                      body={item.address
                        .map((addr) =>
                          addr && addr.value && addr.value.name
                            ? addr.value.name
                            : "Unknown"
                        )
                        .join("-")}
                      title="عرض العنوان"
                      icons={icon.cilHome}
                    />
                  ),
                  category_real_estate_type:
                    item.category_real_estate_type.type,
                  cladding_level: item.cladding_level.name,
                  direction: (
                    <Modal
                      body={item.direction
                        .map((n, i) => `${n.type}`)
                        .join(" , ")}
                      title="عرض الاتجاهات"
                      icons={icon.cilArrowThickRight}
                    />
                  ),
                  room: (
                    <Modal
                      body={item.room
                        .map((rm) => `${rm.type}(${rm.number_of_room})`)
                        .join(",")}
                      title="عرض الغرف"
                      icons={icon.cilDoor}
                    />
                  ),
                  service_and_virtues: (
                    <Modal
                      body={item.service_and_virtues
                        .map((sv) => sv.type)
                        .join(",")}
                      title="عرض الميزات"
                      icons={icon.cilStar}
                    />
                  ),
                  // phone:item.user.phone ,
                  // full_name:item.user.full_name,
                  // email:item.user.email,
                  // birth_date:item.user.birth_date,
                  type_owner: item.type_owner.type,
                  type_publication: item.type_publication.type,
                  description: (
                    <Modal
                      body={item.description}
                      title="عرض الوصف"
                      icons={icon.cilBook}
                    />
                  ),
                  position: (
                    <ShowMap
                      id={item.id}
                      lat={JSON.parse(item.position).latitude}
                      long={JSON.parse(item.position).longitude}
                    />
                  ),
                  action: (
                    <div className="d-flex justify-content-around">
                      <Select_change_property
                        id={item.id}
                        statuses={createOptions(status_request)}
                        params={params}
                        type="request"
                      />
                      <Images photos={item.property_images} />
                    </div>
                  ),
                }))}
              />
              <CPagination size="sm" aria-label="Page navigation example">
                <CPaginationItem
                  onClick={handlePageChangeMinus}
                  disabled={page === 1}
                >
                  Previous
                </CPaginationItem>
                <CPaginationItem>
                  Page {page}
                  {/* of {total} */}
                </CPaginationItem>
                <CPaginationItem
                  onClick={handlePageChangePlus}
                  disabled={page === last_page}
                >
                  Next
                </CPaginationItem>
              </CPagination>
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

export default Request_properties;
