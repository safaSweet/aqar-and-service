// import Button from "../basics/Button";
import { CCard, CContainer, CCardText, CTable } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import SelectChangeProperty from "../../../../../components/selects_input/Select_change_property";
import ShowMap from "../../../../../components/basics/Show_map";
import Modal from "../../../../../components/basics/Modal";
import { delete_properties, get_properties } from "../Store";
// import { useNavigate } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Images from "../../../../../components/basics/Images";
function IndexSearch() {
  const { data } = useSelector((state) => state.properties.search_properties);
  console.log('dataaaaaaaa',data)
  const { columns } = useSelector(
      (state) => state.properties.get_properties
    );
    const tableColumns = columns || [];
  const dispatch = useDispatch();

  const style = {
    direction: "rtl",
    padding: "30px",
    margin: "2%",
  };
  return (
    <>
      <CCard style={style}>
        <CContainer className=" overflow-scroll">
          <div className="selling">
            <CCardText className=" fs-4">نتائج البحث</CCardText>
          </div>
         
          {data.length > 0 ? (
            <CTable
                className=" text-center overflow-scroll"
                hover
                columns={tableColumns}
                items={data.map((item, index) => ({
                  ...item,
                  description: <Modal
                      body={item.description}
                      title="عرض الوصف"
                      icons={icon.cilBook}
                      id={item.id}
                    />,
                  address: item.address
                    .map((addr) =>
                      addr && addr.value && addr.value.name
                        ? addr.value.name
                        : "Unknown"
                    )
                    .join("-"),
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
                      body={item.room.map((rm, index) => (
                        <>
                          <div key={index}>
                            {rm.type} ({rm.number_of_room})
                          </div>
                        </>
                      ))}
                      title="عرض الغرف"
                      icons={icon.cilDoor}
                      id={item.id}
                    />
                  ),
                  service_and_virtues: (
                    <Modal
                      body={item.service_and_virtues.map((rm, index) => (
                        <>
                          <div key={index}>{rm.type}</div>
                        </>
                      ))}
                      title="عرض المميزات"
                      icons={icon.cilHouse}
                      id={item.id}
                    />
                  ),
                  type_owner: item.type_owner.type,
                  type_publication: item.type_publication.type,
                  action: (
                    <div className="d-flex justify-content-around">
                      {/* <CIcon
                        icon={icon.cilTrash}
                        size="xl"
                        onClick={() => {
                          dispatch(
                            delete_properties({ property_id: item.id })
                          ).then(() => dispatch(get_properties(params)));
                        }}
                      /> */}

                      {/* <ShowMap
                        id={item.id}
                        lat={JSON.parse(item.position).latitude}
                        long={JSON.parse(item.position).longitude}
                      />
                      <Images photos={item.property_images} type="property" />
                      <SelectChangeProperty
                        id={item.id}
                        statuses={createOptions(status_property)}
                        params={params}
                        type="property"
                      /> */}
                      {/* <SelectChangeProperty
                        id={item.id}
                        statuses={createOptions(publicationType)}
                        params={params}
                        type="property_publication"
                      /> */}
                    </div>
                  ),
                }))}
              />
          ):(<CContainer className="text-center fs-4 fw-bold">
              لا يوجد عقارات
            </CContainer>)}
            
        </CContainer>
      </CCard>
    </>
  );
}
export default IndexSearch;
