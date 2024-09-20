import React, { useState } from "react";
import Select_type_request from "../../../../components/selects_input/Select_type_request";
import { useDispatch, useSelector } from "react-redux";
import { CPagination, CPaginationItem, CTable, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useNavigate } from "react-router-dom";
import {
  access_orders_provider,
  delete_orders_provider,
  get_orders_provider,
} from "../Store";
import ModalAdd from "../../../../components/basics/Modal_add";
import Modal from "../../../../components/basics/Modal";
import ShowMap from "../../../../components/basics/Show_map";
import Select_change_property from "../../../../components/selects_input/Select_change_property";
import Images from "../../../../components/basics/Images";
import {
  createOptions,
  Get_config,
} from "../../../properties_specifications/Get_config";
function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [params, setParams] = useState({
    publication_id: "",
    status_id: "",
    // page: 1,
  });
  const { publicationType, status_request } = Get_config();
  const { columns_propery, columns_provider, formData } = useSelector(
    (state) => state.order_category_service.search_request || []
  );
  const data = useSelector(
    (state) => state.order_category_service.search_request.data.requests || []
  );
  console.log("formData ::::", formData.type);
  console.log("Data ::::", data);
  return (
    <>
      <CIcon
        icon={icon.cilArrowCircleLeft}
        size="xl"
        onClick={() => navigate(-1)}
         className=" mb-5 "
      />
      {formData.type === "ASP" ? (
        <>
          <CTable
            className="text-center "
            columns={columns_provider}
            items={data.map((item, index) => ({
              ...item,
              action: (
                <div className="d-flex justify-content-around">
                  <CTooltip content="حذف" placement="bottom">
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
                    />
                  </CTooltip>
                  <CTooltip content="قبول" placement="bottom">
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
                    />
                  </CTooltip>
                  {/* <CTooltip
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
                    /></CTooltip> */}

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
        </>
      ) : (
        <>
        {data.length > 0 ? (
  <CTable
    className="text-center overflow-scroll"
    columns={columns_propery}
    items={data?.map((item) => ({
      ...item,
      phone:item.property.contact.identifier,
      area:item.property.area,
      price:item.property.price,
      address: (
        <Modal
          body={item.property.address
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
      category_real_estate_type: item.property.category_real_estate_type.type,
      cladding_level: item.property.cladding_level.name,
      direction: (
        <Modal
          body={item.property.direction.map((n) => `${n.type}`).join(" , ")}
          title="عرض الاتجاهات"
          icons={icon.cilArrowThickRight}
        />
      ),
      room: (
        <Modal
          body={item.property.room
            .map((rm) => `${rm.type}(${rm.number_of_room})`)
            .join(",")}
          title="عرض الغرف"
          icons={icon.cilDoor}
        />
      ),
      service_and_virtues: (
        <Modal
          body={item.property.service_and_virtues.map((sv) => sv.type).join(",")}
          title="عرض الميزات"
          icons={icon.cilStar}
        />
      ),
      type_owner: item.property.type_owner.type,
      type_publication: item.type_publication.type,
      description: (
        <Modal
          body={item.property.description}
          title="عرض الوصف"
          icons={icon.cilBook}
        />
      ),
      position: (
        <ShowMap
          id={item.id}
          lat={JSON.parse(item.property.position).latitude}
          long={JSON.parse(item.property.position).longitude}
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
          <Images photos={item.property.property_images} />
        </div>
      ),
    }))}
  />
) : (
  <p>No data available</p>
)}

        </>
      )}
    </>
  );
}

export default Index;
