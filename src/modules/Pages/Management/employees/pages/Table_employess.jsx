
import { CTable, CTooltip } from "@coreui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { delete_employee, get_branches } from "../../branchs/Store";
import ModalAdd from "../../../../../components/basics/Modal_add";
import Modal from "../../../../../components/basics/Modal";

function Table_employees() {
  const { idBranch, idSession } = useParams();
  const idBranchParse = parseInt(idBranch, 10);
  const idSessionParse = parseInt(idSession, 10);

  // جلب الجلسة الصحيحة من الفرع
  const session = useSelector((state) =>
    state.branches.branches.data?.data?.branches
      .find((branch) => branch.id === idBranchParse)
      ?.sessions.find((session) => session.id === idSessionParse)
  );

  const employees = session?.employees || [];

  const { columns_employee } = useSelector((state) => state.branches.branches);
  console.log(idBranch, idSession, "sessionnnnnnnnnnnnnnn", session);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <CTable
        className="text-center"
        columns={columns_employee}
        items={employees.map((item, index) => ({
          ...item,
          full_name: `${item.account.first_name} ${item.account.father_name} ${item.account.last_name}`,
          phone: item.account.phone,
          email: item.account.email,
          birth_date: item.account.birth_date,
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
              <CTooltip content="تعديل" placement="bottom">
                <CIcon
                  icon={icon.cilPen}
                  size="xl"
                  onClick={() =>
                    navigate(
                      `/create-employee/${idBranch}/${idSession}/${item.id}`
                    )
                  }
                />
              </CTooltip>
              <CTooltip content="حذف" placement="bottom">
                <CIcon
                  icon={icon.cilTrash}
                  size="xl"
                  onClick={() => {
                    dispatch(delete_employee({ id: item.id })).then(() =>
                      dispatch(get_branches())
                    );
                  }}
                />
              </CTooltip>
              <ModalAdd
                title="اضافة موظف الى قسم"
                icons={icon.cilUser}
                type="employee_session"
                id={item.id}
              />
            </>
          ),
        }))}
      />
    </>
  );
}

export default Table_employees;
