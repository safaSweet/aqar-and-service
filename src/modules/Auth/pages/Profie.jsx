import {
  CCard,
  CContainer,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../Store";
import Edit_info from "./Edit_info";

function Profie() {
  const dispatch = useDispatch();
  const [visible,setVisible]=useState(false);
  const data =
    useSelector((state) => state.user_info.user_info.data.User) || {};

  useEffect(() => {
    dispatch(userInfo());
  }, [dispatch]);

  return (
    <>
      <CContainer>
        {data && (
          <>
            <CCard className=" text-end mb-3 p-3 fs-5">
              <img
                src={data.image_profile}
                alt=".." 
                width="10%"
              />
              <>
                <p>
                  {data.first_name} {data.father_name} {data.last_name}{data.full_name}: الاسم
                </p>
                <p>{data.phone} : الرقم </p>
                <p>{data.email} : الايميل</p>
                <p>{data.birth_date} : تاريخ الميلاد </p>
                <p>
                  العنوان : {data.address?.governorate?.name} -{" "}
                  {data.address?.region?.name} - {data.address?.town?.name}{" "}
                </p>
              </>
               {/* <CIcon icon={icon.cilPen} size="xl" onClick={() => setVisible(!visible)} /> */}
               {/* <Edit_info visible={visible}/> */}
            </CCard>
          </>
        )}
      </CContainer>
    </>
  );
}

export default Profie;
