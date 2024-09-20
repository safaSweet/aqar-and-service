import { CTable, CTooltip } from "@coreui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import ShowMap from "../../../../../components/basics/Show_map";
import { deleteTower, get_tower } from "../../Store";
import { useEffect, useState } from "react";
import ModalAdd from "../../../../../components/basics/Modal_add";
import DeleteImages from "../../../../../components/basics/DeleteImage";
import Images from "../../../../../components/basics/Images";

function IndexTower() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const towers = useSelector(
    (state) => state.projects.get_tower.data.data?.data.towers || []
  );
  useEffect(() => {
    dispatch(get_tower(id));
  }, []);

  const { columns } = useSelector((state) => state.projects.get_tower);

  return (
    <>
      <CTable
        className="text-center"
        columns={columns}
        items={towers.map((item, index) => ({
          ...item,
          classification: item.classification.type,
          floor: (
            <CIcon
              icon={icon.cilLayers}
              size="xl"
              onClick={() => navigate(`/floors/${item.id}`)}
            />
          ),
          position: (
            <ShowMap
              id={item.id}
              lat={JSON.parse(item.position).latitude}
              long={JSON.parse(item.position).longitude}
            />
          ),
          image: <Images photos={item.photos} />,
          action: (
            <div className="d-flex justify-content-around">
              <CTooltip content="حذف" placement="bottom">
                <CIcon
                  icon={icon.cilTrash}
                  size="xl"
                  onClick={() => {
                    dispatch(deleteTower(item.id)).then(() =>
                      dispatch(get_tower(id))
                    );
                  }}
                />
              </CTooltip>
              <CTooltip content="تعديل" placement="bottom">
                <CIcon
                  icon={icon.cilPen}
                  size="xl"
                  onClick={() => navigate(`/create-tower/${id}/${item.id}`)}
                />
              </CTooltip>

              <ModalAdd
                title="اضافة صور"
                icons={icon.cilImagePlus}
                type="image_tower"
                id={item.id}
              />
              <DeleteImages
                photos={item.photos}
                id={item.id}
                type="tower"
                id0={id}
              />
            </div>
          ),
        }))}
      />
    </>
  );
}

export default IndexTower;
