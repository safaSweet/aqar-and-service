import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteFloorProperty,
  delete_rentalPeriod_tower_property,
  get_property,
} from "../../../../Store";
import { useNavigate, useParams } from "react-router-dom";
import { CTable, CTooltip } from "@coreui/react";

import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import Images from "../../../../../../../components/basics/Images";
import ModalAdd from "../../../../../../../components/basics/Modal_add";
import DeleteImages from "../../../../../../../components/basics/DeleteImage";
import Room_add from "../../../../../../../components/basics/Room_add";
import Period_add from "../../../../../../../components/basics/Period_add";
import Modal from "../../../../../../../components/basics/Modal";

function Properties_table() {
  const { idTower, numberFloor } = useParams();
  const dispatch = useDispatch();
  const property = useSelector(
    (state) => state.projects.get_property.data.data?.data || []
  );
  const { columns } = useSelector((state) => state.projects.get_property);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(get_property({ tower_id: idTower, floor_number: numberFloor }));
  }, []);
  return (
    <>
      <CTable
        className=" text-center"
        columns={columns}
        items={property.map((item, index) => ({
          ...item,
          type_owner: item.type_owner.type,
          cladding_level: item.cladding_level.name,
          direction: (
            <Modal
              body={item.direction.map((dir) => dir.type).join(",")}
              title="عرض الاتجاهات"
              icons={icon.cilArrowThickRight}
            />
          ),
          status: item.status.type,
          periods: (
            <Modal
            body={item.periods
                        .map((period) =>period.period)
                        .join(",")}
              title="عرض المدة المتاحة للتاجير"
              icons={icon.cilClock}
              icons_del={icon.cilTrash}
              delet="delete_period"
              id={item.id}
            />
          ),
         
          room: (
            <Modal
            body={item.room
                        .map((rm) => `${rm.type}(${rm.number_of_room})`)
                        .join(' _ ')}
              title="عرض الغرف"
              icons={icon.cilHouse}
              icons_del={icon.cilTrash}
              delet="delete_room"
              id={item.id}
            />
          ),
          image: <Images photos={item.photos} type="floor_property" />,
          action: (
            <div className="d-flex justify-content-around">
             <CTooltip content="حذف" placement="bottom">
              <CIcon
                icon={icon.cilTrash}
                size="xl"
                onClick={() => {
                  dispatch(deleteFloorProperty({ property_id: item.id })).then(
                    () =>
                      dispatch(
                        get_property({
                          tower_id: idTower,
                          floor_number: numberFloor,
                        })
                      )
                  );
                }}
              /></CTooltip>
               <CTooltip content="تعديل" placement="bottom">
              <CIcon
                icon={icon.cilPen}
                size="xl"
                onClick={() =>
                  navigate(`/create-property-floor/${idTower}/${item.id}`)
                }
              /></CTooltip>
              <Room_add icons={icon.cilDoor} title="اضافة غرفة" id={item.id} />

              <Period_add
                icons={icon.cilClock}
                title="اضافة فترة اجار"
                id={item.id}
              />
              <ModalAdd
                title="اضافة صور"
                icons={icon.cilImagePlus}
                type="image_property"
                id={item.id}
                // id0={idTower}
                // numberFloor={numberFloor}
              />
              <DeleteImages
                photos={item.photos}
                id={item.id}
                type="floor_property"
              />
            </div>
          ),
        }))}
      />
    </>
  );
}

export default Properties_table;
