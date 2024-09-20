
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_obration_request, get_properties_request } from "../Store";
import {
  CContainer,
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Images from "../../../../components/basics/Images";
import {
  Get_config,
  createOptions,
} from "../../../properties_specifications/Get_config";
import Select_change_property from "../../../../components/selects_input/Select_change_property";

function Request_obration() {
  const { publicationType, status_request } = Get_config();
  // status_request
  const dispatch = useDispatch();

  const [params, setParams] = useState({
    publication_id: "",
    status_id: "",
    // page: 1,
  });

  const data = useSelector(
    (state) => state.order_category_service.request_properties.data_obration?.data?.data//||[]
  );
console.log('rrrrrrrrrrrrrrrrrrrrrrrr',data)
  const { columns_obration, loading } = useSelector(
    (state) => state.order_category_service.request_properties
  );

  useEffect(() => {
    dispatch(get_obration_request(params));
  }, [params, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParams((prevParams) => ({
      ...prevParams,
      [name]: value,
      // page: 1,
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
                columns={columns_obration}
                items={data.map((item) => ({
                  ...item,
                  // status:item.status.type,
                  // type_publication:item.type_publication.type,
                  // first_name:item.user.first_name,
                  // father_name:item.user.father_name,
                  // last_name:item.user.last_name,
                  // phone:item.user.phone,
                  email:item.user.email,
                  birth_date:item.user.birth_date,
                  // price:item.operation.price,
                  // area:item.operation.area,
                 status: item.status?.type || " ",
                  type_publication: item.type_publication?.type || " ",
                  first_name: item.user?.first_name || " ",
                  father_name: item.user?.father_name || " ",
                  last_name: item.user?.last_name || " ",
                  price: item.operation?.price || " ",
                  area: item.operation?.area || " ",
                  action: (
                    <div className="d-flex justify-content-around">
                      <Select_change_property
                        id={item.id}
                        statuses={createOptions(status_request)}
                        params={params}
                        type='obration'
                      />
                      <Images photos={item.property_images} />
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

export default Request_obration;
