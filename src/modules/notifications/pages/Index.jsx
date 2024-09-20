// import { CCard, CCardBody, CCardText, CCardTitle } from "@coreui/react"
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"

// function Index() {
//   const {id}=useParams()
//   const idParse= parseInt(id, 10);
//   const  data  = useSelector(
//     (state) => state.notifications.getNotifications.data?.data?.find((idNot)=>idNot.id===idParse)
//   );
//   console.log('data',data)
//   return (
//    <>
//   <CCard>
//     <CCardBody className=" text-center">
//       <CCardTitle>{data.title}</CCardTitle>
//       <CCardText>{data.description}</CCardText>
//       {data.data && data.data.map((item, index) => (
//             <CCardText key={index}>
//               <strong>{item.key}:</strong> {item.value}
//             </CCardText>
//           ))}
//     </CCardBody>
//   </CCard>
//    </>
//   )
// }

// export default Index

import {
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
function Index() {
  const { id } = useParams();
  const idParse = parseInt(id, 10);
  const navigate = useNavigate();
  const data = useSelector((state) =>
    state.notifications.getNotifications.data?.data?.find(
      (idNot) => idNot.id === idParse
    )
  );

  console.log("data", data);

  return (
    <>
      <div className="d-flex justify-content-center">
        <CCard className="w-50 mb-3 shadow-sm">
          <CCardBody className="text-center">
            <CCardTitle className="text-primary">
              <CIcon
                icon={icon.cilArrowCircleLeft}
                size="xl"
                onClick={() => navigate(-1)}
              />
              {data.title}
            </CCardTitle>
            <CCardText className="text-muted">{data.description}</CCardText>
            <CListGroup>
              {data.data &&
                data.data.map((item, index) => (
                  <CListGroupItem
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>{item.value}</span>
                    <strong>{item.key}</strong>
                  </CListGroupItem>
                ))}
            </CListGroup>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
}

export default Index;
