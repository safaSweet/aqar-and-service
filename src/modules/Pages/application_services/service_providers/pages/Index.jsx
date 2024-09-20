// import React from "react";
// import PageTable from "../../../../../components/table/PageTable";
// import ServiceTable from "./Service_provider_table";
// import { useParams } from "react-router-dom";

// function Index() {
//   const id=useParams();
//   console.log('id:',id)
//   return (
//     <>
//       <PageTable
//         add=" اضافة مقدم خدمة"
//         title=" مقدمين الخدمات"
//         link={`/add-service-provider/${id}`}
//         table={<ServiceTable/>}
//       />
//     </>
//   );
// }

// export default Index;
import React from "react";
import PageTable from "../../../../../components/table/PageTable";
import ServiceTable from "./Service_provider_table";
import { useParams } from "react-router-dom";

function Index() {
  const id = useParams().id;
  console.log('id:', id);
  return (
    <>
      <PageTable
        search=''
        link_search=''
        add=" اضافة مقدم خدمة"
        title=" مقدمين الخدمات"
        link={`/add-service-provider/${id}`}
        table={<ServiceTable />}
      />
    </>
  );
}

export default Index