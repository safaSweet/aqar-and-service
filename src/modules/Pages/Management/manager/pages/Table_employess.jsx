import { CTable, CTooltip } from "@coreui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import {
  delete_employee,
  delete_manager,
  delete_manager_branch,
  get_branches,
  get_manager,
} from "../../branchs/Store";
import Modal from "../../../../../components/basics/Modal";
import Index_notification from "../../../../../components/notification/Index_notification";

function Table_employees() {
  const { idBranch, idSession } = useParams();
  useEffect(() => {
    dispatch(get_manager());
  }, []);
  // جلب الجلسة الصحيحة من الفرع

  const employees = useSelector(
    (state) => state.branches.managers.data.data?.managers || []
  );
  console.log("55555555555555555555555", employees);

  const { columns } = useSelector((state) => state.branches.managers);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* <Index_notification/> */}
      <CTable
        className="text-center"
        columns={columns}
        items={employees.map((item, index) => ({
          ...item,
          full_name: `${item.account.first_name} ${item.account.father_name} ${item.account.last_name}`,
          phone: item.account.phone,
          email: item.account.email,
          birth_date: item.account.birth_date,
          branches: item.branches.name,
          address: (
            <Modal
              body={item.account.address
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
          role: (
            <Modal
              body={item.account.role.map((role) => role.name).join("-")}
              title="عرض صلاحيات الموظف"
              icons={icon.cilLockUnlocked}
            />
          ),
          action: (
            <>
              <CTooltip content="الغاء تعيين مدير" placement="bottom">
                <CIcon
                  icon={icon.cilUserX}
                  size="xl"
                  onClick={() => {
                    dispatch(delete_manager_branch({ id: item.id })).then(() =>
                      dispatch(get_manager())
                    );
                  }}
                />
              </CTooltip>
              <CTooltip content="  تعديل" placement="bottom">
                <CIcon
                  icon={icon.cilPen}
                  size="xl"
                  onClick={() => navigate(`/create-manager/${item.id}`)}
                />
              </CTooltip>
              <CTooltip content="حذف" placement="bottom">
                <CIcon
                  icon={icon.cilTrash}
                  size="xl"
                  onClick={() => {
                    dispatch(delete_manager({ id: item.id })).then(() =>
                      dispatch(get_manager())
                    );
                  }}
                />
              </CTooltip>
              {/* <ModalAdd
                title="اضافة موظف الى قسم"
                icons={icon.cilUser}
                type="employee_session"
                id={item.id}
              /> */}
            </>
          ),
        }))}
      />
    </>
  );
}

export default Table_employees;
