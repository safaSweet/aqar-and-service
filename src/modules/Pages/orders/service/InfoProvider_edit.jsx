
// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   CContainer,
//   CRow,
//   CCol,
//   CCard,
//   CCardBody,
//   CCardTitle,
//   CCardText,
//   CCardImage,
//   CListGroup,
//   CListGroupItem,
// } from '@coreui/react';

// function InfoProvider_edit() {
//   const { id } = useParams();
//   const idParser = parseInt(id, 10);
  
//   const { old_data, new_data } = useSelector((state) =>
//     state.order_category_service?.order_category.edit_data.find(
//       (provider) => provider.id === idParser
//     ) || { old_data: {}, new_data: {} }
//   );
//   console.log("ppp", old_data);
//   console.log("eee", new_data);
//   const {
//     name,
//     email,
//     contact_information,
//     address,
//     Identyfie_paper,
//     business,
//     category_service,
//     status,
//   } = old_data;

// const renderData = (data) => {
//   return Object.entries(data).map(([key, value]) => {
//     if (Array.isArray(value)) {
//       return (
//         <div key={key}>
//           <h5>{key}:</h5>
//           <CListGroup>
//             {value.map((item, index) => {
//               if (typeof item === 'string' && item.startsWith('http')) {
//                 return (
//                   <CListGroupItem key={index}>
//                     <CCardImage style={{width:'33%'}} src={item} alt={`Image_${index + 1}`} />
//                   </CListGroupItem>
//                 );
//               } else if (typeof item === 'object' && item !== null) {
//                 return (
//                   <CListGroupItem key={index}>
//                     <CCardText>{JSON.stringify(item)}</CCardText>
//                   </CListGroupItem>
//                 );
//               } else {
//                 return (
//                   <CListGroupItem key={index}>
//                     <CCardText>{item}</CCardText>
//                   </CListGroupItem>
//                 );
//               }
//             })}
//           </CListGroup>
//         </div>
//       );
//     } else if (typeof value === 'string' && value.startsWith('http')) {
//       // Directly handle URL strings
//       return (
//         <CCardText key={key}>
//           <strong>{key}:</strong>
//           <CListGroupItem>
//             <CCardImage src={value} alt={`Image_${key}`} />
//           </CListGroupItem>
//         </CCardText>
//       );
//     } else if (typeof value === 'object' && value !== null) {
//       return (
//         <CCardText key={key}>
//           {/* <strong>{key}:</strong> */}
//            {JSON.stringify(value)}
//         </CCardText>
//       );
//     } else {
//       return (
//         <CCardText key={key}>
//           <strong>{key}:</strong> {value}
//         </CCardText>
//       );
//     }
//   });
// };
//   return (
//     <CContainer>
//       <CRow>
//         {/* Old Data Section */}
//         <CCol sm={6}>
//           {/* <CCard>
//             <CCardBody>
//               <CCardTitle>Old Data</CCardTitle>
//               {renderData(old_data)}
//             </CCardBody>
//           </CCard> */}
//           <CCard>
//         <CCardBody>
//         <CCardTitle className=' mb-5'> المعلومات الموجودة </CCardTitle>

//           <CCardTitle>{name}</CCardTitle>
//           <CCardText>Email: {email}</CCardText>
//           <CCardText>Status: {status.type}</CCardText>
//           <CCardText>Address: {address[0]?.value.name}</CCardText>

//           <h5>Contact Information:</h5>
//           <CListGroup>
//             {contact_information.map((contact, index) => (
//               <CListGroupItem key={index}>
//                 Mobile Number: {contact.mobile_number}
//               </CListGroupItem>
//             ))}
//           </CListGroup>

//           <h5>Service Category:</h5>
//           <CCardText className=' '>{category_service.name}</CCardText>
//           <h5>Identity Papers:</h5>
//           <CRow>
//             {Identyfie_paper.map((paper, index) => (
//               <CCol xs='4' key={index}>
//                 <CCardImage  src={paper.url} alt={`Identity_Paper_${index + 1}`} />
//               </CCol>
//             ))}
//           </CRow>

//           <h5>Business Images:</h5>
//           <CRow>
//             {business.map((biz, index) => (
//               <CCol xs='4' key={index}>
//                 <CCardImage  src={biz.url} alt={`Business_Image_${index + 1}`} />
//               </CCol>
//             ))}
//           </CRow>

//         </CCardBody>
//       </CCard>
//         </CCol>

//         {/* New Data Section */}
//         {/* <CCol sm={6}>
//           <CCard>
//             <CCardBody>
//               <CCardTitle className=' mb-5'>المعلومات التي يريد المستخدم تعديلها </CCardTitle>
//               {renderData(new_data)}
//             </CCardBody>
//           </CCard>
//         </CCol> */}
//         <CCol sm={6}>
//   <CCard>
//     <CCardBody>
//       <CCardTitle className=' mb-5'>المعلومات التي يريد المستخدم تعديلها</CCardTitle>
//       {renderData(new_data)}
//     </CCardBody>
//   </CCard>
// </CCol>

//       </CRow>
//     </CContainer>
//   );
// }

// export default InfoProvider_edit;
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardImage,
  CListGroup,
  CListGroupItem,
} from '@coreui/react';

function InfoProvider_edit() {
  const { id } = useParams();
  const idParser = parseInt(id, 10);
  
  const { old_data, new_data, type_edit } = useSelector((state) =>
    state.order_category_service?.order_category.edit_data.find(
      (provider) => provider.id === idParser
    ) || { old_data: {}, new_data: {}, type_edit: '' }
  );

  const renderData = (data) => {
    if (type_edit === 'delete_photo' || type_edit === 'add_photo') {
      // Ensure data is an array before mapping over it
      if (Array.isArray(data)) {
        return data.map((item, index) => (
          <CCol xs='4' key={index}>
          <CCardText>{type_edit}</CCardText>
            <CCardImage src={item.value || item} alt={`Image_${index + 1}`} />
          </CCol>
        ));
      } else {
        // If data is not an array, return an empty fragment or some fallback UI
        return <CCardText>No images available</CCardText>;
      }
    } else if (type_edit === 'information') {
      // Handle the case where new_data might be an object instead of an array
      if (Array.isArray(data)) {
        return data.map((item, index) => (
          <CCardText key={index}>
            <strong>{item.key}:</strong> {item.value}
          </CCardText>
        ));
      } else if (typeof data === 'object' && data !== null) {
        // If data is an object, render its keys and values
        return Object.entries(data).map(([key, value], index) => (
          <CCardText key={index}>
            <strong>{key}:</strong> {value}
          </CCardText>
        ));
      } else {
        // Handle other cases, like if data is a string or null
        return <CCardText>No data available</CCardText>;
      }
    }
  };
  
  return (
    <CContainer>
      <CRow>
        {/* Old Data Section */}
        <CCol sm={6}>
          <CCard>
            <CCardBody>
              <CCardTitle className='mb-5'>المعلومات الموجودة</CCardTitle>

              <CCardTitle>{old_data.name}</CCardTitle>
              <CCardText>Email: {old_data.email}</CCardText>
              <CCardText>Status: {old_data.status.type}</CCardText>
              <CCardText>Address: {old_data.address[0]?.value.name}</CCardText>

              <h5>Contact Information:</h5>
              <CListGroup>
                {old_data.contact_information.map((contact, index) => (
                  <CListGroupItem key={index}>
                    Mobile Number: {contact.mobile_number}
                  </CListGroupItem>
                ))}
              </CListGroup>

              <h5>Service Category:</h5>
              <CCardText>{old_data.category_service.name}</CCardText>
              <h5>Identity Papers:</h5>
              <CRow>
                {old_data.Identyfie_paper.map((paper, index) => (
                  <CCol xs='4' key={index}>
                    <CCardImage src={paper.url} alt={`Identity_Paper_${index + 1}`} />
                  </CCol>
                ))}
              </CRow>

              <h5>Business Images:</h5>
              <CRow>
                {old_data.business.map((biz, index) => (
                  <CCol xs='4' key={index}>
                    <CCardImage src={biz.url} alt={`Business_Image_${index + 1}`} />
                  </CCol>
                ))}
              </CRow>

            </CCardBody>
          </CCard>
        </CCol>

        {/* New Data Section */}
        <CCol sm={6}>
          <CCard>
            <CCardBody>
              <CCardTitle className='mb-5'>المعلومات التي يريد المستخدم تعديلها</CCardTitle>
              <CRow>
                {renderData(new_data)}
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>
    </CContainer>
  );
}

export default InfoProvider_edit;
