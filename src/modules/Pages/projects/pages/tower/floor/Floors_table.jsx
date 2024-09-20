import { CTable, CTooltip } from "@coreui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
// import ShowMap from "../../../../../components/basics/Show_map";
// import { deleteTower, get_tower } from "../../Store";
import { useEffect, useState } from "react";
// import ModalAdd from "../../../../../components/basics/Modal_add";
// import DeleteImages from "../../../../../components/basics/DeleteImage";
// import Images from "../../../../../components/basics/Images";
import { deleteFloor, get_floor } from "../../../Store";

function Floors_table() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_floor({ tower_id: id }));
  }, []);

  const towers = useSelector(
    (state) => state.projects.get_floor.data.data?.data?.floors || []
  );

  const { columns } = useSelector((state) => state.projects.get_floor);

  return (
    <>
      <CTable
        className="text-center"
        columns={columns}
        items={towers.map((item, index) => ({
          ...item,
          property: (
            <CIcon
              icon={icon.cilHouse}
              size="xl"
              onClick={() =>
                navigate(`/properties-floor/${id}/${item.floor_number}`)
              }
            />
          ),
          action: (
            <div className="d-flex justify-content-around">
              <CTooltip content="حذف" placement="bottom">
                <CIcon
                  icon={icon.cilTrash}
                  size="xl"
                  onClick={() => {
                    dispatch(deleteFloor({ id: item.id, tower_id: id })).then(
                      () => dispatch(get_floor({ tower_id: id }))
                    );
                  }}
                />
              </CTooltip>
              <CTooltip content="تعديل" placement="bottom">
                <CIcon
                  icon={icon.cilPen}
                  size="xl"
                  onClick={() => navigate(`/create-floor/${id}/${item.id}`)}
                />
              </CTooltip>
            </div>
          ),
        }))}
      />
    </>
  );
}

export default Floors_table;
