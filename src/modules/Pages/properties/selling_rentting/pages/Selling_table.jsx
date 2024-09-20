import {
  CContainer,
  CFormSelect,
  CPagination,
  CPaginationItem,
  CTable,
  CTooltip,
} from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_properties, get_properties } from "../Store";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Images from "../../../../../components/basics/Images";
import {
  Get_config,
  createOptions,
} from "../../../../properties_specifications/Get_config";
import SelectChangeProperty from "../../../../../components/selects_input/Select_change_property";
import ShowMap from "../../../../../components/basics/Show_map";
import Modal from "../../../../../components/basics/Modal";
import { useNavigate } from "react-router-dom";

function Selling_table() {
  const { publicationType, status_property } = Get_config();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const page = useSelector(
    (state) => state.Selling.get_properties.pagination.current_page
  );
  const last_page = useSelector(
    (state) => state.Selling.get_properties.pagination.last_page
  );
  // const { total } = useSelector(
  //   (state) => state.Selling.get_properties.pagination
  // );

  const { loading, columns } = useSelector(
    (state) => state.properties.get_properties
  );

  const data = useSelector(
    (state) => state.properties.get_properties.data.data?.data || []
  );
  const handlePageChangePlus = () => {
    dispatch(
      get_properties({
        ...params,
        page: page + 1,
      })
    );
  };
  const handlePageChangeMinus = () => {
    dispatch(
      get_properties({
        ...params,
        page: page - 1,
      })
    );
  };
  const params = {
    publication_id: "",
    page: page,
  };

  useEffect(() => {
    dispatch(get_properties(params));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    params[name] = value;
    dispatch(get_properties(params));
  };

  const tableColumns = columns || [];

  return (
    <>
      {loading ? (
        <CContainer className="text-center fs-4 fw-bold">
          يتم التحميل ...
        </CContainer>
      ) : (
        <>
          <div className=" d-flex mb-5">
            <CFormSelect
              className=" w-25"
              name="publication_id"
              options={createOptions(publicationType)}
              width="25%"
              onChange={handleChange}
            />
          </div>
          {data.length > 0 ? (
            <>
              <CTable
                className=" text-center overflow-scroll"
                hover
                columns={tableColumns}
                items={data.map((item, index) => ({
                  ...item,
                  description: (
                    <Modal
                      body={item.description}
                      title="عرض الوصف"
                      icons={icon.cilBook}
                      id={item.id}
                    />
                  ),
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
                  // contact: item.contact.identifier,
                  direction: (
                    <Modal
                      body={item.direction.map((dir) => dir.type).join(",")}
                      title="عرض الاتجاهات"
                      icons={icon.cilArrowThickRight}
                    />
                  ),
                  room: (
                    <Modal
                    body={item.room
                        .map((rm) => `${rm.type}(${rm.number_of_room})`)
                        .join(' _ ')}
                      title="عرض الغرف"
                      icons={icon.cilDoor}
                      id={item.id}
                    />
                  ),
                  service_and_virtues: (
                    <Modal
                    body={item.service_and_virtues
                        .map((sv) =>sv.type)
                        .join(",")}
                      title="عرض المميزات"
                      icons={icon.cilHouse}
                      id={item.id}
                    />
                  ),
                  type_owner: item.type_owner.type,
                  type_publication: item.type_publication.type,
                  action: (
                    <div className="d-flex justify-content-around">
                      <CTooltip
                        content="حذف"
                        placement="bottom"
                      >
                        <CIcon
                          icon={icon.cilTrash}
                          size="xl"
                          onClick={() => {
                            dispatch(
                              delete_properties({ property_id: item.id })
                            ).then(() => dispatch(get_properties(params)));
                          }}
                        />
                      </CTooltip>
                     
                      <ShowMap
                        id={item.id}
                        lat={JSON.parse(item.position).latitude}
                        long={JSON.parse(item.position).longitude}
                      />
                       <CTooltip
                        content="تعديل"
                        placement="bottom"
                      >
                      <CIcon
                        icon={icon.cilPen}
                        size="xl"
                        onClick={() =>
                          navigate(`/create-selling-property/${item.id}`)
                        }
                      /></CTooltip>
                      
                      <Images photos={item.property_images} type="property" />
                      <SelectChangeProperty
                        id={item.id}
                        statuses={createOptions(status_property)}
                        params={params}
                        type="property"
                      />
                      <SelectChangeProperty
                        id={item.id}
                        statuses={createOptions(publicationType)}
                        params={params}
                        type="property_publication"
                      />
                    </div>
                  ),
                }))}
              />
            </>
          ) : (
            <CContainer className="text-center fs-4 fw-bold">
              لا يوجد عقارات
            </CContainer>
          )}
        </>
      )}
      <CPagination size="sm" aria-label="Page navigation example">
        <CPaginationItem
          onClick={() => handlePageChangeMinus()}
          disabled={page === 1}
        >
          Previous
        </CPaginationItem>
        <CPaginationItem>
          Page {page}
          {/* of {total} */}
        </CPaginationItem>
        <CPaginationItem
          onClick={() => handlePageChangePlus()}
          disabled={page === last_page}
        >
          Next
        </CPaginationItem>
      </CPagination>
    </>
  );
}

export default Selling_table;
