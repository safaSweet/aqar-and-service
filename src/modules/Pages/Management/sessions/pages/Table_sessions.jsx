import { CTable, CTooltip } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { delete_session, get_branches } from "../../branchs/Store";

function Table_sessions() {
  const { idBranch } = useParams();
  const idBranchParse = parseInt(idBranch, 10);
  const session = useSelector(
    (state) =>
      state.branches.branches.data?.data?.branches.find(
        (session) => session.id === idBranchParse
      ).sessions
  );
  const { columns_sessions } = useSelector((state) => state.branches.branches);
  console.log("session", session);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <CTable
        className=" text-center"
        columns={columns_sessions}
        items={session.map((item, index) => ({
          ...item,
          employees: (
            <CIcon
              icon={icon.cilPeople}
              size="xl"
              onClick={() => navigate(`/employees/${idBranch}/${item.id}`)}
            />
          ),
          action: (
            <>
              <CTooltip content="تعديل" placement="bottom">
                <CIcon
                  icon={icon.cilPen}
                  size="xl"
                  onClick={() =>
                    navigate(`/create-session/${idBranch}/${item.id}`)
                  }
                />
              </CTooltip>
              <CTooltip content="حذف" placement="bottom">
                <CIcon
                  icon={icon.cilTrash}
                  size="xl"
                  onClick={() => {
                    dispatch(delete_session({ id: item.id })).then(() =>
                      dispatch(get_branches())
                    );
                  }}
                />
              </CTooltip>
            </>
          ),
        }))}
      />
    </>
  );
}

export default Table_sessions;
