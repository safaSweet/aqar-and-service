// import { CCard, CCardText, CContainer } from "@coreui/react";
// import React from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";

// function InfoProvider_add() {
//   const { id } = useParams();
//   const idParser = parseInt(id, 10);
//   const  add_data  = useSelector((state) =>
//     state.order_category_service?.order_category.add_data
//   .find(
//       (provider) => provider.id === idParser
//     ).service_provider
//   );
//   console.log(add_data);
//   return (
//     <>
//       <CContainer>
//         <CCard>
//           <CCardText>kkkkkkkkk</CCardText>
//         </CCard>
//       </CContainer>
//     </>
//   );
// }

// export default InfoProvider_add;
// ظظظظظظظظظظظظظظظظظظظظظظظظ


import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CContainer,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardImage,
  CListGroup,
  CListGroupItem,
  CRow,
  CCol,
} from '@coreui/react';

function InfoProvider_add() {
  const { id } = useParams();
  const idParser = parseInt(id, 10);
  
  const add_data = useSelector((state) =>
    state.order_category_service?.order_category.add_data.find(
      (provider) => provider.id === idParser
    )?.service_provider
  );

  if (!add_data) {
    return <CCardText>No data found</CCardText>;
  }

  const {
    name,
    email,
    contact_information,
    address,
    Identyfie_paper,
    business,
    category_service,
    status,
  } = add_data;

  return (
    <CContainer>
      <CCard>
        <CCardBody className=' text-end'>
          <CCardTitle>{name}</CCardTitle>
          <CCardText>الايميل {email}</CCardText>
          <CCardText>الحالة {status.type}</CCardText>
          <CCardText>العنوان {address[0]?.value.name}</CCardText>

          <h5>معلومات التواصل </h5>
          <CListGroup>
            {contact_information.map((contact, index) => (
              <CListGroupItem key={index}>
                رقم الهاتف  {contact.mobile_number}
              </CListGroupItem>
            ))}
          </CListGroup>

          <h5>فئة الخدمة </h5>
          <CCardText className=' '>{category_service.name}</CCardText>
          {/* <CCardImage className=' w-50' src={category_service.icon} alt="Category Icon" /> */}
          <h5>الاوراق الثبوتية </h5>
          <CRow>
            {Identyfie_paper.map((paper, index) => (
              <CCol xs='4' key={index}>
                <CCardImage width='55%' src={paper.url} alt={`Identity_Paper_${index + 1}`} />
              </CCol>
            ))}
          </CRow>

          <h5>معرض الاعمال </h5>
          <CRow>
            {business.map((biz, index) => (
              <CCol xs='4' key={index}>
                <CCardImage width='55%' src={biz.url} alt={`Business_Image_${index + 1}`} />
              </CCol>
            ))}
          </CRow>

        </CCardBody>
      </CCard>
    </CContainer>
  );
}

export default InfoProvider_add;
