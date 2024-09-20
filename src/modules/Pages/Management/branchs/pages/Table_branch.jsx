import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CTable, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { delete_branches, get_branches } from "../Store";
import Modal from "../../../../../components/basics/Modal";
import { useNavigate } from "react-router-dom";
import ModalAdd from "../../../../../components/basics/Modal_add";

function Table_branch() {
  const branches = useSelector(
    (state) => state.branches.branches.data?.data?.branches || []
  );
  const { columns } = useSelector((state) => state.branches.branches);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(get_branches());
  }, []);

  return (
    <>
      <CTable
        className=" text-center"
        columns={columns}
        items={branches.map((item, index) => ({
          ...item,
          regions: (
            <Modal
              body={item.regions.map((n, i) => `${n.name}`).join(" , ")}
              title="عرض المناطق"
              icons={icon.cilHome}
            />
          ),
          // manager: (
          //   <Modal
          //     body={item.manager.account}
          //     title="عرض معلومات المدير"
          //     icons={icon.cilUser}
          //   />
          // ),
          sessions: (
            <CIcon
              icon={icon.cilBuilding}
              size="xl"
              onClick={() => navigate(`/sessions/${item.id}`)}
            />
          ),
          action: (
            <div className="d-flex justify-content-around">
              <CTooltip content="تعديل" placement="bottom">
                <CIcon
                  icon={icon.cilPen}
                  size="xl"
                  onClick={() => navigate(`/create-branch/${item.id}`)}
                />
              </CTooltip>
              <CTooltip content="حذف" placement="bottom">
                <CIcon
                  icon={icon.cilTrash}
                  size="xl"
                  onClick={() => {
                    dispatch(delete_branches({ id: item.id })).then(() =>
                      dispatch(get_branches())
                    );
                  }}
                />
              </CTooltip>
              <ModalAdd
                title="اضافة منطقة"
                icons={icon.cilHome}
                type="region"
                id={item.id}
              />
              <ModalAdd
                title="اضافة موظف"
                icons={icon.cilUser}
                type="employee"
                id={item.id}
              />
              <ModalAdd
                title="اضافة قسم"
                icons={icon.cilBuilding}
                type="session"
                id={item.id}
              />
            </div>
          ),
        }))}
      />
    </>
  );
}

export default Table_branch;
