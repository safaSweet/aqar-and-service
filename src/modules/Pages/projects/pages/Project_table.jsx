import { CTable, CTooltip } from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, get_project } from "../Store";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import ShowMap from "../../../../components/basics/Show_map";
import Images from "../../../../components/basics/Images";
import Modal from "../../../../components/basics/Modal";
import ModalAdd from "../../../../components/basics/Modal_add";
import { useNavigate } from "react-router-dom";
import DeleteImages from "../../../../components/basics/DeleteImage";
function Project_table() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(get_project());
  }, []);
  const { columns, data } = useSelector((state) => state.projects.get_projects);
  const all_data = data.data?.data || [];

  return (
    <CTable
      className=" text-center overflow-scroll"
      hover
      columns={columns}
      items={all_data.map((item, id) => ({
        ...item,
        description: (
          <Modal
            title="المواصفات"
            icons={icon.cilBook}
            body={item.description}
          />
        ),
        tower: (
          <CIcon
            icon={icon.cilHome}
            size="xl"
            onClick={() => navigate(`/towers/${item.id}`)}
          />
        ),
        position: (
          <ShowMap
            id={item.id}
            lat={JSON.parse(item.position).latitude}
            long={JSON.parse(item.position).longitude}
          />
        ),
        images: <Images photos={item.photo} type="property" />,
        specification: (
          <Modal
            title="المواصفات"
            icons={icon.cilSpeech}
            body={
              <ul>
                {item.specification.map((rm, index) => (
                  <li key={index}>{`${rm.type}(${rm.number})`}</li>
                ))}
              </ul>
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
                dispatch(deleteProject(item.id)).then(() =>
                  dispatch(get_project())
                );
              }}
            /></CTooltip>
            <CTooltip content="تعديل" placement="bottom">
              <CIcon
                icon={icon.cilPen}
                size="xl"
                onClick={() => navigate(`/create-project/${item.id}`)}
              />
            </CTooltip>

            <ModalAdd
              title="اضافة مميزات"
              icons={icon.cilStar}
              type="specification"
              id={item.id}
            />
            <ModalAdd
              title="اضافة صور"
              icons={icon.cilImagePlus}
              type="image"
              id={item.id}
            />
            <DeleteImages photos={item.photo} id={item.id} type="project" />
          </div>
        ),
        specification: item.specification
          .map((rm) => `${rm.type}(${rm.number})`)
          .join(","),
      }))}
    />
  );
}

export default Project_table;
