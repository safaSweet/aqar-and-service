import React from 'react'
import { CCard, CContainer, CCardText, CButton, CFormSelect, CTable } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import { Get_config, createOptions } from '../../../../../../properties_specifications/Get_config';
import { useDispatch, useSelector } from 'react-redux';
import { GetFloorProperty_status } from '../../../../Store';
function Search() {
    const style = {
        direction: "rtl",
        padding: "30px",
        margin: "2%",
      };
      const params={
        status_id:''
      }
      const dispatch=useDispatch()
      const {Status}=Get_config()
      const data_status=useSelector((status)=>status.projects.get_property.data_status?.data?.data||[])
      const {columns}=useSelector((status)=>status.projects.get_property)
      console.log(data_status)
      const handleChange = (event) => {
        const { name, value } = event.target;
        params[name] = value;
        dispatch(GetFloorProperty_status(params));
      };
  return (
    <>
    <CCard style={style}>
      <CContainer className=" overflow-scroll">
        <div className="selling">
          <CCardText className=" fs-4">البحث</CCardText>
          <CFormSelect
          className=' w-25'
            options={createOptions(Status)}
            name='status_id'
            onChange={handleChange}
          />
        </div>
       <CTable columns={columns} 
      //  items={
      //   data_status.map((item, index) => 
      //   ({ item}))
      //  }
      items={data_status.map((item, index) => ({
          ...item,
          type_owner: item.type_owner.type,
          cladding_level: item.cladding_level.name,
          direction: item.direction.map((dir) => dir.type).join(","),
          status: item.status.type,
          
        }))}
       />
      </CContainer>
    </CCard>
  </>)
}

export default Search/////////


// import React, { useEffect } from 'react';
// import { CCard, CContainer, CCardText, CFormSelect, CTable } from "@coreui/react";
// import { useNavigate } from "react-router-dom";
// import { Get_config, createOptions } from '../../../../../../properties_specifications/Get_config';
// import { useSelector, useDispatch } from 'react-redux';
// import { getConfig } from '../../../../../../properties_specifications/Store';

// function Search() {
//   const style = {
//     direction: "rtl",
//     padding: "30px",
//     margin: "2%",
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getConfig());
//   }, []);

//   const { Status } = Get_config();
//   const data_status = useSelector((status) => status.projects.get_property || []);
//   console.log(data_status);

//   return (
//     <>
//       <CCard style={style}>
//         <CContainer className=" overflow-scroll">
//           <div className="selling">
//             <CCardText className=" fs-4">البحث</CCardText>
//             <CFormSelect
//               className=' w-25'
//               options={createOptions(Status)}
//               name='status_id'
//             />
//           </div>
//           <CTable />
//         </CContainer>
//       </CCard>
//     </>
//   )
// }

// export default Search;
